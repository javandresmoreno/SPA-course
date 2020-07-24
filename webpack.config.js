// donde nos movemos en el proyecto
const path = require("path");
// plugin para trabajar con html
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // el archivo inicial del proyecto
  entry: "./src/index.js",
  // un objeto que tiene la ruta donde va a ir mi proyecto compilado.
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js", //aquí genero como se va a llamar el archivo
  },
  // las extensiones que va a utilizar el proyecto
  resolve: {
    extensions: [".js"],
  },
  // reglas necesarias para el proyecto
  module: {
    rules: [
      //estructura de babel, debemos generar un test
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  // plugins que voy a utilizar
  plugins: [
    new HtmlWebpackPlugin({
      // como voy a inyectar un valor a un elemento html
      inject: true,
      // donde se encuentra el template principal
      template: "./public/index.html",
      // donde lo vamos a guardar
      filename: "./index.html",
    }),
  ],
};
