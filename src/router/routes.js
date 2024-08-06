const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'Index', path: '', component: () => import('pages/IndexPage.vue') }
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

  {
    path: '/book',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'BookSession', path: '', component: () => import('src/pages/BookSessionPage.vue') }
    ]
  },


  {
    path: '/session',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'Session', path: '', component: () => import('src/pages/SessionPage.vue') }
    ]
  },

  {
    path: '/chat',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'Chat', path: '', component: () => import('src/pages/ChatPage.vue') }
    ]
  },

  {
    path: '/account',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'Account', path: '', component: () => import('src/pages/AccountPage.vue') }
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
