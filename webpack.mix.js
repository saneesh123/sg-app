const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/admin/js/app.js', 'public/admin/js')
    .postCss('resources/admin/css/app.css', 'public/admin/css', [
        //
    ]);

mix.js('resources/frontend/js/app.js', 'public/frontend/js')
    .postCss('resources/frontend/css/app.css', 'public/frontend/css', [
        //
    ]);
