var imageCropper;

$(document).ready(function () {
  imageCropper = new ImageCropper();
});

function ImageCropper() {

  var cropper;
  this.imageLoadedCallback;

  this.imageLoaded = function () {
    this.imageLoadedCallback();
  };

  this.aspectRatioChanged = function (combobox) {
    $('#image').Jcrop({
      aspectRatio: combobox.options[combobox.selectedIndex].value
    });
  };

  this.crop = function () {
    var coords = cropper.tellSelect();
    $('#height').text('height: ' + coords.h + ', width: ' + coords.w);
  };

  this.reload = function (src) {
    cropper.setImage(src);
  };

  $('#image').Jcrop({ aspectRatio: 4 / 3 }, function () {
    cropper = this;
  });
};

loadImage = function (src, callback) {
  imageCropper.imageLoadedCallback = callback;
  imageCropper.reload(src);
};