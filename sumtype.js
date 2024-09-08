const chars = [
    ["SZ","Š"],
    ["sz","š"],
    ["H","Ḫ"],
    ["h","ḫ"],
    ["G/","Ĝ"],
    ["g/","ĝ"],
    ["R/","Ř"],
    ["r/","ř"],
    ["AA","Ā"],
    ["aa","ā"],
    ["EE","Ē"],
    ["ee","ē"],
    ["II","Ī"],
    ["ii","ī"],
    ["UU","Ū"],
    ["uu","ū"],
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
const x = /[A-Za-zŠĜŊḪŘÁÀĀÉÈĒÍÌĪÚÙŪšĝŋḫřáàāéèēíìīúùū₀₁₂₃₄₅₆₇₈₉][0-9]/;
let text;
let engOption1;
let currentEng;
let otherEng;
let boldOption1;

function convert(){
    getInput();
    convertChars();
    convertNumbers();
    chooseEng();
    chooseType();
    writeOutput();
}

function getInput(){
    text = document.getElementById("input").value;
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

function chooseEng(){
    engOption1 = document.getElementById("engOption1");
    currentEng = document.getElementById("currentEng");
    otherEng = document.getElementById("otherEng");
    if (engOption1.checked){
        currentEng.innerHTML = "ĝ";
        otherEng.innerHTML = "ŋ";
    } else {
        currentEng.innerHTML = "ŋ";
        otherEng.innerHTML = "ĝ";
        text = text.replaceAll("Ĝ", "Ŋ").replaceAll("ĝ", "ŋ");
    }
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