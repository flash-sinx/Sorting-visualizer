/* this is a better version of merge sort with optimal space complexity*/
/* comments added */

export function getMergeSortAnimations(array) {
    const animations = [];
    if(array.length <= 1)
        return array;
    const auxArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxArray, animations);
    return animations;
}

/*mergesort helper function that deals with the animations of the array bars keeping in mind
original index and changing of colors */

function mergeSortHelper(mainArray, startidx, endidx, auxArray, animations,)
{
    if(startidx === endidx)
        return;
    const mididx = Math.floor((startidx + endidx)/2);

    mergeSortHelper(auxArray, startidx, mididx,mainArray, animations);
    mergeSortHelper(auxArray, mididx + 1, endidx,mainArray, animations);
    doMerge(mainArray, startidx, mididx, endidx, auxArray, animations);

}

function doMerge(mainArray, startidx, mididx, endidx, auxArray, animations,)
{
    let k = startidx;
    let i = startidx;
    let j = mididx + 1;
    while(i <= mididx && j<=endidx)
    {
        animations.push([i,j]);
        //these values are pushed in the animation array are being compared
        //this is done to change their color
        animations.push([i,j]);
        // again same values are pushed to change back their color to original
        if(auxArray[i] <= auxArray[j])
        {
            animations.push([k, auxArray[i]]);
            mainArray[k++] = auxArray[i++];
            // we replace the value at index k in the original array with that
            // at index i in the auxiliary array

        }
        else{
            animations.push([k, auxArray[j]]);
            mainArray[k++] = auxArray[j++];

        }
    }
    while(i <=mididx){
        animations.push([i,i]);
        animations.push([i,i]);
        animations.push([k, auxArray[i]]);
        mainArray[k++] = auxArray[i++];
    }
    while( j <= endidx)
    {
        animations.push([j,j]);
        animations.push([j,j]);

        animations.push([k,auxArray[j]]);
        mainArray[k++] = auxArray[j++];

    }
}
/*
export const MergeSort = array => {
    if(array.length === 1) return array;
    const mididx = Math.floor(array.length/2);
    const firsthalf = MergeSort(array.slice(0,mididx));
    const secondhalf = MergeSort(array.slice(mididx));
    const SortedArray = [];
    let i = 0, j = 0;
    
    while(i < firsthalf.length && j < secondhalf.length){
        if(firsthalf[i] < secondhalf[j]){
            SortedArray.push(firsthalf[i++]);
        }else{
            SortedArray.push(secondhalf[j++]);
        }
    }

    while(i < firsthalf.length) 
        SortedArray.push(firsthalf[i++]);
    while(j < secondhalf.length) 
        SortedArray.push(secondhalf[j++]);
    return SortedArray;
};*/