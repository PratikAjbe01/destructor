let array=[2,6,9,3,5];
function maxMin(arr){
   
    maxi=Math.max(...arr);
    mini=Math.min(...arr);
    const obj={max:maxi,min:mini};
    console.log(obj);
}
maxMin(array);