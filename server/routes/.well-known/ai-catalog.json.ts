// Legacy path for backward compatibility with AI Catalog spec (pre-ARD)
// Most trackers still only look for ai-catalog.json, so we serve the same document
import ardCatalog from './ard.json.ts'

export default defineEventHandler((event) => {
  return ardCatalog(event)
})
