import { readdir, writeFile, readFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import * as cheerio from 'cheerio'
import { Feed } from 'feed'

const BASE_URL = 'https://l.fabon.info'
const ROOT_DIR = 'dist/client'

async function findHtml(target: string) {
  return _find(target, '/')
}

// breadth first search
async function _find(target: string, prefix: string): Promise<string[]> {
  const files = await readdir(target, { withFileTypes: true })
  const htmlFiles = files.filter(f => f.isFile() && f.name.endsWith('.html')).map(f => join(prefix, f.name))
  const recursiveFiles = await Promise.all(files.filter(f => f.isDirectory()).map(f => _find(join(target, f.name), join(prefix, f.name))))
  for (const files of recursiveFiles) {
    htmlFiles.push(...files)
  }
  return htmlFiles
}

function pathToUrl(path: string) {
  const absolutePath = path === '/index.html' ? '/' : path.replace(/\/index\.html$/, '/').replace(/\.html$/, '')
  return new URL(absolutePath, BASE_URL).toString()
}

type PageInfo = {
  url: string
  description: string
  title: string
  date: Date | null
}

async function extractPageInfo(path: string): Promise<PageInfo> {
  const content = await readFile(join('dist/client', path), { encoding: 'utf-8' })
  const date = (content.match(/<!-- publishedAt: ([^ ]*) -->/) || [])[1]?.trim()
  const $ = cheerio.load(content)
  const description = $('meta[name=description]').attr('content') ?? ''
  const title = $('title').text()
  return {
    url: pathToUrl(path),
    description,
    title,
    date: date ? new Date(date) : null
  }
}

async function generateFeed(pageInfos: PageInfo[]) {
  const infos = [...pageInfos]
  infos.sort((a, b) => (b.date ?? new Date(0)).getTime() - (a.date ?? new Date(0)).getTime())
  const feed = new Feed({
    title: 'ファヴォルスキー・アルヒーフ',
    description: 'ふぁぼんが執筆・翻訳した文章のアーカイブ',
    id: BASE_URL,
    link: BASE_URL,
    language: 'ja',
    copyright: 'CC BY-NC 4.0 unless otherwise noted, ふぁぼん',
    author: {
      name: 'ふぁぼん',
      link: 'https://www.fabon.info'
    }
  })

  for (const { title, description, url, date } of infos) {
    if (!date) { continue; }
    feed.addItem({
      title,
      description,
      id: url,
      link: url,
      date,
    })
  }

  await mkdir(join(ROOT_DIR, 'feed'), { recursive: true })
  await writeFile(join(ROOT_DIR, 'feed', 'rss.xml'), feed.rss2())
  await writeFile(join(ROOT_DIR, 'feed', 'atom.xml'), feed.atom1())
  await writeFile(join(ROOT_DIR, 'feed', 'feed.json'), feed.json1())
}

async function main() {
  const files = (await findHtml(ROOT_DIR)).filter(f => !f.endsWith('/404.html'))
  const pageInfos = await Promise.all(files.map(f => extractPageInfo(f)))
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pageInfos.map(info => '<url><loc>' + info.url + '</loc></url>').join('\n  ')}
</urlset>
`
  writeFile(join(ROOT_DIR, 'sitemap.xml'), sitemap)

  generateFeed(pageInfos)
}

main()
