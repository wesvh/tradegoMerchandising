// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withAndroidStyles } = require("@expo/config-plugins");

const withSplashScreenStyle = (config) => {
  return withAndroidStyles(config, (config) => {
    const styles = config.modResults.resources.style ?? [];
    const filtered = styles?.filter((s) => s.$.name !== "Theme.App.SplashScreen");
    const originalSplashScreenStyle = styles.find((s) => s.$.name === "Theme.App.SplashScreen");
    const splashScreenStyle = originalSplashScreenStyle
      ? [
          {
            $: originalSplashScreenStyle.$,
            item: [
              ...originalSplashScreenStyle.item,
              {
                _: "true",
                $: {
                  name: "android:windowIsTranslucent"
                }
              },
              {
                _: "@null",
                $: {
                  name: "android:windowContentOverlay"
                }
              },
              {
                _: "true",
                $: {
                  name: "android:windowNoTitle"
                }
              },
              {
                _: "false",
                $: {
                  name: "android:backgroundDimEnabled"
                }
              },
              {
                _: "true",
                $: {
                  name: "android:windowIsFloating"
                }
              },
              {
                _: "true",
                $: {
                  name: "android:windowDisablePreview"
                }
              }
            ]
          }
        ]
      : [];
    config.modResults = {
      resources: {
        ...config.modResults.resources,
        style: [...filtered, ...splashScreenStyle]
      }
    };
    return config;
  });
};

module.exports = withSplashScreenStyle;
