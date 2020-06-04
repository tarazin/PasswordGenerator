// define different types of characters
var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!@#$%^&*=-_';

// ids from html file
var charNum = document.getElementById("charNum");
var numBox = document.getElementById("num");
var symBox = document.getElementById("sym");
var generate = document.getElementById("generate");
var yourPw = document.getElementById("yourPw");

generate.addEventListener("click",function(e){
    var characters = char;
    // if number and/or symbol are checked, concatenate them into characters 
    (numBox.checked) ? characters += num : '';
    (symBox.checked) ? characters += sym : '';
    yourPw.value = password(charNum.value, characters);
});
// a function containing a for loop to go through the character types randomely 
function password(l,characters){
		var pwd = '';
    for(var i = 0; i<l; i++){
    		pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}