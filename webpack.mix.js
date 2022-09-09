let mix = require('laravel-mix');

require('@tinypixelco/laravel-mix-wp-blocks');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Sage application. By default, we are compiling the Sass file
 | for your application, as well as bundling up your JS files.
 |
 */

/**
 * Child theme scripts
 */
mix
    .sass('resources/styles/app-child.scss', 'styles')
    .sass('resources/styles/backend-block-editor-child.scss', 'styles')

mix.setPublicPath('./public');
mix.setResourceRoot('./../')

mix
    .js('resources/scripts/app-child.js', 'scripts')

mix
    .copyDirectory('resources/images', 'web/app/themes/growtype-child/public/images')
    .copyDirectory('resources/video', 'web/app/themes/growtype-child/public/video')
    .copyDirectory('resources/icons', 'web/app/themes/growtype-child/public/icons')
    .copyDirectory('resources/fonts', 'web/app/themes/growtype-child/public/fonts');

mix
    .sourceMaps()
    .version();
