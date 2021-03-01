module.exports = {
  pwa: {
    manifestOptions: {
      background_color: "#3988ff"
    },
    name: "This.Store",
    themeColor: "#3988ff",
    workboxOptions: {
      runtimeCaching: [
        {
          handler: "NetworkFirst",
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern: "http://localhost:3000/products"
        }
      ]
      /* exclude: [ /_redirects/ ] */
    }
  },
    publicPath: process.env.NODE_ENV === 'production'
      ? '/dist/'
      : '/'
  
};
