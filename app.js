function changeClass(x){
  var illustration = document.querySelector('.product-img')
  if(x.matches){
    illustration.src = "images/illustration-editor-mobile.svg"

  }
  else {
    illustration.src = "images/illustration-editor-desktop.svg"
  }
}

function changeClassLaptop(x) {
  var illustration = document.querySelector('.laptop-img')
  if(x.matches){
    illustration.src = "images/illustration-laptop-mobile.svg"

  }
  else {
    illustration.src = "images/illustration-laptop-desktop.svg"
  }
}

var x = window.matchMedia("(max-width: 1215px)")
// register listener
x.addListener(changeClass)
// change the class
changeClass(x)

x.addListener(changeClassLaptop)
changeClassLaptop(x)
