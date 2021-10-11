# Daily UI

Hi! These are my [Daily UI](https://www.dailyui.co/) challenges. These examples are implemented using [Vite](https://vitejs.dev/) and [Tailwind CSS](https://tailwindcss.com/). You can see it live at [https://pedro-m-g.github.io/daily-ui/](https://pedro-m-g.github.io/daily-ui/).

## File structure

* `index.html` Entry point for the site.
* `main.js` Entry point for JS. Styles are imported here too.
* `postcss.config.js` File to configure PostCSS plugins, including Tailwind CSS.
* `style.css` Main stylesheet. You can use PostCSS in this file.
* `tailwind.config.js` Tailwind configuration file.
* `challenges/` In this file I save each challenge on its own HTML file, named by challenge number.

## Scripts

`npm install` to install dependencies.
`npm run dev` to preview the site as you edit it.
`npm run build` to build assets for production.
`npm run serve` to serve production assets locally.