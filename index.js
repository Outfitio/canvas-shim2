const { Canvas: skiaCanvas, Image } = require('skia-canvas');

const Canvas = {
  ...skiaCanvas,
  Image,
  createCanvas(width, height) {
    return new skiaCanvas(width, height);
  }
};

module.exports = Canvas;

Object.defineProperty(module.exports, "__esModule", {
  value: true
});

module.exports.Canvas = Canvas;
module.exports.default = Canvas;


