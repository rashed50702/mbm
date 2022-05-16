import UserIndex from './components/users/index.vue';
import RoleIndex from './components/roles/index.vue';
import ItemIndex from './components/items/index.vue';
import ItemCreate from './components/items/create.vue';
import ItemEdit from './components/items/edit.vue';

export const routes = [
    {
        path: '/users',
        component: UserIndex,
        name: "UserIndex"
    },
    {
        path: '/roles',
        component: RoleIndex,
        name: "RoleIndex"
    },
    {
        path: '/items',
        component: ItemIndex,
        name: "ItemIndex"
    },
    {
        path: '/items/create',
        component: ItemCreate,
        name: "ItemCreate"
    },
    {
        path: '/items/edit/:itemId',
        component: ItemEdit,
        name: "ItemEdit"
    }
];