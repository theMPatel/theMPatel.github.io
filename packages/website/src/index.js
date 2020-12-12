Promise.resolve().then(function () { return require("./bootstrap"); })["catch"](function (e) { return console.error("Error importing `index.js`: ", e); });
