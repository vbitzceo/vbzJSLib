 /*
 * Recursive function to process an array in javascript
 */ 
 function processArray (arr, startIdx, dir="f") {
    if (startIdx >= 0 && arr[startIdx] != undefined)
    {
        console.log(arr[startIdx]);

        if (dir.toUpperCase() === "F")
            startIdx++;
        else 
            startIdx--;

        processArray(arr, startIdx, dir);
    }
    else 
        return;
}

// Export for Node.JS
exports.processArray = function (arr, startIdx, dir="f") {
    processArray (arr, startIdx, dir);
}

