import {defineConfig} from "laravel-vite";
import {createVuePlugin as vue} from 'vite-plugin-vue2'
// @ts-ignore
const path = require('path');

export default defineConfig(
    {
        resolve: {
            alias: {
                ziggy: path.resolve('vendor/tightenco/ziggy/dist'),
            },
        },

        optimizeDeps: {
            include: ["ziggy"],
        },
    }
)
    .withPlugin(vue());
