import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'monthly',
        loadComponent: () => import('@org/ui').then((m) => m.UiComponent),
    },
];
