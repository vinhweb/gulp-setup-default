$(document).ready(function(){
  AOS.init();

  const menuBtn = $('.menuBtn')
  const menuHeader = $('#menuHeader')

  menuBtn.click(()=>{
    menuHeader.toggleClass('hidden')
    menuBtn.toggleClass('active')
  })
});
		