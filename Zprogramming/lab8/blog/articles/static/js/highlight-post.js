$(document).ready(function(){
 $('.one-post').hover(function(event){
 $(event.currentTarget).animate({fontSize:'18pt'}, 300);
 $(event.currentTarget).find('.one-post-shadow').animate({opacity:'0.5'}, 300);},
  function(event){
   $(event.currentTarget).animate({fontSize:'14pt'}, 300);
 $(event.currentTarget).find('.one-post-shadow').animate({opacity: '0'},300);})
 $('#logo').hover(function(event){
  $(event.currentTarget).animate({height:'150'}, 300);},
   function(event){
  $(event.currentTarget).animate({height: '100'},300);})

});