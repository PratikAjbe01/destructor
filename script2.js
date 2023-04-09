const array1=[1,3,4,2,3,4,2,3,5,6,7,8];
function removeDuplicate(arr){
    const uniqueArray=[...new Set(arr)];
    return uniqueArray;
}
let ans=removeDuplicate(array1);
console.log(ans);