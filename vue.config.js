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
          urlPattern: "https://ourstoreapi.netlify.app/products.json"
        },
        {
          handler: "NetworkFirst",
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern:
            "https://media-exp1.licdn.com/dms/image/C4E03AQFDjNUPdMmmDg/profile-displayphoto-shrink_800_800/0/1614268833081?e=1620259200&v=beta&t=haI37MHYEnGSX4H97W_QBO8Hi1-_-iU_l8JBLmubKIc"
        },
        {
          handler: "NetworkFirst",
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern: "http://placekitten.com/250/250"
        }
      ]
    },
    publicPath: process.env.NODE_ENV === "production" ? "/dist/" : "/"
  }
};
