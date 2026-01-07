import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import ProjectDetail from './views/ProjectDetail.vue'
import Posts from './views/Posts.vue'
import PostDetail from './views/PostDetail.vue'
import About from './views/About.vue'
import './assets/css/main.css'

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/projects/:id', component: ProjectDetail },
  { path: '/posts', component: Posts },
  { path: '/posts/:id', component: PostDetail },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
