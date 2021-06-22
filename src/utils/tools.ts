import qs from 'qs'

export const getParameterByName = (name: string): string => {
  const searchStr = decodeURIComponent(window.location.search.replace(/\?/, ''))
  const searchMap = qs.parse(searchStr)
  if (searchMap[name]) {
    return searchMap[name] as string
  }
  return ''
}
