$(function() {
$(window).bind("resize", function() {
  $('#bigtable').toggle($(this).width() >= 580);    
}).trigger("resize");
});

$(function() {
$(window).bind("resize", function() {
  $('#littlephone').toggle($(this).width() < 580);    
}).trigger("resize");
});

$(function() {
$(window).bind("resize", function() {
  $('#littleemail').toggle($(this).width() < 580);    
}).trigger("resize");
});

$(function() {
$(window).bind("resize", function() {
  $('#littleaddress').toggle($(this).width() < 580);    
}).trigger("resize");
});

$(function() {
$(window).bind("resize", function() {
  $('#mobile-home-link').toggle($(this).width() < 580);    
}).trigger("resize");
});

$(function() {
$(window).bind("resize", function() {
  $('#mobile-event-link').toggle($(this).width() < 580);    
}).trigger("resize");
});

$(function() {
$(window).bind("resize", function() {
  $('#mobile-cause-link').toggle($(this).width() < 580);    
}).trigger("resize");
});

$(function() {
$(window).bind("resize", function() {
  $('#mobile-donate-link').toggle($(this).width() < 580);    
}).trigger("resize");
});