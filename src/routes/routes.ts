import { lazy, LazyExoticComponent } from "react";
import { getDataTemplate1 } from '../services/getDataTemplate1';


interface ApiResponseModel { id: number, attributes: any }


type JSXComponent = () => JSX.Element;

export interface Route {
    to: any;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const lazyLogin = lazy(() => import(/*webpackChunkName: "Login"*/"../authModule/pages/Login"));
const lazyPassword = lazy(() => import(/*webpackChunkName: "Password"*/"../authModule/pages/Password"));
const lazyTemplate1 = lazy(() => import(/*webpackChunkName: "Template1"*/"../pages/TemplateScreen1"));
const lazyTemplate2 = lazy(() => import(/*webpackChunkName: "Template1"*/"../pages/TemplateScreen2"));
const lazyTemplate3 = lazy(() => import(/*webpackChunkName: "Template1"*/"../pages/TemplateScreen3"));
const lazyLandingItems = lazy(() => import(/*webpackChunkName: "Template1"*/"../pages/ListLandings"));


export let routes: Route[] = [
    // { to: '/login', path: 'login', Component: lazyLogin, name: 'Login' },
    // { to: '/password', path: 'password', Component: lazyPassword, name: 'password' },
    { to: '/template', path: 'info/:id', Component: lazyTemplate1, name: 'template' },        // page 2
    { to: '/template2', path: 'product/:id', Component: lazyTemplate2, name: 'template2' },   // page 1
    { to: '/template3', path: 'lead/:id', Component: lazyTemplate3, name: 'template3' },      // page 3
    { to: '/landings', path: 'landings', Component: lazyLandingItems, name: 'landings' },
];

getDataTemplate1().then(data => {
    const mapRoutes: string[] = data
        .map(({ id, attributes }: ApiResponseModel, index: number) => attributes.ruta);
    // routes[5] = createRoutes(mapRoutes)[0];
    // console.log(routes);
});

const createRoutes = (routes: string[]): any => {
    const tempRoutes = routes.map((route: string, index: number) => (
        {
            to: `/${route}`,
            path: `${route}`,
            Component: lazyTemplate1,
            name: `${route}`
        }
    ));

    return tempRoutes;
}