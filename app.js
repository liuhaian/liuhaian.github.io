const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  { path: '/Menu/Page1', component: Colors }
  // { path: '/Menu/Page2', component: Bar }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

var vm =new Vue({
  el: '#app',
  router,
  data: function() {
    return { 
      path: '',
      nav_menu_data: [{
        title: '配色方案',
        path: '/Menu/Page1'
      }, {
        title: '导航二',
        path: '/Menu/Page2'
      }, {
        title: '导航三',
        path: '/Menu/Page3'
      }, {
        title: '导航四',
        path: '/Menu/Page4'
      }]
  }
 }
})