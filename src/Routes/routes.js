import Blog from '../Pages/Blog';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';
import Pricing from '../Pages/Pricing';
import Service from '../Pages/Service';

const routes = [
    {
        path: '/',
        component: Home,
        isPrivate: false,
    },
    {
        path: '/service',
        component: Service,
        isPrivate: false,
    },
    {
        path: '/blog',
        component: Blog,
        isPrivate: false,
    },
    {
        path: '/pricing',
        component: Pricing,
        isPrivate: false,
    },

    {
        path: '*',
        component: NotFound,
        isPrivate: false,
    },
];

export default routes;
