$(document).ready(function () {
  $(".card").hover(function () {
    var t = $(this).find(".share");
    t.toggleClass("scrollIn");
  });
});
