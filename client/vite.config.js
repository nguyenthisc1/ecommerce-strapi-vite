import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv'

dotenv.config() // load env vars from .env

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        HOST_API: `"${process.env.HOST_API}"` // wrapping in "" since it's a string
      },
});

