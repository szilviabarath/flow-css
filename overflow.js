document.querySelectorAll('*').forEach(el => {
    if (el.offsetWidth > document.documentElement.offsetWidth) {
        el.style.border = '1px solid red';
        console.log('Overflowing element:', el);
    }
  });

  var element = document.getElementById(`${name}`);
  var out = "";
  var name = window. prompt("Enter element name: ");
  var elementStyle = element.style;
  var computedStyle = window.getComputedStyle(element, null);

  for (prop in elementStyle) {
    if (elementStyle.hasOwnProperty(prop)) {
      out += "  " + prop + " = '" + elementStyle[prop] + "' > '" + computedStyle[prop] + "'\n";
    }
  }
  console.log(out)