import Vue from 'vue';
import VueRouter from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: ()=> import('../components/Home.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: ()=> import('../components/Register.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: ()=> import('../components/Login.vue')
    },
    {
        path: '/admin',
        name: 'admin',
        redirect: {name: 'Dashboard'},
        component: ()=> import('../components/admin/MainDashboardLayout.vue'),
        children: [
            {
                path: '/',
                name: 'dashboard',
                component: ()=> import('../views/admin/Dashboard.vue')
            },
            {
                path: 'blog',
                name: 'blog',
                component: ()=> import('../views/admin/blog/Index.vue'),
                children: [
                    {
                        path: '/',
                        name: 'BlogIndex',
                        component: ()=>import('../views/admin/blog/pages/Index.vue')
                    },
                    {
                        path: 'add',
                        name: 'BlogAdd',
                        component: ()=> import('../views/admin/blog/pages/AddEdit.vue')
                    },
                    {
                        path: 'show/:id',
                        name: 'BlogShow',
                        component:()=> import('../views/admin/blog/pages/Show.vue')
                    },
                    {
                        path: ':id',
                        name: 'BlogEdit',
                        component: ()=> import('../views/admin/blog/pages/AddEdit.vue')
                    }
                ]
            },
            {
                path: 'product',
                name: 'product',
                component: ()=> import('../views/admin/products/Index.vue'),
                children: [
                    {
                        path: '/',
                        name: 'products',
                        component: ()=> import('../views/admin/products/pages/Products.vue')
                    },
                    {
                        path: 'add',
                        name: 'ProductAdd',
                        component: ()=> import('../views/admin/products/pages/ProductAddEdit.vue')
                    },
                    {
                        path: ':id',
                        name: 'ProductEdit',
                        component: ()=> import('../views/admin/products/pages/ProductAddEdit.vue')
                    }
                ]
            },
            {
                path: 'customer',
                component: ()=> import('../views/admin/customers/Index.vue'),
                children: [
                    {
                        path: '/',
                        name: 'customers',
                        component: ()=> import('../views/admin/customers/pages/Customers.vue')
                    },
                    {
                        path: 'add',
                        name: 'CustomersAdd',
                        component: ()=> import('../views/admin/customers/pages/CustomersAddEdit.vue')
                    },
                    {
                        path: ':id',
                        name: 'CustomersEdit',
                        component: ()=> import('../views/admin/customers/pages/CustomersAddEdit.vue')
                    }
                ]
            }
        ]
    }
];

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next)=>{
    let auth = (localStorage.getItem('user') == null ? false:true)

    if(to.name !== 'login' && auth == false) next({name: 'login' || 'register'})
    else if(to.name == 'login' && auth == true) next({name: 'admin'})
    else next()
})

export default router;