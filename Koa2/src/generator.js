function *makeIterator(arr){

    for(let i=0;i<arr.length;i++){
        yield arr[i];
    }
}

const it = makeIterator(['1','2','3']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().done);
console.log(it.next().value);

const makeIterator1 = function* (arr){

    for(let i=0;i<arr.length;i++){
        yield arr[i];
    }
}

const it1 = makeIterator1(['1','2','3']);
console.log(it1.next().value);
console.log(it1.next().value);
console.log(it1.next().value);
console.log(it1.next().done);
console.log(it1.next().value);