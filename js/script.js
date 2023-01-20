$('#tab-contents.tab[id != "tab1"]').hide();

$('tab-menu a').on('click',function(event){
  $('#tab-contents .tab').hide();
  $('#tab-contents.active').remoteClass("active");
  $(this).addClass("active");
  $((this).attr("href")).show();
  event.preventDefault();
})