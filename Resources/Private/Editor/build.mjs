import esbuild from "esbuild";
import extensibilityMap from "@neos-project/neos-ui-extensibility/extensibilityMap.json" assert { type: "json" };
import { cssModules } from "esbuild-plugin-lightningcss-modules";

const options = {
    logLevel: "info",
    bundle: true,
    minify: process.argv.includes("--production"),
    sourcemap: true,
    target: "es2020",
    format: "iife",
    legalComments: "none",
    entryPoints: { Plugin: "src/index.js" },
    loader: {
        ".js": "tsx",
    },
    outdir: "../../Public",
    alias: extensibilityMap,
    plugins: [
        cssModules({
            targets: {
                chrome: 80, // aligns somewhat to es2020
            },
            cssModulesPattern: "carbon-tailwind-[hash]-[local]",
        }),
    ],
};

async function watch() {
    const context = await esbuild.context(options);
    await context.watch();
}

if (process.argv.includes("--watch")) {
    watch();
} else {
    esbuild.build(options);
}
