var generateButton = document.querySelector("#generate")
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numericList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialLetterList = [",", "?", "@", "*"]



function checkPasswordLength() {
    var passwordLength = prompt("how many characters do you like your password contain? *a length of at least 8 characters and no more than 128 characters");
    if (passwordLength < 8) {
        alert("Please use length of at least 8 characters and no more than 128 characters");
        return generatePassword();
    };
    if (passwordLength > 128) {
        alert("Please use length of at least 8 characters and no more than 128 characters");
        return generatePassword();
    }
    return passwordLength;
}



function generatePassword() {

    var passwordLength = checkPasswordLength();
    // show all the confirms, and store each answers to the variable.
    var lowerCaseConfirm = confirm("Do you want lowercase");
    var upperCaseConfirm = confirm("Do you want upperCase");
    var numericLettersConfirm = confirm("Do you want numeric");
    var specialLetterCheckConfirm = confirm("Do you want special letter");
    var password = [];

    if (lowerCaseConfirm == false && upperCaseConfirm == false && numericLettersConfirm == false && specialLetterCheckConfirm == false) {

        for (i = 0; i < passwordLength; i++) {
            password.push(randomlowerCaseLetters());
        }

    }

    else {
        while (password.length < passwordLength) {
            var randomType = Math.floor(Math.random() * 4);
            if (randomType == 0 && upperCaseConfirm == true) {
                password.push(randomupperCaseLetters());
            }
            if (randomType == 1 && numericLettersConfirm == true) {
                password.push(randomnumericList());
            }
            if (randomType == 2 && specialLetterCheckConfirm == true) {
                password.push(randomspecialLetterCheck());
            }
            if (randomType == 3 && lowerCaseConfirm == true) {
                password.push(randomlowerCaseLetters());
            }
          
            
        }

    }

    //put the generated password in the HTML,
    document.querySelector("#password").value = password.join("");






    function randomupperCaseLetters() {

        var upperCaseIndex = Math.floor(Math.random() * Math.floor(upperCaseLetters.length));

        return upperCaseLetters[upperCaseIndex];
    }



    function randomnumericList() {


        var numericListIndex = Math.floor(Math.random() * Math.floor(numericList.length));


        return numericList[numericListIndex];


    }



    function randomspecialLetterCheck() {


        var specialLetterIndex = Math.floor(Math.random() * Math.floor(specialLetterList.length));

        return specialLetterList[specialLetterIndex];

    }



    function randomlowerCaseLetters() {

        var lowerCaseIndex = Math.floor(Math.random() * Math.floor(lowerCaseLetters.length));
        return lowerCaseLetters[lowerCaseIndex];

    }
}




generateButton.addEventListener("click", generatePassword);


