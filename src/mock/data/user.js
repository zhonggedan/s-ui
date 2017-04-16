import Mock from 'mockjs';


import Login from '@/views/Login.vue'
import NotFound from '@/views/404.vue'
import Home from '@/views/Home.vue'
import Main from '@/views/Main.vue'
import Table from '@/views/nav1/Table.vue'
import Form from '@/views/nav1/Form.vue'
import user from '@/views/nav1/user.vue'
import Page4 from '@/views/nav2/Page4.vue'
import Page5 from '@/views/nav2/Page5.vue'
import Page6 from '@/views/nav3/Page6.vue'
import echarts from '@/views/charts/echarts.vue'

const LoginUsers = [{
  id: 1,
  username: 'admin',
  password: '123456',
  avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
  name: '张某某'
}];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}



const Menu = [
  //{ path: '/main', component: Main },
  {
    path: '/',
    component: Home,
    name: '导航一',
    iconCls: 'el-icon-message', //图标样式class
    children: [{
      path: '/main',
      component: Main,
      name: '主页',
      hidden: true
    }, {
      path: '/table',
      component: Table,
      name: 'Table'
    }, {
      path: '/form',
      component: Form,
      name: 'Form'
    }, {
      path: '/user',
      component: user,
      name: '列表'
    }, ]
  }, {
    path: '/',
    component: Home,
    name: '导航二',
    iconCls: 'fa fa-id-card-o',
    children: [{
      path: '/page4',
      component: Page4,
      name: '页面4'
    }, {
      path: '/page5',
      component: Page5,
      name: '页面5'
    }]
  }, {
    path: '/',
    component: Home,
    name: '',
    iconCls: 'fa fa-address-card',
    leaf: true, //只有一个节点
    children: [{
      path: '/page6',
      component: Page6,
      name: '导航三'
    }]
  }, {
    path: '/',
    component: Home,
    name: 'Charts',
    iconCls: 'fa fa-bar-chart',
    children: [{
      path: '/echarts',
      component: echarts,
      name: 'echarts'
    }]
  }
];

export {
  LoginUsers,
  Users,
  Menu
};