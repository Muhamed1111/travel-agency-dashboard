import { type RouteConfig, layout, route, redirect } from "@react-router/dev/routes";

export default [
    // Root path redirects to /sign-in

    route('sign-in', 'routes/root/sign-in.tsx'),

    layout('routes/admin/admin-layout.tsx', [
        route('dashboard', 'routes/admin/dashboard.tsx'),
        route('all-users', 'routes/admin/all-users.tsx'),
    ])
] satisfies RouteConfig;
