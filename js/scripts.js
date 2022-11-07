/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 


window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
document.getElementById('copytext').addEventListener('click',function(){
    navigator.clipboard.writeText('9910763513')

})

document.getElementById('download').addEventListener('input',function(e){
    debugger
    var reader = new FileReader();
    var fileByteArray = [];
    let myFile = e.target.files[0];
    reader.readAsArrayBuffer(myFile);
    reader.onloadend = function (evt) {
    if (evt.target.readyState == FileReader.DONE) {
       var arrayBuffer = evt.target.result,
           array = new Uint8Array(arrayBuffer);
       for (var i = 0; i < array.length; i++) {
           fileByteArray.push(array[i]);
        }
    }


}
let result = "";
for (var i = 0; i < fileByteArray.length; i++) {
  result += String.fromCharCode(parseInt(array[i], 2));
}


console.log(result)
console.log(fileByteArray)
})




