import path from 'path'
/**
 * 引入 path 模块，并简单封装成resolve方法，这里不要用 __dirname，否则路由暴露出去调用时 刷新页面会出错，因为刷新时__dirname是不存在的。
 * 这里要用 process.cwd()代替__dirname
 */
const resolve = (pagePath) => path.resolve(process.cwd(), `./${pagePath}`)

export const $routes = [
    {
        path: '/',
        name: 'Home',
        component: resolve('pages/index.vue')
    }
]

const extendRoutes = (routes) => {
    routes.length = 0 // 清除 nuxt 自己生成的路由，这里不要用 空数组 赋值
    routes.push(...$routes)
}

export default { base: '/', extendRoutes }