import { Canvas, Image } from 'skia-canvas'

export { Image } from 'skia-canvas'

export default {
  ...Canvas,
  Image,
  createCanvas(width, height) {
    return new Canvas(width, height);
  }
}

