let config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  },
  
};

// entry
config.entry = {
    main: [require('path').resolve(__dirname, "kotlin/NotasAgend-shared.js")]
};
config.output = {
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "notasAgend.js"
            : "notasAgend-[name].js";
    },
    library: "shared",
    libraryTarget: "umd",
    clean: true,
    globalObject: "globalThis"
};
// source maps
config.module.rules.push({
        test: /\.m?js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = false;
config.ignoreWarnings = [
    /Failed to parse source map/,
    /Accessing import\.meta directly is unsupported \(only property access or destructuring is supported\)/
];  
;(function(config) {
    const webpack = require("webpack"); 
    const EvalSourceMapDevToolPlugin = webpack.EvalSourceMapDevToolPlugin;
    config.plugins.push(new EvalSourceMapDevToolPlugin({
                            "module": true,
                "columns": true,
                "noSources": false,
                "ignoreList": /NATIVE_IMPLEMENTATIONS.kt/
    }))
})(config);

// dev server
config.devServer = {
  "open": true,
  "client": {
    "overlay": {
      "errors": true,
      "warnings": false
    }
  },
  "static": [
    {
      "directory": require('path').resolve(__dirname, "kotlin"),
      "watch": false
    },
    {
      "directory": require('path').resolve(__dirname, "../../../../shared/build/processedResources/js/main"),
      "watch": false
    },
    {
      "directory": require('path').resolve(__dirname, "../../../.."),
      "watch": false
    }
  ]
};

                config.watchOptions = {
  "ignored": [
    "**/node_modules",
    "**/*.kt"
  ]
};
// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-web-helpers/dist/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
// section: Extra JS code from KotlinWebpackConfig.extraJs
// section end
module.exports = config
