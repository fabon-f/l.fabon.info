import { readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const BASE_URL = 'https://l.fabon.info'

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

async function main() {
  const files = await findHtml('dist/client')
  const pages = files.filter(f => !f.endsWith('/404.html')).map(f => pathToUrl(f))
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    ${pages.map(url => '<loc>' + url + '</loc>').join('\n    ')}
  </url>
</urlset>
`
  writeFile('dist/client/sitemap.xml', sitemap)
}

main()
