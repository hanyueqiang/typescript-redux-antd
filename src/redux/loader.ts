/**
 * 加载所有的reducer
 * 默认命名为该文件夹名字，中横线转驼峰命名
 * 注意：各模块文件夹不能重名
 */
 const files = require.context('../pages', true, /redux\.ts$/)
interface ModuleProps {
  [key: string]: any
}
 const modules: ModuleProps = {}
 // 中横线转驼峰
 const toHump = (name: string) => name.replace(/-(\w)/g, (all, letter) => letter.toUpperCase())

 files.keys().forEach((key) => {
   const nameArr = key.split('/')
   const moduleName = toHump(nameArr[nameArr.length - 2])
   if (files(key).default) {
    modules[moduleName] = files(key).default
   }
 })

 export default modules
