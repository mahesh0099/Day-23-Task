var chunkFunction = function (test) {
    var newArray1 = [];
    var newArray2 = [];
    var outPutArray = [];
    for (var i = 0; i < test.chArray.length; i++) {
        if (i < test.size) {
            newArray1.push(test.chArray[i]);
        }
        else {
            newArray2.push(test.chArray[i]);
        }
    }
    outPutArray.push(newArray1);
    outPutArray.push(newArray2);
    console.log(outPutArray);
};
//if the function is not returning anything we can make it as void
var input = void chunkFunction({
    chArray: ["a", "b", "c", "d"],
    size: 3
});
var dropFunction = function (test1) {
    var dropArray = [];
    if (test1.size1 >= 0) {
        for (var k = test1.size1; k < test1.drArray.length; k++) {
            //delete (test1.drArray[k]);
            dropArray.push(test1.drArray[k]);
        }
    }
    else {
        for (var k = 1; k < test1.drArray.length; k++) {
            //delete (test1.drArray[0]);
            dropArray.push(test1.drArray[k]);
        }
    }
    console.log(dropArray);
};
var input1 = void dropFunction({
    drArray: [1, 2, 3, 4, 5],
    size1: 2
});
var dropRightFunction = function (test2) {
    var dropRArray = [];
    if (test2.size2 >= 0) {
        for (var k = 0; k < test2.drrArray.length - test2.size2; k++) {
            //delete (test1.drArray[k]);
            dropRArray.push(test2.drrArray[k]);
        }
    }
    else {
        for (var k = 0; k < test2.drrArray.length - 1; k++) {
            //delete (test1.drArray[0]);
            dropRArray.push(test2.drrArray[k]);
        }
    }
    console.log(dropRArray);
};
var input2 = void dropRightFunction({
    drrArray: [1, 2, 3, 4, 5]
});
var retFirstEle = function (test3) {
    if (test3.array.length > 0) {
        console.log(test3.array[0]);
    }
    else {
        console.log("undefined");
    }
};
var input3 = void retFirstEle({
    array: [1, 2, 3]
});
