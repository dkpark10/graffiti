const { defineConfig } = require("@vue/cli-service");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const nodeExternals = require("webpack-node-externals");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = defineConfig({
  transpileDependencies: true,
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/variables.scss";
          @import "@/styles/mixins.scss";
        `,
      },
    },
  },
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()],
  },
  chainWebpack: (webpackConfig) => {
    console.log(`렌더링 모드 ${process.env.SSR ? "섭사" : "클사"}`);
    webpackConfig.module.rule("vue").uses.delete("cache-loader");
    webpackConfig.module.rule("js").uses.delete("cache-loader");
    webpackConfig.module.rule("ts").uses.delete("cache-loader");
    webpackConfig.module.rule("tsx").uses.delete("cache-loader");

    if (!process.env.SSR) {
      // webpackConfig.devServer.disableHostCheck(true);
      webpackConfig.entry("app").clear().add("./src/main.client.js");
      return;
    }

    webpackConfig.entry("app").clear().add("./src/main.server.js");

    webpackConfig.target("node");
    webpackConfig.output.libraryTarget("commonjs2");

    // webpackConfig.module
    //   .rule("vue")
    //   .use("vue-loader")
    //   .tap((options) => {
    //     options.compilerOptions = {
    //       ...options.compilerOptions,
    //       isCustomElement: (tag) => tag.startsWith("router"),
    //     };
    //     return options;
    //   });

    webpackConfig
      .plugin("manifest")
      .use(new WebpackManifestPlugin({ fileName: "ssr-manifest.json" }));

    webpackConfig.externals(nodeExternals({ allowlist: /\.(css|vue)$/ }));

    webpackConfig.optimization.splitChunks(false).minimize(false);

    webpackConfig.plugins.delete("hmr");
    webpackConfig.plugins.delete("preload");
    webpackConfig.plugins.delete("prefetch");
    webpackConfig.plugins.delete("progress");
    webpackConfig.plugins.delete("friendly-errors");
  },
});
