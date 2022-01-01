//seleziono gli elementi dal DOM
const image = document.getElementById('filtered-image');
const grayScaleRange = <HTMLInputElement>document.getElementById('gray-scale');
const brightnessRange = <HTMLInputElement>document.getElementById('brightness');
const contrastRange = <HTMLInputElement>document.getElementById('contrast');
const opacityRange = <HTMLInputElement>document.getElementById('opacity');
const sepiaRange = <HTMLInputElement>document.getElementById('sepia');
const invertRange = <HTMLInputElement>document.getElementById('invert');

//creo interfaccia 

interface IFilterObj {
    grayscale: string;
    brightness: string;
   // [key: string]: any;
}

//creo oggetto filtro

let filters: IFilterObj = {
    grayscale: '',
    brightness: '',
}

//funzione per convertire l'oggetto in stringa

const filterString: ()=> string = ()=> {
    
    let finalString: string = '';

    for (let key in filters) {
        if(filters[key] !== '') {

            finalString += `${key}(${filters[key]}%) `;
        }
    }

    return finalString;
}

//funzione per settare valore filtro

const setFilter = (nameFilter: string, element: any) => {

    filters[nameFilter] = element.value;
    console.log(filterString())
    image.style.filter = filterString();
}
//gestisco il Gray Scale Range

grayScaleRange.addEventListener('input', ()=> {

    setFilter('grayscale', grayScaleRange);

})


//gestisco il Brightness Range

brightnessRange.addEventListener('input', () => {

    setFilter('brightness', brightnessRange);

})

//gestisco il Contrast Range

contrastRange.addEventListener('input', () => {

    setFilter('contrast', contrastRange);

})

//gestisco il Opacity Range

opacityRange.addEventListener('input', () => {

    setFilter('opacity', opacityRange);

})

//gestisco il Sepia Range

sepiaRange.addEventListener('input', () => {

    setFilter('sepia', sepiaRange);

})

//gestisco il Invert Range

invertRange.addEventListener('input', () => {

    setFilter('invert', invertRange);

})