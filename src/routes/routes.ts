import { lazy, LazyExoticComponent } from "react";

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
const lazyTemplate3= lazy(() => import(/*webpackChunkName: "Template1"*/"../pages/TemplateScreen3"));


export const routes: Route[] = [
    // { to: '/login', path: 'login', Component: lazyLogin, name: 'Login' },
    // { to: '/password', path: 'password', Component: lazyPassword, name: 'password' },
    { to: '/template', path: 'template', Component: lazyTemplate1, name: 'template' },
    { to: '/template2', path: 'template2', Component: lazyTemplate2, name: 'template2' },
    { to: '/template3', path: 'template3', Component: lazyTemplate3, name: 'template3' },
];