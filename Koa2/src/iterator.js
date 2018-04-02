function makeIterator(arr){
    let nextIndex =0

    return{
        next:()=>{
            if(nextIndex < arr.length){
                return{ value:arr[nextIndex++],  done:false }
            }else{
                return{ done:true }
            }
        }
    }
}

const it = makeIterator(['1','2','3']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().done);
console.log(it.next().value);