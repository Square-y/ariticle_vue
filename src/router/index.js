//配置路由信息
import VueRouter from 'vue-router'
import Vue from 'vue'
// import home from '../components/home'
import commend from '../components/article/commend'
// import article from '../components/article'
import queryResult from '../components/article/queryResult'
import hot from '../components/article/hot'
import user_info from '../components/user/user_info'
import cmd_user from '../components/cmd_user'
import tag from '../components/article/tag'
import publish from '../components/article/publish'




// 安装插件
Vue.use(VueRouter)
// 创建路由对象，和路由关系映射配置
const router = new VueRouter(
    {
        //配置路由和组件之间的关系
        routes:[
            {
                path: '/',
                redirect: 'commend',
            },
            {
                path: '/cmd_user',
                name: 'right',
                meta:{title:'right'},
                component: cmd_user
              },
            {
                path: '/commend',
                components:{
                    // default: Veaflet,
                    left:commend,
                    right:cmd_user,
                    tag:tag
                    // logo:containerTop,
                    // bottom:containerBottom
                  }
            },
            {
                path: '/queryResult',
                components: {
                    left:queryResult
                }
               
            },
            {
            
                path: '/hot',
                components: {
                    left: hot,
                    right:cmd_user,
                    tag:tag
                }
                
               
            },
            {
                path: '/user_info',
                components: {
                    left:user_info
                }
            },
            {
                path: '/publish',
                components: {
                    left:publish
                }
            }
        ],
        mode:'history',
        linkActiveClass:'active'
    }
)
//将router对象传入vue实例中
//将router对象到处
export default router