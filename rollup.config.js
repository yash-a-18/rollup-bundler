import css from 'rollup-plugin-css-only';

export default {
    // input: "src/main.js",
    input: "src/usePlugins",
    output: [
        {
            file: "build/bundle.js",
            format: "cjs",
            inlineDynamicImports: true
        },
        {
            file: "dist/bundle.js",
            format: "es",
            inlineDynamicImports: true
        }
    ],
    plugins: [
        css({output: 'bundle.css'})
    ]
}