$(document).ready(function(){
  AOS.init();

  const menuBtn = $('.toggle-menu')
  const menuHeader = $('#mobile-menu')

  menuBtn.click(()=>{
    menuHeader.toggleClass('hidden')
  })
});
		