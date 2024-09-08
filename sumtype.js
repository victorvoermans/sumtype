let chars = [
    ["g/","ĝ"],
    ["G/","Ĝ"],
    ["sz","š"],
    ["SZ","Š"],
    ["h","ḫ"],
    ["H","Ḫ"],
    ["r/","ř"],
    ["R/","Ř"],
    ["aa","ā"],
    ["AA","Ā"],
    ["EE","Ē"],
    ["ee","ē"],
    ["II","Ī"],
    ["ii","ī"],
    ["uu","ū"],
    ["UU","Ū"],
    ["[[","⸢"],
    ["]]","⸣"],
    ["x/","ₓ"],
    // The following replacements should happen in this order to ensure nothing goes wrong with HTML when < > ; are used in the input
    [";","$br"],
    ["{","$sup"],
    ["}","$/sup"],
    ["<","&#60;"],
    [">","&#62;"],
    ["'","&#660;"],
    ["$br","<br>"],
    ["$sup","<sup>"],
    ["$/sup","</sup>"]
];
const numbers = ["₀","₁","₂","₃","₄","₅","₆","₇","₈","₉"];
const x = /[a-zA-ZšĝŋḫřáàāéèēíìīúùūŠĜŊḪŘÁÀĀÉÈĒÍÌĪÚÙŪ₀₁₂₃₄₅₆₇₈₉][0-9]/;
let text;
let engOption1;
let currentEng;
let otherEng;
let boldOption1;

function convert(){
    getInput();
    chooseEng();
    convertChars();
    convertNumbers();
    chooseType();
    writeOutput();
}

function getInput(){
    text = document.getElementById("input").value;
}

function chooseEng(){
    engOption1 = document.getElementById("engOption1");
    currentEng = document.getElementById("currentEng");
    otherEng = document.getElementById("otherEng");
    if (engOption1.checked){
        chars[0][1] = "ĝ"; // dit moet beter kunnen
        chars[1][1] = "Ĝ";
        currentEng.innerHTML = "ĝ";
        otherEng.innerHTML = "ŋ";
    } else {
        chars[0][1] = "ŋ";
        chars[1][1] = "Ŋ";
        currentEng.innerHTML = "ŋ";
        otherEng.innerHTML = "ĝ";
    }
}

function convertChars(){
    for (let i = 0; i < chars.length; i++){
        text = text.replaceAll(chars[i][0], chars[i][1]);
    }
}

function convertNumbers(){
    while (text.search(x) != -1){
      text = text.replace(text[text.search(x)] + text[text.search(x)+1], text[text.search(x)] + numbers[parseInt(text[text.search(x)+1])]);
    }
    // Here you really have to replace BOTH characters; if you find "a2" and say, now replace the second character, it will replace the first "2" it comes across.
}

function chooseType(){
    boldOption1 = document.getElementById("boldOption1");
    if (boldOption1.checked){
        text = "<b>" + text + "</b>";
    }
}

function writeOutput(){
    document.getElementById("output").innerHTML = text;
}