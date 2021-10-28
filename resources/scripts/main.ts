import {Vue} from 'vue-property-decorator'
import {createInertiaApp} from '@inertiajs/inertia-vue'
// @ts-ignore
import {Ziggy} from "@/js/ziggy.js";
// @ts-ignore
import {ZiggyVue} from "ziggy-js/dist/vue";

Vue.config.productionTip = true;

Vue.use(ZiggyVue, Ziggy);

const pages: any = import.meta.glob(`../views/pages/**/*.vue`);

const inertiaApp = createInertiaApp({
    resolve: (name: string) => {
        const importPage = pages[`../views/pages/${name}.vue`];

        if (!importPage) {
            throw new Error(`Unknown page ${name}. Is it located under Pages with a .vue extension?`);
        }

        return importPage().then((module: any) => module.default)
    },
    setup({el, App, props}: any) {
        new Vue({
            render: h => h(App, props),
        }).$mount(el)
    },
})
