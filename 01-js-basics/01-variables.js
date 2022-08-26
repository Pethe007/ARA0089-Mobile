const array1 = [1, 'dois', 34, true]; 
/*console.log(typeof array[0]);
console.log(typeof array[1]);
console.log(typeof array[2]);
console.log(typeof array[3]);*/

for (let index = 0; index < array.length; index++){
    console.log(typeof array1[index]);

}

for (const indice of array1){
    console.log(typeof indice);
}

array1.forEach(indice => {
    console.log(typeof indice);
});

const array2 = array.map(indice => {
 return typeof indice;
 console.log(array2);
});

const array3 = [];
array1.forEach(indice => {
    indice = (typeof indice) + ' ' + indice;
    console.log(indice);
    array3.push(typeof indice);
});

