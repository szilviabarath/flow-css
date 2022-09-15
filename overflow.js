document.querySelectorAll('*').forEach(el => {
    if (el.offsetWidth > document.documentElement.offsetWidth) {
        el.style.border = '1px solid red';
        console.error('Overflowing element:', el);
    }
  });

  //fix overflow for viewport units//
function handleFullWidthSizing(el) {

    const scrollbarWidth = window.innerWidth - document.body.clientWidth
    var els = document.querySelectorAll('*');
    for(var i=0; i < els.length;i++) {
        document.querySelector(el).style.width = `calc(100vw - ${scrollbarWidth}px)`
    }
}
//replace Element with your element's name//
handleFullWidthSizing("Element");