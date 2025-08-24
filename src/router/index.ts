import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: 'about',
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
    },
    {
      path: '/blog/:month/:day/:year/:title',
      name: 'blogPost',
      component: () => import('../views/BlogPostView.vue'),
      props: true,
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/projects/:month/:day/:year/:title',
      name: 'projectPost',
      component: () => import('../views/ProjectPostView.vue'),
      props: true,
    },
    {
      path: '/useful-sites',
      name: 'usefulsites',
      component: () => import('../views/UsefulSitesView.vue'),
    },
  ],
})

export default router
