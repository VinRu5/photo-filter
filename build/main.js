//seleziono gli elementi dal DOM
var image = document.getElementById('filtered-image');
var grayScaleRange = document.getElementById('gray-scale');
var brightnessRange = document.getElementById('brightness');
var contrastRange = document.getElementById('contrast');
var opacityRange = document.getElementById('opacity');
var sepiaRange = document.getElementById('sepia');
var invertRange = document.getElementById('invert');
//creo oggetto filtro
var filters = {
    grayscale: '',
    brightness: ''
};
//funzione per convertire l'oggetto in stringa
var filterString = function () {
    var finalString = '';
    for (var key in filters) {
        if (filters[key] !== '') {
            finalString += "".concat(key, "(").concat(filters[key], "%) ");
        }
    }
    return finalString;
};
//funzione per settare valore filtro
var setFilter = function (nameFilter, element) {
    filters[nameFilter] = element.value;
    console.log(filterString());
    image.style.filter = filterString();
};
//gestisco il Gray Scale Range
grayScaleRange.addEventListener('input', function () {
    setFilter('grayscale', grayScaleRange);
});
//gestisco il Brightness Range
brightnessRange.addEventListener('input', function () {
    setFilter('brightness', brightnessRange);
});
//gestisco il Contrast Range
contrastRange.addEventListener('input', function () {
    setFilter('contrast', contrastRange);
});
//gestisco il Opacity Range
opacityRange.addEventListener('input', function () {
    setFilter('opacity', opacityRange);
});
//gestisco il Sepia Range
sepiaRange.addEventListener('input', function () {
    setFilter('sepia', sepiaRange);
});
//gestisco il Invert Range
invertRange.addEventListener('input', function () {
    setFilter('invert', invertRange);
});
