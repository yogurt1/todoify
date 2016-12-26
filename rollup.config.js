import {rollup} from "rollup"
import commonjs from "rollup-plugin-commonjs"
import npm from "rollup-plugin-node-resolve"
import globals from "rollup-plugin-node-globals"
import buble from "rollup-plugin-buble"
import vue from "rollup-plugin-vue2"
import postcss from "rollup-plugin-postcss"
import async from "rollup-plugin-async"
import uglify from "rollup-plugin-uglify"
import livereload from "rollup-plugin-livereload"
import replace from "rollup-plugin-replace"
import filesize from "rollup-plugin-filesize"
import json from "rollup-plugin-json"

const isProduction = process.env.NODE_ENV === "production"
const postcssPlugins = []
const plugins = [
    vue({compileTemplate:true}),
    postcss({
        plugins: postcssPlugins
    }),
    async(),
    json(),
    buble({
        objectAssign: "Object.assign",
        transforms: {
            modules: false,
            dangerousForOf: true
        }
    }),
    npm({
        jsnext: true,
        main: true,
        browser: true
    }),
    commonjs(),
    replace({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
]

if (isProduction) {
    plugins.push(
        uglify(),
        filesize()
    )
} else {
    plugins.push(
        livereload()
    )
}

export default {
    entry: "./app/entry.js",
    dest: "./public/bundle.js",
    format: "iife",
    sourceMap: false,
    useStrict: false,
    plugins    
}
