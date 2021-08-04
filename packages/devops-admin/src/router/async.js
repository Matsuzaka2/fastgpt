import Layout from '@/layout'

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/development',
    component: Layout,
    redirect: '/development/functions',
    meta: {
      title: '开发控制台', icon: 'guide', noCache: true
    },
    children: [
      {
        path: 'functions',
        component: () => import('@/views/development/functions'),
        name: 'FunctionManagement',
        meta: {
          title: '云函数',
          icon: 'bug',
          noCache: true,
          permissions: ['function.read']
        }
      },
      {
        path: 'functions/:id',
        component: () => import('@/views/development/function'),
        name: 'FunctionEdit',
        hidden: true,
        meta: {
          title: '调试云函数',
          icon: 'bug',
          noCache: true,
          permissions: ['function.read']
        }
      },
      {
        path: 'function-logs',
        component: () => import('@/views/development/function_logs'),
        name: 'AllFunctionLogs',
        meta: {
          title: '云函数日志',
          icon: 'documentation',
          noCache: true,
          permissions: ['function.read', 'function.edit', 'function.create', 'function.debug']
        }
      },
      {
        path: 'function-logs/:id',
        component: () => import('@/views/development/function_logs'),
        name: 'FunctionLogs',
        hidden: true,
        meta: {
          title: '云函数日志',
          icon: 'lock',
          noCache: true,
          permissions: ['function_logs.read', 'function.read', 'function.edit', 'function.create', 'function.debug']
        }
      },
      {
        path: 'triggers/:funcId',
        component: () => import('@/views/development/triggers'),
        name: 'TriggerManagement',
        hidden: true,
        meta: {
          title: '云函数触发器',
          icon: 'lock',
          noCache: true,
          permissions: ['trigger.read', 'trigger.edit', 'trigger.create', 'trigger.delete']
        }
      }
    ]
  },
  {
    path: '/database',
    component: Layout,
    redirect: '/database/collections',
    meta: {
      title: '数据管理', icon: 'excel', noCache: true
    },
    children: [
      {
        path: 'policies',
        component: () => import('@/views/database/policies'),
        name: 'RuleManagement',
        meta: {
          title: '访问策略',
          icon: 'eye',
          noCache: true,
          permissions: ['policy.read']
        }
      },
      {
        path: 'policy',
        component: () => import('@/views/database/policy'),
        name: 'RuleManagement',
        hidden: true,
        meta: {
          title: '访问规则编辑',
          icon: 'edit',
          noCache: true
        }
      },
      {
        path: 'collections',
        component: () => import('@/views/database/collections'),
        name: 'CollectionManagement',
        meta: {
          title: '集合管理',
          icon: 'example',
          noCache: true,
          permissions: ['database.manage', 'collections.get', 'collections.createIndex', 'collections.deleteIndex']
        }
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/role',
    meta: {
      title: '成员管理', icon: 'peoples', noCache: true
    },
    children: [
      {
        path: 'admin',
        component: () => import('@/views/system/admin'),
        name: 'AdminManagement',
        meta: {
          title: '开发者',
          icon: 'people',
          noCache: true,
          permissions: ['admin.read']
        }
      },
      {
        path: 'role',
        component: () => import('@/views/system/role'),
        name: 'RoleManagement',
        meta: {
          title: '角色',
          icon: 'user',
          noCache: true,
          permissions: ['role.edit', 'role.create']
        }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]