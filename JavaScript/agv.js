const removeFirstLast = arry => {
    
    if (arry.length >= 3) {
        return arry.slice(1, -1);
    } else {
        throw "Need at least 3 elements in array";
    }
}

removeFirstLast([1,2,3]);
