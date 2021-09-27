const { defineConfig } = require("vite");
const fs = require('fs');
const { resolve } = require('path');

const challenges = fs.readdirSync('./challenges')
    .reduce((obj, current) => ({
        ...obj,
        [`challenge_${current.substring(0,3)}`]: resolve(__dirname, `challenges/${current}`)
    }), { });

module.exports = defineConfig({
    base: '/daily-ui/',
    build:{
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                ...challenges
            }
        }
    }
});