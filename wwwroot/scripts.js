
$(function(){
  $('head').append(
    '<style type="text/css">#wp { display: none; } #ldr { display: block; }</style>'
  );
 
  $(window).on('load',function() {
      $("#ldr").delay(1200).fadeOut(600);
      $("#wp").css("display", "block");
  });
});
