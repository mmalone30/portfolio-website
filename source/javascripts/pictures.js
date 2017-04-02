// var pictures = document.querySelectorAll('figure');
//
// pictures.forEach(function( pic ){
//   pic.addEventListener('click', function( e ){
//      this.classList.toggle('lightbox');
//   });
// });

$(document).ready(function(){
  $("figure").on("click", function(){
    $(this).toggleClass("lightbox");
  });
});
