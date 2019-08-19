// $(document).ready(function(){
// 
//   $(function scroll() {
//     $.scrollify({
//       section : ".section",
//       sectionName : "section-name",
//     });
//   })
//   $.scrollify({
//     section : ".panel",
//     // easing: "easeOutExpo",
//     // scrollSpeed: 1100,
//     // offset : 0,
//     // scrollbars: true,
//     // standardScrollElements: false,
//     // setHeights: true,
//     // overflowScroll: true,
//     // updateHash: true,
//     // touchScroll:true,
//   });
// 
//   $(".panel").scroll(function() {
// 
//     $.scrollify.next();
//   });
// 
// 
// }

$(function() {
  $.scrollify({
    section: '.panel',
    sectionName : "section-name",
    scrollSpeed: 1200
  });
});


$(".scroll").click(function(e) {
   e.preventDefault();
   
   $.scrollify.next();
 });