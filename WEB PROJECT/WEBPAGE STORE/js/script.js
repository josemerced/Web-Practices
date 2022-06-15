//----- BEGIN OF collapsable toggle bar ----//
// Dollar sign is from Jquery
$(function () { // Same as document.addEventListener("DOMContentLoaded"...
  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});
//----- END OF collapsable toggle bar ----//

// --------FOOTER & COMMENT BOX--------//
var field= document.querySelector('textarea');
var backup = field.getAttribute('placeholder');
var botones = document.querySelector('.Botones');

field.onfocus = function(){
    this.setAttribute('placeholder', '');
    this.style.borderColor = '#333';
    botones.style.display = 'block'
}
field.onblur = function(){
    this.setAttribute('placeholder',backup);
    this.style.borderColor = '#aaa'
}

// --PARA BOTON CANCEL-- //
$('#clear').click(function(e) {
    // Special stuff to do when this link is clicked...
    // Cancel the default action
    e.preventDefault();
    botones.style.display = 'none';
    field.value = '';
});

