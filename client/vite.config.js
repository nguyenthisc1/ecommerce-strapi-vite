import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config(); // load env vars from .env

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        hmr: false,
    },
    plugins: [react()],

    define: {
        HOST_API: `"${process.env.HOST_API}"`,
        HOST: `"${process.env.HOST}"`,
        API_TOKEN: `"${process.env.API_TOKEN}"`,
    },
});
