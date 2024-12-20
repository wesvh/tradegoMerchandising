module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            src: "./src/",
            components: "./src/Presentation/components",
            screens: "./src/Presentation/screens",
            utils: "./src/Presentation/utils",
            hooks: "./src/Presentation/hooks",
            assets: "./src/Presentation/assets",
            schema: "./src/Presentation/db/schema",
            context: "./src/Presentation/Context",
            navigation: "./src/Presentation/navigation",
            theme: "./src/Presentation/theme",
            hellpers: "./src/Presentation/hellpers",
            realmTransaction: "./src/Presentation/hellpers/",
            constants: "./src/Presentation/constants",
            constant: "./src/Presentation/constants",
            saveItem: "./src/Domain/useCase/userLocal/saveItem/SaveItem",
            getItem: "./src/Domain/useCase/userLocal/getItem",
            businessDB: "./src/Presentation/db",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
