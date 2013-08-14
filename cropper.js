var imageCropper = new ImageCropper ();

function ImageCropper() {

  var cropper;

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
    $('#image').attr('src', src);
    $('#image').Jcrop({
      aspectRatio: 4/3
    }, function () {
      cropper = this;
    });
  };
};

loadImage = function (src, imageLoadedCallback) {
  imageCropper.reload(src);
  imageLoadedCallback();
};
