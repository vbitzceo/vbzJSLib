function processArray(arr, startIdx, dir="f") {
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

x = [1,2,3,4,5];

processArray(x, 0, "f");