/* A collection of string functions*/

/*
 * Only Shows up to the last 4 characters of a passed in string (str)
 * str: the string to operate on
 * removeChar: a char to remove from the string prior to obfuscating
 * the removeChar could be the - in an SSN for example.
 */
onlyShowLastChars = function(str, removeChar = null) {
    var replications;
    var lastChars;

    if (removeChar != null) {
        while(str.indexOf(removeChar) != -1)
        {
            str = str.replace('-', '');
        }
    }
   
    if (str.length/2 < 4) {
        replications = (str.length - (Math.floor(str.length/2)));
        lastChars = Math.floor(str.length/2);
    } 

    if (str.length/2 >= 4) {
        replications = (str.length - 4);
        lastChars = 4;
    } 

    var spliceString = "";
    var replicationsCtr = 1;

    while(replicationsCtr <= replications)
    {
        spliceString += '*';
        replicationsCtr++;
    }

    return spliceString + str.substr(str.length - lastChars);
}

console.log(onlyShowLastChars('234-56-3422', "-"));

console.log(onlyShowLastChars('1234'));
console.log(onlyShowLastChars('12345'));
console.log(onlyShowLastChars('123456'));
console.log(onlyShowLastChars('1234567'));
console.log(onlyShowLastChars('12345678'));
console.log(onlyShowLastChars('123456789'));
console.log(onlyShowLastChars('1234567890'));
console.log(onlyShowLastChars('12345678901'));
