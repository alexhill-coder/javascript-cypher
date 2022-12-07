//Cypher Project - the first variable is the string used for the convsersion and the second
//although not needed for this project is used to detrmine whether to encode("e") or decode ("d").  

//----------------------- Insert text here to test cypher program ------------------------//
let cypherString = "This is a test of the cypher program.";
//----------------------------------------------------------------------------------------//

let encodeOrDecode = "e";

//This function is used to insert the intial inputs and call all the other functions necessary to 
//encode/decode the string. It is also where the string from the second variable determine whether
//the output is encoded or decoded.
function encryptionCypher(encodingString, operation) { 
   //The string is first convertd into ascii.
   let ascii = stringToAscii(encodingString);
   //The ascii array is then added or subtracted depending if you are encoding or decoding.
   let conversion;
   if (operation == "e") {
    conversion = asciiEncode(ascii);
   } 
   else if (operation == "d") {
    conversion = asciiDecode(ascii);
   }
   //The altered string is then converted back into characters. 
   let characters = asciiToString(conversion);
   //Once the last function has been called it is outputted.
   return characters;
}

//The function goes through each letter of the string converts 
//it to ascii and then adds it to an array.
function stringToAscii(encodingString) {
    let stringAscii = [];
    for (i = 0; i < encodingString.length; i++) {
        stringAscii.push(encodingString.charCodeAt(i));
    }
    //The function outputs the array.
    return stringAscii;
}

//This function encodes the string by altering the ascii codes then returns a new array.
function asciiEncode (encodingString) {
    let alteredAscii = [];
    let newNumber;
    //an array is inputted and the if statements check to see if the item needs to be altered.
    encodingString.forEach(element => {
        //Checks to see if the code is betwen A-Z and shifts the letter positively along the
        //alphabet. Then adds to the altered Ascii variable.
        if (element >= 65 && element <= 90) {
            newNumber = element + 15;
            if (newNumber > 90) {
                //An adjustment is used if the charecter goes beyond z.
                newNumber = (newNumber - 26);
                alteredAscii.push(newNumber);
            }
            else {
            //If no adjustment is needed the the letter is added to the array.
            alteredAscii.push(newNumber);
            }
        }
        //Checks to see if the code is betwen a-a and shifts the letter positively along the
        //alphabet. Then adds to the altered Ascii variable.
        else if (element >= 97 && element <= 122) {
            newNumber = element + 15;
            if (newNumber > 122) {
                //An adjustment is used if the charecter goes beyond z.
                newNumber = (newNumber - 26);
                alteredAscii.push(newNumber);
            }
            else {
                //If no adjustment is needed the the letter is added to the array.
                alteredAscii.push(newNumber);
            }
        }
        else {
            //If not a letter the item is just added to the new array.
            newNumber = element;
            alteredAscii.push(newNumber);
        }
        });
    //The new array is outputted.
    return alteredAscii;
}

//This function decodes the string by altering the ascii codes then returns a new array.
//This is not specified in the task but handy for future use.
function asciiDecode (encodingString) {
    let alteredAscii = [];
    let newNumber;
    //an array is inputted and the if statements check to see if the item needs to be altered.
    encodingString.forEach(element => {
        //Checks to see if the code is betwen A-Z and shifts the letter negatively along the
        //alphabet. Then adds to the altered Ascii variable.
        if (element >= 65 && element <= 90) {
            newNumber = element - 15;
            //An adjustment is used if the charecter goes beyond a.
            if (newNumber < 65) {
                newNumber = (newNumber + 26);
                alteredAscii.push(newNumber);
            }
            else {
            //If no adjustment is needed the the letter is added to the array.
            alteredAscii.push(newNumber);
            }
        }
        else if (element >= 97 && element <= 122) {
            newNumber = element - 15;
            //Checks to see if the code is betwen a-z and shifts the letter negatively along the
            //alphabet. Then adds to the altered Ascii variable.
            if (newNumber < 97) {
                newNumber = (newNumber + 26);
                alteredAscii.push(newNumber);
            }
            else {
                //If no adjustment is needed the the letter is added to the array.
                alteredAscii.push(newNumber);
            }
        }
        else {
            //If not a letter the item is just added to the new array.
            newNumber = element;
            alteredAscii.push(newNumber);
        }
        });
    //The new array is outputted.
    return alteredAscii;
}

//This function goes through the inputted array and converts the ascii code back to a string.
function asciiToString(encodingString) {
    let asciiString = "";
    encodingString.forEach(element => {
        asciiString += String.fromCharCode(element);  
    }) 
    return asciiString;
}

//Finally the returned string is outputted and shown along side the original. Showing
//only changes to the alphabetic characters 
console.log(`
----------------------------------------------------------------
Your input:   | ${cypherString} 
--------------|-------------------------------------------------
Your Output:  | ${encryptionCypher(cypherString, encodeOrDecode)}
----------------------------------------------------------------`);

//Used the W3School website to find information on charCodeAt() & String.fromCharCode() functions:
//https://www.w3schools.com/jsref/jsref_charcodeat.asp#gsc.tab=0&gsc.q=fromcharcode
//https://www.w3schools.com/jsref/jsref_fromcharcode.asp