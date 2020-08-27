module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@src": "./src",
          "@config": "./src/config",
          "@models": "./src/models",
          "@v1": "./src/modules/v1"
        },
      },
    ],
  ],
};
