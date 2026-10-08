// Keep in sync with basePath in next.config.js. Plain <img> and other raw asset
// URLs don't get the base path added automatically in a static export.
export const BASE_PATH = '/resume'

export function withBasePath(path: string) {
  return `${BASE_PATH}${path}`
}
