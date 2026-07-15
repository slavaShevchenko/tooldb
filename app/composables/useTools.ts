import { tools } from '~/data/tools'

export const useTools = () => {
  return {
    tools,
    featuredTools: tools.filter(tool => tool.featured),
  }
}