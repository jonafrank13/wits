const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },

  {
    path: '/choose-signup',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'ChooseSignup', path: '', component: () => import('src/pages/ChooseSignupPage.vue') }
    ]
  },

  {
    path: '/signup',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'Signup', path: '', component: () => import('src/pages/SignupPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
