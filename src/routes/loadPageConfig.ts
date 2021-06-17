
/**
 * 约定是路由配置
 * 加载所有的pages下index.tsx
 * 默认命名为该文件夹名字，中横线转下划线命名
 * 注意：各模块文件夹不能重名
 * 路由配置表 config=[{ path: ***, import: React.lazy(() => import(`***`)), menuLayout: false }]
 */

import React from 'react';


const noMenuLayout = ['login']
const defaultRoute = [
  {
    path: '/404',
    component: React.lazy(() => import(`@/pages/404`)),
    menuLayout: false,
  },
]
const files = require.context('../pages', true, /^(?:(?!components).)+\/index\.tsx$/) // 读取pages文件夹下面所有页面

const modules = defaultRoute

const getPath = (keys: string) => {
  const pathArr = keys.split('/').filter(i => i !== '.').filter(j => j !== 'index.tsx')
  return pathArr.join('/').replace(/-/g, '_')
}

files.keys().forEach((keys) => {
  if (keys === './index.tsx') {
    return
  }
  const path = getPath(keys)
  const filePath = `${keys.replace(/\./, '')}`
  modules.push({
    path: `/${path}`,
    component: React.lazy(() => import(`@/pages${filePath}`)),
    menuLayout: noMenuLayout.indexOf(path) < 0,
  })
})

export default modules
