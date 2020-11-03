/* 
 * Basic recursion in Javascript to implement a countdown.
 */
function countdown(n) {
    console.log(n);

    n--;

    if (n > 0) 
       countdown(n);
}


countdown(10); // Countdown from 10