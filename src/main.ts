//seleziono gli elementi dal DOM
const image = document.getElementById('filtered-image');
const grayScaleRange = <HTMLInputElement>document.getElementById('gray-scale');
const brightnessRange = <HTMLInputElement>document.getElementById('brightness');

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