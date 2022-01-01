//seleziono gli elementi dal DOM
var image = document.getElementById('filtered-image');
var grayScaleRange = document.getElementById('gray-scale');
var brightnessRange = document.getElementById('brightness');
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
