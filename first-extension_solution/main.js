var allImages = document.getElementsByTagName('img');

for (var i = 0; i < allImages.length; i++) {

    var imageHeight = allImages[i].clientHeight;
    var imageWidth = allImages[i].clientWidth;

    // Stretch 1
    // allImages[i].addEventListener('click', function() {
    //     var thisImageHeight = this.clientHeight;
    //     var thisImageWidth = this.clientWidth;
    //     var imageLink = "https://placekitten.com/" + thisImageWidth + "/" + thisImageHeight;
    //     this.setAttribute('src', imageLink);
    // });

    // Stretch 3
    // client height/width is empty if the image isn't on screen.  Grab height/width attribute if available
    // or default to something
    // var imageHeight = allImages[i].clientHeight || allImages[i].height || 600;
    // var imageWidth = allImages[i].clientWidth || allImages[i].width || 800;

    allImages[i].setAttribute('src', 'https://placekitten.com/' + imageWidth + '/' + imageHeight)
}

// Stretch 2
// var myElementsToDisappear = document.getElementsByTagName('p');
//
// for (var i = 0; i < myElementsToDisappear.length; i++) {
//     myElementsToDisappear[i].addEventListener('click', function() {
//         this.setAttribute('style', 'opacity: 0');  // opt 1
//         this.setAttribute('style', 'visibility: hidden'); // opt 2
//         this.remove(); // opt 3
//     });
// }

// Stretch 4
// handle all CSS background images
// function walk(elm) {
//     var node;

//     // ...handle this element's width
//     if (elm.style.backgroundImage) {

//         var imageHeight = elm.clientHeight || elm.height || 600;
//         var imageWidth = elm.clientWidth || elm.width || 800;

//         elm.style.backgroundImage = 'url(https://placekitten.com/' + imageWidth + '/' + imageHeight + ')';
//     }

//     // Handle child elements
//     for (node = elm.firstChild; node; node = node.nextSibling) {
//         if (node.nodeType === 1) { // 1 == Element
//             walk(node);
//         }
//     }
// }

// walk(document.body);


document.body.style = "transition: 2s; transform: rotate(1080deg);";