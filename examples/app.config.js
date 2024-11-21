module.exports = () => {
  return {
        name: "react-native-popup-menu-examples",
        slug: "RNPopupMenuExamples",
        privacy: "public",
        platforms: ["ios", "android"],
        version: "1.0.0",
        owner: "instea.co",
        orientation: "portrait",
        icon: "./assets/icon.png",
        splash: {
          image: "./assets/splash.png",
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
        updates: {
          fallbackToCacheTimeout: 0,
        },
        assetBundlePatterns: ["**/*"],
        ios: {
          supportsTablet: true,
        },
        android: {
          package: "sk.instea.rnpopupmenuexamples",
          versionCode: 1,
          adaptiveIcon: {
            foregroundImage: "./assets/splash.png",
            backgroundColor: "#FFFFFF",
          },
          enableProguardInReleaseBuilds: true,
        },
         extra: {
              eas: {
                projectId: "bb486290-87aa-4799-84e2-fe1d0e93c74d",
              },
         },
  };
};