module.exports = function(options) {
  var that = {},
      frameIndex = 0,
      tickCount = 0,
      ticksPerFrame = options.ticksPerFrame || 0,
      numberOfFrames = options.numberOfFrames || 4;

  that.context = options.context;
  that.width = options.width;
  that.height = options.height;
  that.image = options.image;
  that.loop = options.loop;
  that.dx = options.dx;
  that.dy = options.dy;
  that.render = function () {
    // Clear the canvas
    that.context.clearRect(that.dx, that.dy, that.width, that.height);

    // Draw the animation
    that.context.drawImage(that.image, frameIndex * that.width / numberOfFrames, 0, that.width / numberOfFrames, that.height, that.dx, that.dy, that.width / numberOfFrames, that.height);
  };

  that.update = function () {
    tickCount += 1;

    if (tickCount > ticksPerFrame) {
      tickCount = 0;

      // If the current frame index is in range
      if (frameIndex < numberOfFrames - 1) {
        // Go to the next frame
        frameIndex += 1;
      }
      else if (that.loop) {
        frameIndex = 0;
      }
    }
  };

  return that;
};
