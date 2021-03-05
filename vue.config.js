module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/dist/" : "/",
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
          urlPattern:
            "https://scontent.fgse1-1.fna.fbcdn.net/v/t1.0-9/97443248_10157158825686299_2161913183336398848_n.jpg?_nc_cat=111&ccb=3&_nc_sid=174925&_nc_ohc=Pquwg4LmTtwAX_M7XRV&_nc_ht=scontent.fgse1-1.fna&oh=bd5105767566a4c86a62792e05a9b011&oe=60671704"
        }
      ]
    },
    
  }
};
