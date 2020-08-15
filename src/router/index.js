import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import NavgationMean from '@/components/NavgationMean'
import Home2 from '@/components/Home2'
import Home from '@/components/Home'
import UserList from '@/components/user/UserList.vue'
import PermissionCreatePermission from '@/components/permission/PermissionCreatePermission.vue'
import PermissionCreateRole from '@/components/permission/PermissionCreateRole.vue'
import PermissionCreateUser from '@/components/permission/PermissionCreateUser.vue'
import TagMyCreateList from '@/components/tag/TagMyCreateList.vue'
import ThingMyCreateList from '@/components/thing/ThingMyCreateList.vue'
import ThingMyReceiveList from '@/components/thing/ThingMyReceiveList.vue'
import ThingCreate from '@/components/thing/ThingCreate.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // HelloWorld
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      // HelloWorld
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      // element按钮页面
      path: '/navgation',
      name: 'navgation',
      component: NavgationMean
    },

    {
      // Home2
      path: '/home2',
      name: 'home2',
      component: Home2,
      redirect: '/navgation', //children优先于redirect
      children:[
        // {
        //   // HelloWorld
        //   path: '/',
        //   name: 'HelloWorld',
        //   component: HelloWorld
        // },
        {
          // 创建事务
          path: '/thing/create',
          name: 'thingCreate',
          component: ThingCreate
        },
        {
          // 自己创建的事务列表
          path: '/thing/myCreateList',
          name: 'thingMyCreateList',
          component: ThingMyCreateList
        },
        {
          // 接收到的事务列表
          path: '/thing/myReceiveList',
          name: 'thingMyReceiveList',
          component: ThingMyReceiveList
        },
        {
          // 创建角色
          path: '/permission/createRole',
          name: 'permissionCreateRole',
          component: PermissionCreateRole
        },
        {
          // 创建用户
          path: '/permission/createUser1',
          name: 'permissionCreateUser',
          component: PermissionCreateUser
        },
        {
          // 创建权限
          path: '/permission/createPermission',
          name: 'permissionCreatePermission',
          component: PermissionCreatePermission
        },
        {
          // 我的标签
          path: '/tag/myCreateList',
          name: 'tagMyCreateList',
          component: TagMyCreateList
        },
      ],
    },

    {
      // Home
      path: '/home',
      name: 'home',
      component: Home,
      redirect: '/',
      children:[
        {
          // HelloWorld   对应路径http://localhost:8080/#/home
          path: '/',
          name: 'helloWorld',
          component: HelloWorld
        },
        {
          // HelloWorld   对应路径http://localhost:8080/#/helloWorld1
          path: '/helloWorld1',
          name: 'helloWorld',
          component: HelloWorld
        },
        {
          // HelloWorld   无对应路径，被一级route占用，因为一级路径优先
          path: '/helloWorld',
          name: 'helloWorld',
          component: HelloWorld
        },
        {
          // HelloWorld   对应路径http://localhost:8080/#/home/helloWorld
          path: 'helloWorld',
          name: 'helloWorld',
          component: ThingCreate
        },
        {
          // 创建事务
          path: '/thing/create',
          name: 'thingCreate',
          component: ThingCreate
        },
        {
          // 自己创建的事务列表
          path: '/thing/myCreateList',
          name: 'thingMyCreateList',
          component: ThingMyCreateList
        },
        {
          // 接收到的事务列表
          path: '/thing/myReceiveList',
          name: 'thingMyReceiveList',
          component: ThingMyReceiveList
        },
        {
          // 创建角色
          path: '/permission/createRole',
          name: 'permissionCreateRole',
          component: PermissionCreateRole
        },
        {
          // 创建用户
          path: '/permission/createUser',
          name: 'permissionCreateUser',
          component: PermissionCreateUser
        },
        {
          // 创建权限
          path: '/permission/createPermission',
          name: 'permissionCreatePermission',
          component: PermissionCreatePermission
        },
        {
          // 我的标签
          path: '/tag/myCreateList',
          name: 'tagMyCreateList',
          component: TagMyCreateList
        },
      ],
    }
  ]
})
