var crop;
$(document).ready(function () {
  function ImageCropper(src) {

    var cropper;

    jQuery(function ($) {
      $('#image').Jcrop({
        aspectRatio: 4 / 3
      }, function () {
        cropper = this;
      });
    });

    this.aspectRatioChanged = function (combobox) {
      $('#image').Jcrop({
        aspectRatio: combobox.options[combobox.selectedIndex].value
      });
    };

    this.crop = function () {
      var coords = cropper.tellSelect();
      $('#height').text('height: ' + coords.h + ', width: ' + coords.w);
    };

    $('#image').attr('src', src);

  }

  crop = new ImageCropper('image.jpg');
});

