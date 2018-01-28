module.exports = {
    entry: [
        "./assets/js/controllers/homeController.js",
        "./assets/js/controllers/intruderController.js",
        "./assets/js/controllers/notificationsController.js",
        "./assets/js/controllers/trainingController.js"
    ],
    output: {
      filename: "build/bundle.js"
    }
  }