//seleziono gli elementi dal DOM
const image = document.getElementById('filtered-image');
const grayScaleRange = <HTMLInputElement>document.getElementById('gray-scale');

//gestisco il Gray Scale Range

// grayScaleRange.oninput = ()=> {
//     console.log('gray scale', this.grayScaleRange.value);
// } 
 //=> TODO... non funziona

grayScaleRange.addEventListener('input', ()=> {

    const valueGrayScale: number = Number(grayScaleRange.value);

    image.style.filter = `grayscale(${valueGrayScale}%)`;
})