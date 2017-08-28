//路由入口文件
import Vue from 'vue'
import Router from 'vue-router'
import router from './routers'

Vue.use(Router)

const router = new Router({
	hashbang: false,
	history: true,//开启html5history模式
	linkActiveClass: 'active'//v-link激活时添加的class，默认是`v-link-active`
})
router.map(routes)
router.beforeEach(({to,next})=>{
	console.log('------->' + to.name)//每次调整路由时打印，便于调试
	next()
})
export default router
