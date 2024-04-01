export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path==='/demo6') {
    console.log('禁止访问这个页面')
    abortNavigation() //停止当前导肮，可以使用error进行报错
    return navigateTo('/')
  }
})