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

  {
    path: '/verify',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'Verify', path: '', component: () => import('src/pages/VerifyPage.vue') }
    ]
  },

  {
    path: '/know',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'Know', path: '', component: () => import('src/pages/KnowPage.vue') }
    ]
  },

  {
    path: '/landing',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'Landing', path: '', component: () => import('src/pages/LandingPage.vue') }
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
