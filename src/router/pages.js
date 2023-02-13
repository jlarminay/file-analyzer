import Home from '@/views/Home.vue'
import History from '@/views/History.vue'
import Settings from '@/views/Settings.vue'
import Error from '@/views/Error.vue'

export default [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/history',
    name: 'History',
    component: History
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/error',
    name: 'Error',
    component: Error
  }
]
