import './bootstrap';
import '../css/app.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { LaravelReactI18nProvider } from 'laravel-react-i18n';
import DashboardLayout from './Layouts/DashboardLayout';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const page = resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        );

        page.then((module) => {
            if (name.startsWith('Dashboard')) module = <DashboardLayout children={page} />;
        });

        return page
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <LaravelReactI18nProvider
                fallbackLang={'en'}
                resolve={async (lang) => {
                    const langs = import.meta.glob('/lang/*.json');
                    const fn = langs[`/lang/${lang}.json`];
                    if (typeof fn === 'function') {
                        return await fn();
                    }
                }}>
                <App {...props} />
            </LaravelReactI18nProvider>
        );
    },
});

InertiaProgress.init({ color: '#224284' });
