
//For Chunk
interface chunk {
    chArray: string[],
    size: number;
}
let chunkFunction = (test: chunk) => {
    let newArray1 = [];
    let newArray2 = [];
    let outPutArray = [];
    for (let i = 0; i < test.chArray.length; i++) {
        if (i < test.size) {
            newArray1.push(test.chArray[i]);
        }
        else {
            newArray2.push(test.chArray[i])
        }
    }
    outPutArray.push(newArray1);
    outPutArray.push(newArray2);
    console.log(outPutArray);
}
//if the function is not returning anything we can make it as void
let input: chunk = void chunkFunction({
    chArray: ["a", "b", "c", "d"],
    size: 3
})

//console.log(input);


//for Drop
//let array=[1,2,3,4,5];
interface droppp {
    drArray: number[],
    size1?: number;
}
let dropFunction = (test1: droppp) => {
    let dropArray = [];

        if (test1.size1 >= 0) {
            for (let k = test1.size1; k < test1.drArray.length; k++) {
                //delete (test1.drArray[k]);
                dropArray.push(test1.drArray[k]);
            }
        }
        else {
            for (let k = 1; k < test1.drArray.length; k++) {
            //delete (test1.drArray[0]);
             dropArray.push(test1.drArray[k]);
            }
        }
    console.log(dropArray);
}
let input1: droppp = void dropFunction({
    drArray: [1, 2, 3, 4, 5],
    size1: 2

})


//drop right

interface dropppRight {
    drrArray: number[],
    size2?: number;
}
let dropRightFunction = (test2: dropppRight) => {
    let dropRArray = [];
        if (test2.size2 >= 0) {
            for (let k = 0; k <test2.drrArray.length-test2.size2 ; k++) {
                //delete (test1.drArray[k]);
                dropRArray.push(test2.drrArray[k]);
            }
        }
        else {
            for (let k =0; k<test2.drrArray.length-1; k++) {
            //delete (test1.drArray[0]);
            dropRArray.push(test2.drrArray[k]);
            }
        }
    console.log(dropRArray);
}
let input2: dropppRight = void dropRightFunction({
    drrArray: [1, 2, 3, 4, 5],

})



//returns First element

interface firstEle{
    array:number[]
}

let retFirstEle=(test3:firstEle)=>
{
        if(test3.array.length>0){
            console.log(test3.array[0]);
        }else{
            console.log("undefined");}
}

let input3:firstEle=void retFirstEle({
    array:[1,2,3]
})
