//Basic recursion
function countdown(n) {
    console.log(n);

    n--;

    if (n > 0) 
       countdown(n);
}


countdown(10);