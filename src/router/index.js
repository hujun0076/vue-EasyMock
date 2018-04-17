import Vue from 'vue'
import Router from 'vue-router'

// project module
import Project from '@/components/project/project'
import Person from '@/components/project/person'
import Team from '@/components/project/team'
import Workbench from '@/components/workbench/workbench'
import Dataview from '@/components/dataview/dataview'
import Doc from '@/components/doc/doc'
import Login from '@/components/login/login'
import Users from '@/components/users/users-info'

Vue.use(Router);

let router = new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      component: Person,
    },
    {
      path: '/Project',
      component: Project,
      children: [
        {
          path: '/person',
          name: 'person',
          component: Person
        },
        {
          path: '/team',
          name: 'team',
          component: Team
        }
      ]
    },
    {
      path: '/workbench',
      name: 'workbench',
      component: Workbench
    },
    {
      path: '/dataview',
      name: 'dataview',
      component: Dataview
    },
    {
      path: '/docs',
      name: 'docs',
      component: Doc
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    }
  ]
});

export default router;
