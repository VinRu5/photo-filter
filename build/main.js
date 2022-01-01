//seleziono gli elementi dal DOM
var image = document.getElementById('filtered-image');
var grayScaleRange = document.getElementById('gray-scale');
//gestisco il Gray Scale Range
// grayScaleRange.oninput = ()=> {
//     console.log('gray scale', this.grayScaleRange.value);
// } 
//=> TODO... non funziona
grayScaleRange.addEventListener('input', function () {
    var valueGrayScale = Number(grayScaleRange.value);
    image.style.filter = "grayscale(".concat(valueGrayScale, "%)");
});
