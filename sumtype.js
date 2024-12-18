// When adding or removing characters, remember to update three places:
// (1) const chars below
// (2) const x below
// (3) the "key" table in index.html

const chars = [
    ["SZ","Š"],
    ["sz","š"],
    ["H","Ḫ"],
    ["h","ḫ"],
    ["G/","Ĝ"],
    ["g/","ĝ"],
    ["R/","Ř"],
    ["r/","ř"],
    ["T/","Ṭ"],
    ["t/","ṭ"],
    ["S/","Ṣ"],
    ["s/","ṣ"],
    ["AAA","Â"],
    ["aaa","â"],
    ["EEE","Ê"],
    ["eee","ê"],
    ["III","Î"],
    ["iii","î"],
    ["UUU","Û"],
    ["uuu","û"],
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
    ["\n","$br"],
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
const x = /[A-Za-zŠĜŊḪŘṬṢÁÀĀÂÉÈĒÊÍÌĪÎÚÙŪÛšĝŋḫřṭṣáàāâéèēêíìīîúùūû₀₁₂₃₄₅₆₇₈₉][0-9]/;
let text;
let engOption1;
let currentEng;
let otherEng;
let boldOption1;
let formattingOption1;

function convert(){
    getInput();
    convertChars();
    chooseFormatting();
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

function chooseFormatting(){
    formattingOption1 = document.getElementById("formattingOption1");
    if (formattingOption1.checked){
        convertNumbers();
    } else {
        text = text.replaceAll("<sup>","{").replaceAll("</sup>","}"); // Don't judge me
    }
}

function convertNumbers(){
    while (text.search(x) != -1){
      text = text.replaceAll(text[text.search(x)] + text[text.search(x)+1], text[text.search(x)] + numbers[parseInt(text[text.search(x)+1])]);
    }
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