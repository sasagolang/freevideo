
 
export default [
  {
    path: '/landing',
    name: 'landing-page',
    hidden:true,
    component: require('components/LandingPageView')
  },
   {
    path: '/hello',
   name: 'hello-page',
   hidden:true,
    component: require('components/HelloView')
  },
    {
    path: '/home',
   name: 'home',
   hidden:true,
    component: require('components/Home')
  },
  //   {
  //   path: '/video/:vid',
  //  name: 'video',
  //  hidden:true,
  //   component: require('components/Video')
  // },
   {
        path: '/',
        component: require('components/Home'),
        name: '目录',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '2',component: require('components/Video'), name: '主页', hidden: true },
            { path: '3', component: require('components/Video'),  name: 'Table' },
            { path: '4', component: require('components/Video'),  name: 'Form' },
            { path: '5', component: require('components/Video'),  name: '列表' },
        ]
    },
  
  {
    path: '*',
    hidden:true,
    redirect: '/'
  }
]
