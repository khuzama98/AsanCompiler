// var takeInput = require('./app1')
// import {takeInput} from './app1'

let lexical = document.getElementById('test1');
let syntactical = document.getElementById('test2');

let code;
let editor;
$(document).ready(function () {
    code = $(".codemirror-textarea")[0];
    editor = CodeMirror.fromTextArea(code, {
        lineNumbers: 20,
        value: "function myScript(){return 100;}\n",
        mode: "javascript",
        theme: 'icecoder',
    });
    console.log('code===>', code)
    console.log('editor===>', editor)
});

function print() {
    lexical.innerHTML = '';
    let gotArray = editor.display.maxLine.parent.lines;
    let text = '';
    for (let key in gotArray) {
        text += `${gotArray[key].text}\n`
    }
    takeInput(text)
}


let tokenArray = [];
let lineCount = 1;
let num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
let punctuatorToCheck = ['=', ';', '(', ')', '{', '}', '[', ']', ',', '<', '>', '"', "'", ':', '^', '*', '%', '+', '-', '&', '|', '~']
let printFlag = false;

const takeInput = (val) => {
    tokenArray = [];
    lineCount = 1;
    let paraToBreak = val;
    // const checkInput = document.getElementById('input').hasAttribute('disabled')
    // if (!checkInput) {
    //     input = document.getElementById('input').value;
    //     paraToBreak = input;
    // }
    // else {
    //     paraToBreak = text
    // }

    let word;
    for (let i = 0; i <= paraToBreak.length; i++) {
        let char = paraToBreak.slice(i, i + 1);
        // debugger;
        // if(i===0){
        //     word=char;
        // }
        if (char === ' ') {
            if (paraToBreak.slice(i - 1, i) === "\n") {

            }
            else if (paraToBreak.slice(i - 1, i) === " ") {

            }
            else if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word);
            }
            else if (word !== '') {
                gotAWord(word)
            }
            word = '';
        }
        else if (char === '\t') {
            continue
        }
        else if (char === '=') {
            if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word);
                word = '';
            }
            if (paraToBreak.slice(i, i + 3) === "===") {
                gotAWord('===')
                i = i + 2;
            }
            else if (paraToBreak.slice(i, i + 2) === "==") {
                gotAWord('==')
                i = i + 1;
            }
            else {
                gotAWord(char)
            }
        }
        else if (char === '!') {
            if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word);
                word = '';
            }
            if (paraToBreak.slice(i, i + 3) === "!==") {
                gotAWord('!==')
                i = i + 2;
            }
            else if (paraToBreak.slice(i, i + 2) === "!=") {
                gotAWord('!=')
                i = i + 1;
            }
            else {
                gotAWord(char)
            }
        }
        else if (char === '&') {
            if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word);
                word = '';
            }
            if (paraToBreak.slice(i, i + 2) === "&&") {
                gotAWord('&&')
                i = i + 1;
            }
            else {
                gotAWord(char)
            }
        }
        else if (char === '|') {
            if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word);
                word = '';
            }
            if (paraToBreak.slice(i, i + 2) === "||") {
                gotAWord('||')
                i = i + 1;
            }
            else {
                gotAWord(char)
            }
        }
        else if (char === '(') {
            if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word);
            }
            gotAWord(char);
            word = '';
        }
        else if (char === ')') {
            if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word);
            }
            gotAWord(char);
            word = '';
        }
        else if (char === '~') {
            if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word);
            }
            gotAWord(char);
            word = '';
        }
        else if (char === '\n') {
            // debugger
            // console.log(paraToBreak.slice(i-1,i))
            if (paraToBreak.slice(i - 1, i) === "");
            else if (word !== undefined && word.length > 0 && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word)
            }
            else if (word !== undefined && word.length > 0) {
                gotAWord(word)
            }
            word = '';
            lineCount++;
        }
        else if (char === '{') {
            if (paraToBreak.slice(i - 1, i) === "\n") {

            }
            else if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word);
            }
            gotAWord(char);
            word = '';
        }
        else if (char === '}') {
            if (paraToBreak.slice(i - 1, i) === "\n") {

            }
            else if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word);
            }
            gotAWord(char);
            word = '';
        }
        else if (char === '[') {
            if (paraToBreak.slice(i - 1, i) === "\n") {

            }
            else if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word);
            }
            gotAWord(char);
            word = '';
        }
        else if (char === ']') {
            if (paraToBreak.slice(i - 1, i) === "\n") {

            }
            else if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word);
            }
            gotAWord(char);
            word = '';
        }
        else if (char === '>') {
            if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word);
                word = '';
            }
            if (paraToBreak.slice(i, i + 2) === ">=") {
                gotAWord('>=')
                i = i + 1;
            }
            else {
                gotAWord(char);
            }
        }
        else if (char === '<') {
            if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word);
                word = '';
            }
            if (paraToBreak.slice(i, i + 2) === "<=") {
                gotAWord('<=')
                i = i + 1;
            }
            else {
                gotAWord(char)
            }
        }
        else if (char === '%') {
            if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word);
                word = '';
            }
            if (paraToBreak.slice(i, i + 2) === "%=") {
                gotAWord('%=')
                i = i + 1;
            }
            else {
                gotAWord(char)
            }
        }
        else if (char === '+') {
            // debugger
            if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word);
                word = '';
            }
            if (paraToBreak.slice(i, i + 2) === "+=") {
                gotAWord('+=');
                i = i + 1;
            }
            else if (paraToBreak.slice(i, i + 2) === "++") {
                gotAWord('++');
                i = i + 1;
            }
            else if ((paraToBreak.slice(i - 1, i) === " " && num.indexOf(paraToBreak.slice(i - 2, i - 1)) === -1 && num.indexOf(paraToBreak.slice(i, i + 1)) > -1) || (num.indexOf(paraToBreak.slice(i - 1, i)) === -1 && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && num.indexOf(paraToBreak.slice(i, i + 1)) > -1)) {
                if (i === 0 || word === undefined) {
                    word = char;
                }
                else {
                    word += char;
                }
            }
            else {
                gotAWord(char);
            }
        }
        else if (char === '-') {
            // debugger;
            if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word);
                word = '';
            }
            if (paraToBreak.slice(i, i + 2) === "--") {
                gotAWord('--');
                i = i + 1;
            }
            else if (paraToBreak.slice(i, i + 2) === "-=") {
                gotAWord('-=');
                i = i + 1;
            }
            else if ((paraToBreak.slice(i - 1, i) === " " && num.indexOf(paraToBreak.slice(i - 2, i - 1)) === -1 && num.indexOf(paraToBreak.slice(i, i + 1)) > -1) || (num.indexOf(paraToBreak.slice(i - 1, i)) === -1 && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && num.indexOf(paraToBreak.slice(i, i + 1)) > -1)) {
                if (i === 0 || word === undefined) {
                    word = char;
                }
                else {
                    word += char;
                }
            }
            else {
                gotAWord(char);
            }
        }
        else if (char === ';') {
            if (i === paraToBreak.length - 1) {
                // debugger
                console.log('Last token from ===> ;')
            }
            if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word);
            }
            gotAWord(char);
            word = '';
        }
        else if (char === '^') {
            if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word);
                word = '';
            }
            if (paraToBreak.slice(i, i + 2) === "^=") {
                gotAWord('^=');
                i = i + 1;
            }
            else {
                gotAWord(char);
            }
        }
        else if (char === '*') {
            if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word);
                word = '';
            }
            if (paraToBreak.slice(i, i + 2) === "*=") {
                gotAWord('*=');
                i = i + 1;
            }
            else {
                gotAWord(char);
            }
        }
        else if (char === ',') {
            if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word);
            }
            gotAWord(char);
            word = '';
        }
        else if (char === ':') {
            if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word);
            }
            gotAWord(char);
            word = '';
        }
        else if (char === '/') {

            if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word);
                word = '';
            }
            if (paraToBreak.slice(i + 1, i + 2) === "/") {

                if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                    gotAWord(word);
                    word = '';
                }
                for (; i <= paraToBreak.length; i++) {
                    let checkChar = paraToBreak.slice(i, i + 1)
                    if (checkChar === '\n') {
                        lineCount++;
                        break;
                    }
                }
            }
            else if (paraToBreak.slice(i, i + 2) === "/=") {
                gotAWord('/=');
                i = i + 1;
            }
            else {
                gotAWord(char);
            }
        }
        else if (char === '.') {
            console.log(paraToBreak.slice(i-1,i))
            console.log(paraToBreak.slice(i+1,i+2))
            debugger
            if (word !== '' && word.indexOf(char) > -1) {
                gotAWord(word);
                word = '';
                if (num.indexOf(paraToBreak.slice(i + 1, i + 2)) === -1 && punctuatorToCheck.indexOf(paraToBreak.slice(i + 1, i + 2)) === -1)
                    gotAWord(char)
                else {
                    word += char;

                }
            }
            else if(word !=='' && word.indexOf(char)===-1){
                let tempFlag = false
                for (let i = 0; i < word.length; i++) {
                    if (alphabet.indexOf(word[i]) > -1) {
                        tempFlag=false
                        break
                    }
                    tempFlag=true
                }
                if (tempFlag) {
                    if (num.indexOf(paraToBreak.slice(i + 1, i + 2)) === -1 && punctuatorToCheck.indexOf(paraToBreak.slice(i + 1, i + 2)) === -1)
                        gotAWord(char)
                    else
                        word += char;
                }
                else{
                    gotAWord(word)
                    word='';
                    if (num.indexOf(paraToBreak.slice(i + 1, i + 2)) === -1 && punctuatorToCheck.indexOf(paraToBreak.slice(i + 1, i + 2)) === -1)
                        gotAWord(char)
                    else
                        word += char;
                }
            }
            else if (num.indexOf(paraToBreak.slice(i - 1, i)) > -1 && num.indexOf(paraToBreak.slice(i + 1, i + 2)) > -1) {
                word += char;
            }
            else if (num.indexOf(paraToBreak.slice(i - 1, i)) === -1 && num.indexOf(paraToBreak.slice(i + 1, i + 2)) > -1) {
                gotAWord(word);
                word = '';
                word += char;
            }
            else if (paraToBreak.slice(i - 1, i) !== " " && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1 && i > 0) {
                gotAWord(word);
                gotAWord(char);
                word = '';
            }
            else {
                gotAWord(char)
                word = '';
            }
        }
        else if (char === '"') {
            // debugger;
            let indexOfQuote;
            let j;
            let toincrement = false;
            for (j = i + 1; j <= paraToBreak.length; j++) {
                let findQuote = paraToBreak.slice(j, j + 1)
                if (findQuote === '\\' && paraToBreak.slice(j + 1, j + 2) === '\\' && paraToBreak.slice(j + 2, j + 3) === '"') {
                    indexOfQuote = j + 2;
                    j = j + 2;
                    break;
                }
                else if (findQuote === '"' && paraToBreak.slice(j - 1, j) !== '\\') {
                    indexOfQuote = j;
                    break;
                }
                else if (findQuote === '\n') {
                    toincrement = true;
                    indexOfQuote = j;
                    break;
                }
            }
            gotAWord(paraToBreak.slice(i, indexOfQuote + 1))
            i = j;
            if (toincrement)
                lineCount++;
        }
        else if (char === "'") {
            // debugger;
            let indexOfQuote;
            let j;
            let toincrement = false;
            for (j = i + 1; j <= paraToBreak.length; j++) {
                let findQuote = paraToBreak.slice(j, j + 1)
                if (findQuote === '\\' && paraToBreak.slice(j + 1, j + 2) === '\\' && paraToBreak.slice(j + 2, j + 3) === "'") {
                    indexOfQuote = j + 2;
                    j = j + 2;
                    break;
                }
                else if (findQuote === "'" && paraToBreak.slice(j - 1, j) !== '\\') {
                    indexOfQuote = j;
                    break;
                }
                else if (findQuote === '\n') {
                    toincrement = true;
                    indexOfQuote = j;
                    break;
                }
            }
            gotAWord(paraToBreak.slice(i, indexOfQuote + 1))
            i = j;
            if (toincrement)
                lineCount++;
        }
        else if (i === paraToBreak.length && punctuatorToCheck.indexOf(paraToBreak.slice(i - 1, i)) === -1) {
            console.log('last Token ==> char', char)
            console.log('last Token ==> word', word)
            gotAWord(word);
            word = '';
            // console.log(tokenArray)
        }
        else {
            if (i === 0 || word === undefined) {
                word = char;
            }
            else {
                word += char;
            }
        }
        if (i === paraToBreak.length) {
            console.log('Last Token')
            printFlag = true;
            showArray()
        }
    }
}
const gotAWord = (word) => {
    // console.log(word,lineCount);
    result = cpReturn(word);

    if (result != 'space') {
        tokenAdd();
    }
}

// const checkForLine = (e) => {
//     if (e.keyCode == 13) {
//         input = document.getElementById('input').value;
//         let index = (input.length)-1;
//         lineNoAtIndex.push(index);
//         console.log(lineNoAtIndex);
//     }
// }


let tokenObj;
const tokenAdd = () => {

    // if (result !== 'invalid lexeme' && breakWord !== '') {
    if (result == breakWord) {
        tokenObj = {
            cp: result,
            vp: '',
            lineCount
        }
    }
    else {
        tokenObj = {
            cp: result,
            vp: breakWord,
            lineCount
        }
    }
    if (result != 'invalid lexeme' || breakWord != '')
        tokenArray.push(tokenObj)

}

const showArray = () => {
    let tokenObj = {
        cp: '$',
        vp: '',
    }
    tokenArray.push(tokenObj)
    // console.log(tokenArray)
    lexical.innerHTML = '';
    for (n = 0; n < tokenArray.length; n++) {
        lexical.innerHTML += `<div>${n+1}. ${JSON.stringify(tokenArray[n], null, 4)}</div>`;
    }
    // debugger
    let syntaxer = new SyntaxCheck();
    syntaxer.Start();
}


/////////////////////////////////////
////////// first char check /////////
/////////////////////////////////////

// let word = 'hello';
// let enteredWord = prompt('enter keyword');
let CP = '';
let result;
let breakWord;

function cpReturn(word) {
    // debugger     
    breakWord = word;
    let IL = 'invalid lexeme';
    // let switchCase = undefined;
    let temp;
    // console.log(word.slice(0,1))
    let firstChar = word.charAt(0);
    let charRegex = /[a-z]/i;
    let numRegex = /[0-9]|\+|\-/;
    let puncRegex = /\,|\;|\:|\{|\}|\[|\]|\(|\)/;
    let oprRegex = /\+|\-|\*|\/|\%|\^|\=|\!|\>|\<|\&|\||\~/;
    let UDRegex = /\$|\_/;
    let quotRegex = /\"|\'|\`/;


    // what is first char

    // document.writeln(firstChar);

    if (charRegex.test(firstChar)) {
        // switchCase = 'Alpha';
        if (isID(word)) {
            temp = isKW(word);
            // console.log(temp);
            if (temp == '')
                CP = 'ID';
            else
                CP = temp;
        }
        else
            CP = IL;
    }
    else if (numRegex.test(firstChar)) {
        // switchCase = 'Digit';
        temp = isOpr(word);
        if (isNum(word))
            CP = 'NUM';
        else if (temp != '')
            CP = temp;
        else
            CP = IL;
    }
    else if (puncRegex.test(firstChar)) {
        // switchCase = 'Punc';
        temp = isPunc(word);
        if (temp != '')
            CP = temp;
        else
            CP = IL;
    }
    else if (oprRegex.test(firstChar)) {
        // switchCase = 'Opr';
        temp = isOpr(word);
        if (temp != '')
            CP = temp;
        else
            CP = IL;
    }
    else if (UDRegex.test(firstChar)) {
        // switchCase = 'UnderDollar';
        if (isID(word))
            CP = 'ID';
        else
            CP = IL;
    }
    else if (quotRegex.test(firstChar)) {
        // switchCase = 'SQDQ';
        if (isStr(word)) {
            if (firstChar == '`')
                CP = 'TL';
            else
                CP = 'STRING';
            breakWord = breakWord.slice(1, (breakWord.length - 1));
        }
        else
            CP = IL;
    }
    else if (firstChar == '.') {
        // switchCase = 'Dot';
        if (word.length == 1)
            CP = '.';
        else if (isNum(word))
            CP = 'NUM';
        else
            CP = IL;
    }
    else if (firstChar != ' ')
        CP = IL;

    else {
        return 'space';
    }






    // switch (switchCase) {
    //     case 'Alpha':
    //         if (isID(word)) {
    //             temp = isKW(word);
    //             if (temp == '')
    //                 CP = 'ID';
    //             else
    //                 CP = temp;
    //         }
    //         else
    //             CP = IL;
    //         break;

    //     case 'UnderDollar':
    //         if (isID(word))
    //             CP = 'ID';
    //         else
    //             CP = IL;
    //         break;

    //     case 'Digit':
    //         if (isNum(word))
    //             CP = 'NUM';
    //         else
    //             CP = IL;
    //         break;

    //     case 'Dot':
    //         if (word.length == 1)
    //             CP = '.';
    //         else if (isNum(word))
    //             CP = 'NUM';
    //         else
    //             CP = IL;
    //         break;

    //     case 'SQDQ':
    //         if (isStr(word)) {
    //             if (firstChar == '`')
    //                 CP = 'TL';
    //             else
    //                 CP = 'Quot';
    //         }
    //         else
    //             CP = IL;
    //         break;

    //     case 'Punc':
    //         temp = isPunc(word);
    //         if (temp != '')
    //             CP = temp;
    //         else
    //             CP = IL;
    //         break;

    //     case 'Opr':
    //         temp = isOpr(word);
    //         if (temp != '')
    //             CP = temp;
    //         else
    //             CP = IL;
    //         break;

    //     default:
    //         CP = IL;

    // }
    return CP;
}









///////////////////////////////////////
////////// Checking Functions /////////
///////////////////////////////////////


function isKW(x) {
    if (x == 'd')
        return '';
    for (let i = 0; i <= KWArray.length - 1; i++) {
        if (x == KWArray[i].VP) {
            CP = KWArray[i].CP;
            return CP;
            // break;
        }
    }
    return '';
}

function isOpr(x) {
    for (let i = 0; i <= oprArray.length - 1; i++) {
        if (x == oprArray[i].VP) {
            CP = oprArray[i].CP;
            break;
        }
        else
            CP = '';
    }
    return CP;
}


function isPunc(x) {
    for (let i = 0; i <= puncArray.length - 2; i++) {
        if (x == puncArray[i].VP) {
            CP = x;
        }
    }
    return CP;
}

function isNum(x) {
    let numRegex = /^[-+]?([0-9]*\.[0-9]+|[0-9]+)$/;
    return numRegex.test(x);
}



function isID(x) {
    let idRegex = /^(\$|_|[a-z])(\$|_|[a-z]|[0-9])*$/i;
    return idRegex.test(x);
}


function isStr(x) {
    if (x.charAt(0) == x.charAt(x.length - 1)) {
        if (x.charAt(x.length - 2) == '\\' && x.charAt(x.length - 3) == '\\')
            return true;
        else if (x.charAt(x.length - 2) != '\\')
            return true;
        else if (x.charAt(x.length - 2) != '\\' && x.charAt(x.length - 3) != '\\')
            return true;
        else
            return false;
    }
    else
        return false;
}

/* ---- <SYNTAX ANALYZER> ----  */
class SyntaxCheck {

    constructor() {
        this.index = 0;
        this.table=[];
        this.classTable={};
        this.functionTable=[];
        this.insertValues = {};
        this.parameterCount = 0;
        this.currentClass = 'noclass';
        this.scopeCount = 0;
        this.currentScope=[];
        this.semantic = document.getElementById('test3');
    }

    Start = () => {
        // debugger
        let startFirstSet = ['DT', 'SWITCH', 'WHILE', 'IF', 'FUNCTION', 'FOR', 'DO', 'LG', 'AM', 'ID']
        if (tokenArray[this.index].cp !== '$') {
            // debugger
            if (this.Lstart()) {
                if (this.End()) {
                    this.Start()
                }
                else {
                    syntactical.innerHTML = `Invalid syntax at line no.${tokenArray[this.index].lineCount}`
                }
            }
            else {
                syntactical.innerHTML = `Invalid syntax at line no.${tokenArray[this.index].lineCount}`
            }
        }
        else {
            syntactical.innerHTML = 'Valid Syntax'
        }
    }

    Lstart = () => {
        const lStartFirstSet = ['DT', 'SWITCH', 'WHILE', 'IF', 'FUNCTION', 'FOR', 'DO', 'LG', 'AM', 'ID','THIS'];
        // debugger
        if (lStartFirstSet.indexOf(tokenArray[this.index].cp) !== -1) {
            if (this.Dec()) {
                return true
            }
            else if(this.This_Ass()){
                return true
            }
            else if (this.Switch_St()) {
                return true
            }
            else if (this.While_St()) {
                return true
            }
            else if (this.If_Else()) {
                return true
            }
            else if (this.Fn_Def()) {
                return true
            }
            else if (this.For_St()) {
                return true
            }
            else if (this.Do_While()) {
                return true
            }
            else if (this.Lg_St()) {
                return true
            }
            else if (this.Calling()) {
                if (this.New()) {
                    return true
                }
            }
            else if (this.Class_St()) {
                return true
            }
        }
        return false
    }

    End = () => {
        if (tokenArray[this.index].cp === ';') {
            console.log('got ; in ===> End')
            this.index++
            if (this.End()) {
                return true
            }
        }
        else if (tokenArray[this.index].cp === '$') {
            console.log(this.table)
            // this.lookupCT()
            console.log(this.classTable)
            console.log(this.functionTable)
            
            return true
        }
        return true
    }

    Dec = () => {
        debugger
        if (tokenArray[this.index].cp === 'DT') {
            console.log('got DT in ===> DEC')
            this.index++;
            if (tokenArray[this.index].cp === 'ID') {
                console.log('got ID in ===> DEC')
                this.insertValues.name = tokenArray[this.index].vp
                this.index++;
                if (this.List()) {
                    let scopeToInsert = this.currentScope.length === 0 ? 0 : this.currentScope[this.currentScope.length - 1]
                    if (!this.insertInFunctionTable(this.insertValues.name, this.insertValues.type, scopeToInsert)){
                        this.semantic.innerHTML += `<div>Error at line no.${tokenArray[this.index-1].lineCount} \nvariable ${this.insertValues.name} already decleared</div>`
                    }
                    return true
                }
            }
        }
        return false
    }
    
    List = () => {
        //  debugger
        let listFirstSet = [',', '=', ';'];
        if (listFirstSet.indexOf(tokenArray[this.index].cp) !== -1) {
            if (tokenArray[this.index].cp === ',') {
                console.log('got , in ===> List')
                this.index++;
                if (tokenArray[this.index].cp === 'ID') {
                    console.log('got ID in ===> List')
                    this.index++
                    if (this.List()) {
                        return true
                    }
                }
            }
            else if (tokenArray[this.index].cp === '=') {
                console.log('got = in ===> List')
                this.index++
                if (this.New1()) {
                    return true
                }

            }
            else {
                console.log('got ; in ===> List')
                this.index++
                return true
            }
        }
        return true
    }

    New1 = () => {
        if (this.Value1()) {
            if (this.List()) {
                return true
            }
        }
        else if(tokenArray[this.index].cp==='NEW'){
            console.log('got new in ===> New1')
            this.index++
            if(this.Fn_Call()){
                return true
            }
        }
        return false
    }

    New2 = () => {
        let new2FirstSet = [',', ';']
        if (new2FirstSet.indexOf(tokenArray[this.index].cp) !== -1) {
            if (tokenArray[this.index].cp === ',') {
                console.log('got , in ===> New2')
                this.index++
                if (tokenArray[this.index].cp === 'ID') {
                    console.log('got ID in ===> New2')
                    this.index++
                    if (this.List()) {
                        return true
                    }
                }
                return false
            }
            else if (tokenArray[this.index].cp === ';') {
                console.log('got ; in ===> New2')
                this.index++
                return true
            }
        }
        return true
    }

    Const = () => {
        //  debugger
        const constFirstSet = ['NUM', 'STRING', 'BOOL', 'TL', '[', '{']
        if (constFirstSet.indexOf(tokenArray[this.index].cp) !== -1) {

            if (tokenArray[this.index].cp === 'NUM') {
                console.log('got NUM in ===> Const')
                this.insertValues.type ? this.insertValues.type1 = tokenArray[this.index].cp : this.insertValues.type = tokenArray[this.index].cp
                this.index++
                return true
            }
            else if (tokenArray[this.index].cp === 'STRING') {
                console.log('got STRING in ===> Const')
                this.insertValues.type ? this.insertValues.type1 = tokenArray[this.index].cp : this.insertValues.type = tokenArray[this.index].cp
                this.index++
                return true
            }
            else if (tokenArray[this.index].cp === 'BOOL') {
                console.log('got BOOL in ===> Const')
                this.insertValues.type ? this.insertValues.type1 = tokenArray[this.index].cp : this.insertValues.type = tokenArray[this.index].cp
                this.index++
                return true
            }
            else if (tokenArray[this.index].cp === 'TL') {
                console.log('got TL in ===> Const')
                this.insertValues.type ? this.insertValues.type1 = tokenArray[this.index].cp : this.insertValues.type = tokenArray[this.index].cp
                this.index++
                return true
            }
            else if (this.Arrays()) {
                return true
            }
            else if (this.Obj()) {
                return true
            }
        }
        return false
    }

    Switch_St = () => {
        if (tokenArray[this.index].cp === 'SWITCH') {
            console.log('got SWITCH in ===> Switch_St')
            this.index++;
            if (tokenArray[this.index].cp === '(') {
                console.log('got ( in ===> Switch_St')
                this.index++;
                if (this.Exp()) {
                    if (tokenArray[this.index].cp === ')') {
                        console.log('got ) in ===> Switch_St')
                        this.index++;
                        if (tokenArray[this.index].cp === '{') {
                            console.log('got { in ===> Switch_St')
                            this.scopeCount++
                            this.currentScope.push(this.scopeCount)
                            this.index++;
                            if (this.New_C()) {
                                if (tokenArray[this.index].cp === '}') {
                                    console.log('got } in ===> Switch_St')
                                    this.currentScope.pop()
                                    this.index++;
                                    if (this.End()) {
                                        return true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return false
    }

    Case_St = () => {
        if (tokenArray[this.index].cp === 'CASE') {
            console.log('got CASE in ===> Case_St')
            this.index++
            if (this.Id_Const()) {
                if (tokenArray[this.index].cp === ':') {
                    console.log('got : in ===> Case_St')
                    this.index++;
                    if (this.Mst()) {
                        if (this.New_C()) {
                            return true
                        }
                    }
                }
            }
        }
        return true
    }

    Id_Const = () => {
        if (tokenArray[this.index].cp === 'ID') {
            console.log('got ID in ===> Id_Const')
            this.index++;
            return true
        }
        else if (this.Const()) {
            return true
        }
        return false
    }

    New_C = () => {
        const newCFirstSet = ['CASE', 'DEFAULT'];
        if (newCFirstSet.indexOf(tokenArray[this.index].cp) !== -1) {
            if (this.Case_St()) {
                return true
            }
            else if (this.Default_St()) {
                return true
            }
        }
        return false
    }

    Default_St = () => {
        if (tokenArray[this.index].cp === 'DEFAULT') {
            console.log('got default in ===> Default_St')
            this.index++
            if (tokenArray[this.index].cp === ':') {
                console.log('got : in ===> Default_St')
                this.index++
                if (this.Mst()) {
                    return true
                }
            }
        }
        return false
    }

    Mst = () => {
        const mstFirstSet = ['DT', 'SWITCH', 'WHILE', 'IF', 'FUNCTION', 'FOR', 'BREAK', 'CONTINUE', 'DO', 'LG', 'ID'];
        if (mstFirstSet.indexOf(tokenArray[this.index].cp) !== -1) {
            if (this.Sst()) {
                // debugger
                if (this.Mst()) {
                    return true
                }
            }
        }
        return true
    }

    Sst = () => {
        const sstFirstSet = ['DT', 'SWITCH', 'WHILE', 'IF', 'FUNCTION', 'FOR', 'BREAK', 'CONTINUE', 'DO', 'LG', 'ID','THIS'];
        if (sstFirstSet.indexOf(tokenArray[this.index].cp) !== -1) {
            if (this.Dec()) {
                return true
            }
            else if(this.This_Ass()){
                return true
            }
            else if (this.Switch_St()) {
                return true
            }
            else if (this.While_St()) {
                return true
            }
            else if (this.If_Else()) {
                return true
            }
            else if (this.Fn_Def()) {
                return true
            }
            else if (this.For_St()) {
                return true
            }
            else if (this.Break_St()) {
                return true
            }
            else if (this.Continue_St()) {
                return true
            }
            else if (this.Do_While()) {
                return true
            }
            else if (this.Lg_St()) {
                return true
            }
            else if (this.Calling()) {
                if (this.New()) {
                    return true
                }
            }
        }
        return false
    }

    Break_St = () => {
        if (tokenArray[this.index].cp === 'BREAK') {
            console.log('got Break in ===> Break_St')
            this.index++
            if (this.End()) {
                return true
            }
        }
        return false
    }

    Continue_St = () => {
        if (tokenArray[this.index].cp === 'CONTINUE') {
            console.log('got Continue in ===> Continue_St')
            this.index++
            if (this.End()) {
                return true
            }
        }
        return false
    }

    While_St = () => {
        if (tokenArray[this.index].cp === 'WHILE') {
            console.log('got While in ===> While_St')
            this.index++
            if (tokenArray[this.index].cp === '(') {
                console.log('got ( in ===> While_St')
                this.index++
                if (this.Exp()) {

                    if (tokenArray[this.index].cp === ')') {
                        console.log('got ) in ===> While_St')
                        this.index++
                        if (this.Body()) {
                            return true
                        }
                    }
                }
            }
        }
        return false
    }

    Exp = () => {
        const expFirstSet = ['STRING', 'BOOL', 'NUM', 'TL', 'Unr', '(', 'ID'];
        if (expFirstSet.indexOf(tokenArray[this.index].cp) !== -1) {
            if (this.Ao()) {
                if (this.Exp1()) {
                    return true
                }
            }
        }
        return false
    }

    Ao = () => {
        const aoFirstSet = ['STRING', 'BOOL', 'NUM', 'TL', 'Unr', '(', 'ID'];
        if (aoFirstSet.indexOf(tokenArray[this.index].cp) !== -1) {
            if (this.Ro()) {
                if (this.Ao1()) {
                    return true
                }
            }
        }
        return false
    }

    Ao1 = () => {
        if (tokenArray[this.index].cp === '&&') {
            console.log('got && in ===> Ao1')
            this.forExpCheck()
            this.insertValues.oprator = tokenArray[this.index].cp
            this.forExpCheck()
            this.index++
            if (this.Ro()) {
                if (this.Ao1()) {
                    return true
                }
            }
        }
        return true
    }

    Ro = () => {
        const roFirstSet = ['STRING', 'BOOL', 'NUM', 'TL', 'Unr', '(', 'ID'];
        if (roFirstSet.indexOf(tokenArray[this.index].cp) !== -1) {
            if (this.Pmo()) {
                if (this.Ro1()) {
                    return true
                }
            }
        }
        return false
    }

    Ro1 = () => {
        if (tokenArray[this.index].cp === 'REL') {
            console.log('got REL in ===> Ro1')
            this.forExpCheck()
            this.insertValues.oprator = tokenArray[this.index].vp
            this.forExpCheck()
            this.index++
            if (this.Pmo()) {
                if (this.Ro1()) {
                    return true
                }
            }
        }
        return true
    }

    Pmo = () => {
        const pmoFirstSet = ['STRING', 'BOOL', 'NUM', 'TL', 'Unr', '(', 'ID'];
        if (pmoFirstSet.indexOf(tokenArray[this.index].cp) !== -1) {
            if (this.Mdmo()) {
                if (this.Pmo1()) {
                    return true
                }
            }
        }
        return false
    }

    Pmo1 = () => {
        if (tokenArray[this.index].cp === 'PM') {
            console.log('got PM in ===> Pmo1')
            this.forExpCheck()
            this.insertValues.oprator = tokenArray[this.index].vp
            this.forExpCheck()
            this.index++
            if (this.Mdmo()) {
                if (this.Pmo1()) {
                    return true
                }
            }
        }
        return true
    }

    Mdmo = () => {
        const mdmoFirstSet = ['STRING', 'BOOL', 'NUM', 'TL', 'Unr', '(', 'ID'];
        if (mdmoFirstSet.indexOf(tokenArray[this.index].cp) !== -1) {
            if (this.No()) {
                if (this.Mdmo1()) {
                    return true
                }
            }
        }
        return false
    }

    Mdmo1 = () => {
        if (tokenArray[this.index].cp === 'MDM') {
            console.log('got MDM in ===> Mdmo1')
            this.forExpCheck()
            this.insertValues.oprator = tokenArray[this.index].vp
            this.forExpCheck()
            this.index++
            if (this.No()) {
                if (this.Mdmo1()) {
                    return true
                }
            }
        }
        return true
    }

    No = () => {
        const noFirstSet = ['STRING', 'BOOL', 'NUM', 'TL', 'Unr', '(', 'ID'];
        if (noFirstSet.indexOf(tokenArray[this.index].cp) !== -1) {
            if (this.Const()) {
                return true
            }
            else if (tokenArray[this.index].cp === 'Unr') {
                console.log('got Unr in ===> No')
                this.forExpCheck()
                this.insertValues.oprator = tokenArray[this.index].vp
                this.forExpCheck()
                this.index++
                if (this.No()) {
                    return true
                }
            }
            else if (tokenArray[this.index].cp === '(') {
                console.log('got ( in ===> No')
                this.index++
                if (this.Exp()) {
                    if (tokenArray[this.index].cp === ')') {
                        console.log('got ) in ===> No')
                        this.index++
                        return true
                    }
                }
            }
            else if (this.Calling()) {
                return true
            }
        }
        return false
    }

    Exp1 = () => {
        if (tokenArray[this.index].cp === '||') {
            console.log('got || in ===> Exp1')
            this.forExpCheck()
            this.insertValues.oprator = tokenArray[this.index].cp
            this.forExpCheck()
            this.index++
            if (this.Ao()) {
                if (this.Exp1()) {
                    return true
                }
            }
        }
        return true
    }

    Body = () => {
        const bodyFirstSet = [';', '{', 'DT', 'SWITCH', 'WHILE', 'IF', 'FUNCTION', 'FOR', 'BREAK', 'CONTINUE', 'DO', 'LG', 'ID'];
        if (bodyFirstSet.indexOf(tokenArray[this.index].cp) !== -1) {
            if (tokenArray[this.index].cp === ';') {
                console.log('got ; in ===> Body')
                this.index++
                return true
            }
            else if (this.Sst()) {
                return true
            }
            else if (tokenArray[this.index].cp === '{') {
                console.log('got { in ===> Body')
                this.scopeCount++
                this.currentScope.push(this.scopeCount)
                this.index++
                if (this.Mst()) {
                    if (tokenArray[this.index].cp === '}') {
                        console.log('got } in ===> Body')
                        this.currentScope.pop()
                        this.index++
                        return true
                    }
                }
            }
        }
        return false
    }

    If_Else = () => {
        if (tokenArray[this.index].cp === 'IF') {
            console.log('got If in ===> If_Else')
            this.index++
            if (tokenArray[this.index].cp === '(') {
                console.log('got ( in ===> If_Else')
                this.index++
                if (this.Exp()) {
                    if(this.comptibilityBinary()){
                        console.log('sahi ha ke nhi?')
                    }
                    if (tokenArray[this.index].cp === ')') {
                        console.log('got ) in ===> If_Else')
                        this.index++
                        if (this.Body()) {
                            if (this.Opt_Else()) {
                                return true
                            }
                        }
                    }
                }
            }
        }
        return false
    }

    Opt_Else = () => {
        if (tokenArray[this.index].cp === 'ELSE') {
            console.log('got Else in ===> Opt_Else')
            this.index++
            if (this.Body()) {
                return true
            }
        }
        return true
    }

    Fn_Def = () => {
        if (tokenArray[this.index].cp === 'FUNCTION') {
            console.log('got function in ===> Fn_Def')
            this.index++
            if(tokenArray[this.index].cp==='DT'){
                console.log('got DT in ===> Fn_Def')
                this.insertValues.type=tokenArray[this.index].vp
                this.index++
                if (tokenArray[this.index].cp === 'ID') {
                    console.log('got ID in ===> Fn_Def')
                    this.insertValues.name = tokenArray[this.index].vp
                    this.index++
                    if (tokenArray[this.index].cp === '(') {
                        console.log('got ( in ===> Fn_Def')
                        this.index++
                        if (this.Pl_Def()) {
                            this.insertValues.parameterCount = this.parameterCount
                            this.insertInClassTable()
                            this.parameterCount = 0;
                            console.log(this.classTable)
                            if (tokenArray[this.index].cp === ')') {
                                console.log('got ) in ===> Fn_Def')
                                this.index++
                                if (this.Fn_Body()) {
                                    return true
                                }
                            }
                        }
                    }
                }
            }
        }
        return false
    }

    Fn_Body = () => {
        if (tokenArray[this.index].cp === '{') {
            console.log('got { in ===> Fn_Body')
            this.scopeCount++
            this.currentScope.push(this.scopeCount)            
            this.index++
            if (this.Fn_Mst()) {
                if (tokenArray[this.index].cp === '}') {
                    console.log('got } in ===> Fn_Body')
                    this.currentScope.pop()
                    this.index++
                    if (this.End()) {
                        return true
                    }
                }
            }
        }
        return false
    }

    Fn_Mst = () => {
        if (this.Fn_Sst()) {
            if (this.Fn_Mst()) {
                return true
            }
        }
        return true
    }

    Fn_Sst = () => {
        if (this.Sst()) {
            return true
        }
        else if (this.Return_St()) {
            return true
        }
        return false
    }

    Return_St = () => {
        if (tokenArray[this.index].cp === 'RETURN') {
            console.log('got Return in ===> Return_St')
            this.index++
            if (this.Exp()) {
                if (this.End()) {
                    return true
                }
            }
        }
        return false
    }

    Fn_Call = () => {
        if (tokenArray[this.index].cp === 'ID') {
            console.log('got ID in ===> Fn_Call')
            if(tokenArray[this.index-1].cp==='NEW'){
                if(this.lookup(tokenArray[this.index].vp).length!==0)
                this.insertValues.type = tokenArray[this.index].vp
                else
                    this.semantic.innerHTML += `<div>class ${tokenArray[this.index].vp} is not decleared!</div>`
            }
            else
            this.insertValues.name = tokenArray[this.index].vp
            this.index++
            if (tokenArray[this.index].cp === '(') {
                console.log('got ( in ===> Fn_Call')
                this.index++
                if (this.Pl()) {
                    this.insertValues.parameterCount = this.parameterCount
                    if (tokenArray[this.index].cp === ')') {
                        console.log('got ) in ===> Fn_Call')
                        this.index++
                        if (this.End()) {
                            return true
                        }
                    }
                }
            }
        }
        return false
    }

    For_St = () => {
        if (tokenArray[this.index].cp === 'FOR') {
            console.log('got For in ===> For_St')
            this.index++
            if (tokenArray[this.index].cp === '(') {
                console.log('got ( in ===> For_St')
                this.index++
                if (this.C1()) {
                    if (this.C2()) {
                        if (this.C3()) {
                            if (tokenArray[this.index].cp === ')') {
                                console.log('got ) in ===> For_St')
                                this.index++
                                if (this.Body()) {
                                    return true
                                }
                            }
                        }
                    }
                }
            }
        }
        return false
    }

    C1 = () => {
        const c1FirstSet = ['DT', 'ID', ';'];
        if (c1FirstSet.indexOf(tokenArray[this.index].cp) !== -1) {
            if (this.Assignment()) {
                return true
            }
            else if (this.Dec()) {
                return true
            }
            else if (tokenArray[this.index].cp === ';') {
                console.log('got ; in ===> C1')
                this.index++
                return true
            }
        }
        return false
    }

    Assignment = () => {
        if (this.Assign()) {
            if (tokenArray[this.index].cp === ';') {
                console.log('got ; in ===> Assignment')
                this.index++
                return true
            }
        }
        return false
    }

    Assign = () => {
        if (this.Calling()) {
            if (this.Assign_Opr()) {
                if (this.Value1()) {
                    return true
                }
            }
        }
        return false
    }

    Value1 = () => {
        const value1FirstSet = ['STRING', 'BOOL', 'NUM', 'TL', '!', '(', 'ID', '[', '{'];
        if (value1FirstSet.indexOf(tokenArray[this.index].cp) !== -1) {
            if (this.Exp()) {
                return true
            }
            else if (this.Obj()) {
                return true
            }
            else if (this.Arrays()) {
                return true
            }
        }
        return false
    }

    Obj = () => {
        if (tokenArray[this.index].cp === '{') {
            console.log('got { in ===> Obj')
            this.insertValues.type ? this.insertValues.type1 = 'OBJECT' : this.insertValues.type = 'OBJECT'
            this.index++
            if (this.Obj_Body()) {
                if (tokenArray[this.index].cp === '}') {
                    console.log('got } in ===> Obj')
                    this.index++
                    if (this.End()) {
                        return true
                    }
                }
            }
        }
        return false
    }

    Obj_Body = () => {
        if (tokenArray[this.index].cp === 'ID') {
            console.log('got ID in ===> Obj_Body')
            this.index++
            if (tokenArray[this.index].cp === ':') {
                console.log('got : in ===> Obj_Body')
                this.index++
                if (this.Value()) {
                    if (this.Second()) {
                        return true
                    }
                }
            }
        }
        return true
    }

    Value = () => {
        const valueFirstSet = ['STRING', 'BOOL', 'NUM', 'TL', '!', '(', 'ID', 'FUNCTION', '{', '['];
        if (valueFirstSet.indexOf(tokenArray[this.index].cp) !== -1) {
            if (this.Fn_Def_Wi()) {
                return true
            }
            else if (this.Exp()) {
                return true
            }
            else if (this.Obj()) {
                return true
            }
            else if (this.Arrays()) {
                return true
            }
        }
        return false
    }

    Fn_Def_Wi = () => {
        if (tokenArray[this.index].cp === 'FUNCTION') {
            console.log('got Function in ===> Fn_Def_Wi')
            this.index++
            if (tokenArray[this.index].cp === '(') {
                console.log('got ( in ===> Fn_Def_Wi')
                this.index++
                if (this.Pl()) {
                    if (tokenArray[this.index].cp === ')') {
                        console.log('got ) in ===> Fn_Def_Wi')
                        this.index++
                        if (this.Fn_Body()) {
                            return true
                        }
                    }
                }
            }
        }
        return false
    }

    Second = () => {
        if (tokenArray[this.index].cp === ',') {
            console.log('got , in ===> Second')
            this.index++
            if (tokenArray[this.index].cp === 'ID') {
                console.log('got ID in ===> Second')
                this.index++
                if (tokenArray[this.index].cp === ':') {
                    console.log('got : in ===> Second')
                    this.index++
                    if (this.Value()) {
                        if (this.Second()) {
                            return true
                        }
                    }
                }
            }
        }
        return true
    }

    Arrays = () => {
        if (tokenArray[this.index].cp === '[') {
            console.log('got [ in ===> Arrays')
            this.insertValues.type ? this.insertValues.type1 = 'Array' : this.insertValues.type = 'ARRAY'
            this.index++
            if (this.Elements()) {
                if (tokenArray[this.index].cp === ']') {
                    console.log('got ] in ===> Arrays')
                    this.index++
                    return true
                }
            }
        }
        return false
    }

    Elements = () => {
        const elementsFirstSet = ['[', '{', 'TL', 'STRING', 'NUM', 'BOOL', '!', '(', 'ID', ','];
        if (elementsFirstSet.indexOf(tokenArray[this.index].cp) !== -1) {
            if (this.Val()) {
                if (this.Ele()) {
                    return true
                }
            }
        }
        return true
    }

    Val = () => {

        const valFirstSet = ['[', '{', 'TL', 'STRING', 'NUM', 'BOOL', '!', '(', 'ID'];
        if (valFirstSet.indexOf(tokenArray[this.index].cp) !== -1) {
            if (this.Arrays()) {
                return true
            }
            else if (this.Array_Const()) {
                return true
            }
            else if (this.Obj()) {
                return true
            }
        }
        return false
    }

    Array_Const = () => {
        if (this.Exp()) {
            return true
        }
        return true
    }

    Ele = () => {
        if (tokenArray[this.index].cp === ',') {
            console.log('got , in ===> Ele')
            this.index++
            if (this.Elements()) {
                return true
            }
        }
        return true
    }

    C2 = () => {
        if (this.Exp()) {
            if (tokenArray[this.index].cp === ';') {
                console.log('got ; in ===> C2')
                this.index++
                return true
            }
        }
        else if (tokenArray[this.index].cp === ';') {
            console.log('got ; in ===> C2')
            this.index++
            return true
        }
        return false
    }

    C3 = () => {
        const c3FirstSet = ['ID', 'InDc']
        if (c3FirstSet.indexOf(tokenArray[this.index].cp) !== -1) {
            if (this.Indc_St()) {
                return true
            }
        }
        return true
    }

    Indc_St = () => {
        const indc_StFirstSet = ['ID', 'InDc']
        if (indc_StFirstSet.indexOf(tokenArray[this.index].cp) !== -1) {
            if (tokenArray[this.index].cp === 'ID') {
                console.log('got ID in ===> Indc_St')
                this.index++
                if (tokenArray[this.index].cp === 'InDc') {
                    console.log('got InDc in ===> Indc_St')
                    this.index++
                    if (this.End()) {
                        return true
                    }
                }
            }
            else if (tokenArray[this.index].cp === 'InDc') {
                console.log('got InDc in ===> Indc_St')
                this.index++
                if (tokenArray[this.index].cp === 'ID') {
                    console.log('got ID in ===> Indc_St')
                    this.index++
                    if (this.End()) {
                        return true
                    }
                }
            }
        }
        return false
    }

    Do_While = () => {
        if (tokenArray[this.index].cp === 'DO') {
            console.log('got Do in ===> Do_While')
            this.index++
            if (this.Body_Wt()) {
                if (tokenArray[this.index].cp === 'WHILE') {
                    console.log('got While in ===> Do_While')
                    this.index++
                    if (tokenArray[this.index].cp === '(') {
                        console.log('got ( in ===> Do_While')
                        this.index++
                        if (this.Exp()) {
                            if (tokenArray[this.index].cp === ')') {
                                console.log('got ) in ===> Do_While')
                                this.index++
                                if (this.End()) {
                                    return true
                                }
                            }
                        }
                    }
                }
            }
        }
        return false
    }

    Body_Wt = () => {
        // debugger
        if (this.Sst()) {
            return true
        }
        else if (tokenArray[this.index].cp === '{') {
            console.log('got { in ===> Body_Wt')
            this.scopeCount++
            this.currentScope.push(this.scopeCount)            
            this.index++
            if (this.Mst()) {
                if (tokenArray[this.index].cp === '}') {
                    console.log('got } in ===> Body_Wt')
                    this.currentScope.pop()
                    this.index++
                    return true
                }
            }
        }
        return false
    }

    Lg_St = () => {
        if (tokenArray[this.index].cp === 'LG') {
            console.log('got LG in ===> Lg_St')
            this.index++
            if (tokenArray[this.index].cp === 'ID') {
                console.log('got ID in ===> Lg_St')
                this.index++
                if (this.End()) {
                    return true
                }
            }
        }
        return false
    }

    Calling = () => {
            if (tokenArray[this.index].cp === 'ID') {
                console.log('got ID in ===> Calling')
                this.checkVaribleForClass(tokenArray[this.index].vp)
                this.index++
                if (this.Id1()) {
                    return true
                }
        }

        return false
    }

    Id1 = () => {
        // debugger
        const id1FirstSet = ['InDc', '(', '[', '.'];
        if (id1FirstSet.indexOf(tokenArray[this.index].cp) !== -1) {
            if (tokenArray[this.index].cp === 'InDc') {
                console.log('got InDc in ===> Id1')
                this.index++
                if (this.End()) {
                    return true
                }
            }
            else if (tokenArray[this.index].cp === '(') {
                console.log('got ( in ===> Id1')
                this.index++
                if (this.Pl()) {
                    if (tokenArray[this.index].cp === ')') {
                        console.log('got ) in ===> Id1')
                        this.index++
                        if (this.Choice()) {
                            return true
                        }
                    }
                }
            }
            else if (tokenArray[this.index].cp === '[') {
                console.log('got [ in ===> Id1')
                this.index++
                if (this.Icn()) {
                    if (this.Choice1()) {
                        if (this.Choice()) {
                            return true
                        }
                    }
                }
            }
            else if (tokenArray[this.index].cp === '.') {
                console.log('got . in ===> Id1')
                this.index++
                if (this.Calling()) {
                    return true
                }
            }
        }
        return true
    }

    Pl = () => {
        if (this.Exp()) {
            this.parameterCount++
            if (this.Pl_New()) {
                return true
            }
        }
        return true
    }

    Pl_Def = () => {
        if (tokenArray[this.index].cp === 'ID') {
            console.log('got Id in ===> Pl_Def')
            this.index++
            this.parameterCount++
            if (this.Pl_Def_New()) {
                return true
            }
        }
        return true
    }
    
    Pl_Def_New = () => {
        if (tokenArray[this.index].cp === ',') {
            console.log('got , in ===> Pl_Def_New')
            this.index++
            if (this.Pl_Def()) {
                return true
            }
        }
        return true
    }

    Pl_New = () => {
        if (tokenArray[this.index].cp === ',') {
            console.log('got , in ===> Pl_New')
            this.index++
            if (this.Pl()) {
                return true
            }
        }
        return true
    }

    Icn = () => {
        const icnFirstSet = ['ID', 'InDc'];
        if (icnFirstSet.indexOf(tokenArray[this.index].cp) !== -1) {
            if(this.Exp()){
                return true
            }
            else if (tokenArray[this.index].cp ==='InDc'){
                console.log('got InDc in ===> Icn')
                this.index++
                if (tokenArray[this.index].cp ==='ID'){
                    console.log('got ID in ===> Icn')
                    this.index++
                    return true
                }
            }
        }
        return true
    }

    Choice = () => {
        if (tokenArray[this.index].cp === '.') {
            console.log('got . in ===> Choice')
            this.index++
            if (this.Calling()) {
                return true
            }
        }
        return true
    }

    Choice1 = () => {
        if (tokenArray[this.index].cp === ']') {
            console.log('got ] in ===> Choice1')
            this.index++
            if (this.Choice2()) {
                if (this.Choice3()) {
                    return true
                }
            }
        }
        return false
    }

    Choice2 = () => {
        if (tokenArray[this.index].cp === '[') {
            console.log('got [ in ===> Choice2')
            this.index++
            if (this.Icn()) {
                if (this.Choice1()) {
                    if (this.Choice()) {
                        return true
                    }
                }
            }
        }
        return true
    }

    Choice3 = () => {
        if (tokenArray[this.index].cp === 'InDc') {
            console.log('got InDc in ===> Choice3')
            this.index++
        }
        return true
    }

    New = () => {
        if (this.Assign_Wi()) {
            return true
        }
        return true
    }

    Assign_Wi = () => {
        if (this.Assign_Opr()) {
            if (this.Exp()) {
                if(this.End()){
                    return true
                }
            }
        }
        return false
    }

    Assign_Opr = () => {
        const assign_OprFirstSet = ['=', 'ASSIGN'];
        if (assign_OprFirstSet.indexOf(tokenArray[this.index].cp) !== -1) {
            if(tokenArray[this.index-1].cp!==')'){
            if (tokenArray[this.index].cp === '=') {
                console.log('got = in ===> Assign_Opr')
                this.index++;
                return true
            }
            }

            else if (tokenArray[this.index].cp === 'ASSIGN') {
                console.log('got ASSIGN in ===> Assign_Opr')
                this.index++
                return true
            }
        }
        return false
    }

    Class_St = () => {
        if (tokenArray[this.index].cp === 'AM') {
            console.log('got AM in ===> Class_St')
            this.insertValues.category = tokenArray[this.index].vp
            this.index++
            if (tokenArray[this.index].cp === 'CLASS') {
                console.log('got Class in ===> Class_St')
                this.index++
                if (tokenArray[this.index].cp === 'ID') {
                    console.log('got ID in ===> Class_St')
                    this.insertValues.name = tokenArray[this.index].vp
                    this.index++
                    if (this.Opt_Ext()) {
                        if(!this.insert()){
                            this.semantic.innerHTML += `<div>class ${this.insertValues.name} already decleared!</div>`
                        }
                        if (tokenArray[this.index].cp === '{') {
                            console.log('got { in ===> Class_St')
                            this.scopeCount++
                            this.currentScope.push(this.scopeCount)                            
                            this.index++
                            if (this.Cl_Mst()) {
                                if (tokenArray[this.index].cp === '}') {
                                    console.log('got } in ===> Class_St')
                                    this.currentScope.pop()
                                    this.currentClass='noclass'
                                    this.index++
                                    return true
                                }
                            }
                        }
                    }
                }
            }
        }
        return false
    }

    Opt_Ext = () => {
        if (tokenArray[this.index].cp === 'EXTENDS') {
            console.log('got Extends in ===> Opt_Ext')
            this.index++
            if (tokenArray[this.index].cp === 'ID') {
                console.log('got ID in ===> Opt_Ext')
                this.insertValues.parent = tokenArray[this.index].vp
                this.index++
                return true
            }
        }
        return true
    }

    Cl_Mst = () => {
        const cl_MstFirstSet = ['STATIC', 'FUNCTION', 'CONSTRUCTOR']
        if (cl_MstFirstSet.indexOf(tokenArray[this.index].cp) !== -1) {
            if (this.Cl_Sst()) {
                if (this.Cl_Mst()) {
                    return true
                }
            }
        }
        return true
    }

    Cl_Sst = () => {
        if (this.Fn_Def_C()) {
            return true
        }
        else if (this.Const_St()) {
            return true
        }
        return false
    }

    Fn_Def_C = () => {
        if (this.Fn_Def()) {
            return true
        }
        else if (tokenArray[this.index].cp === 'STATIC') {
            console.log('got static in ===> Fn_Def_C')
            this.insertValues.typeModifier = 'STATIC';
            this.index++
            if (this.Fn_Def()) {
                return true
            }
        }
        return false
    }

    Const_St = () => {
        if (tokenArray[this.index].cp === 'CONSTRUCTOR') {
            console.log('got Constructor in ===> Const_St')
            this.index++
            if (tokenArray[this.index].cp === '(') {
                console.log('got ( in ===> Const_St')
                this.index++
                if (this.Pl()) {
                    if (tokenArray[this.index].cp === ')') {
                        console.log('got ) in ===> Const_St')
                        this.index++
                        if (this.Body()) {
                            return true
                        }
                    }
                }
            }
        }
        return false
    }

    This_Ass = () => {
            if (tokenArray[this.index].cp === 'THIS') {
                console.log('got THIS in ===> This_Ass')
                this.index++
                if (tokenArray[this.index].cp === '.') {
                    console.log('got . in ===> This_Ass')
                    this.index++
                    if (tokenArray[this.index].cp === 'ID') {
                        console.log('got ID in ===> This_ass')
                        this.index++
                        if (tokenArray[this.index].cp === '=') {
                            console.log('got = in ===> This_ass')
                            this.index++
                            if(this.Id_Const()){
                                if (this.End()) {
                                    return true
                                }
                            }
                        }
                        
                    }
                }
        }
        return false
    }

    Opt_This = () => {
        if (tokenArray[this.index].cp === 'THIS') {
            console.log('got this in ===> Opt_This')
            this.index++
            if (tokenArray[this.index].cp === '.') {
                console.log('got . in ===> Opt_This')
                this.index++
                return true
            }
        }
        return true
    }

    Enum_St = () => {
        if (tokenArray[this.index].cp === 'ENUM') {
            console.log('got Enum in ===> Enum_St')
            this.index++
            if (tokenAdd[this.index].cp === 'ID') {
                console.log('got ID in ===> Enum_St')
                this.index++
                if (tokenArray[this.index].cp === '=') {
                    console.log('got = in ===> Enum_St')
                    this.index++
                    if (tokenArray[this.index].cp === '{') {
                        console.log('got { in ===> Enum_St')
                        this.index++
                        if (this.Id_List()) {
                            if (tokenArray[this.index].cp === '}') {
                                console.log('got } in ===> Enum_St')
                                this.index++
                                return true
                            }
                        }
                    }
                }
            }
        }
        return false
    }

    Id_List = () => {
        if (tokenArray[this.index].cp === 'ID') {
            console.log('got ID in ===> Id_List')
            this.index++
            if (this.Est()) {
                return true
            }
        }
        return false
    }

    Est = () => {
        if (tokenArray[this.index].cp === ',') {
            console.log('got , in ===> Est')
            this.index++
            if (tokenArray[this.index].cp === 'ID') {
                console.log('got ID in ===> Est')
                this.index++
                if (this.Est()) {
                    return true
                }
            }
        }
        return true
    }

    // Export_St = () => {
    //     if(tokenArray[this.index].cp==='EXPORT'){
    //         console.log('got Export in ===> Export_St')
    //         this.index++
    //         if(this.Expc()){
    //             if(this.End()){
    //                 return true
    //             }
    //         }
    //     }
    //     return false
    // }

    // Expc = () => {
    //     if(tokenArray[this.index].cp==='DEFAULT'){
    //         console.log('got default in ===> Expc')
    //         this.index++
    //         if(tokenArray[this.index].cp==='ID'){
    //             console.log('got ID in ===> Expc')
    //             this.index++
    //             if(this.Nnexp()){

    //             }
    //         }
    //     }
    // }

    // Nnexp = () => {

    // }

    // Import_St = () => {

    // }

    /* ---- </SYNTAX ANALYZER> ----  */

    /* ---- <Semantic Analyzer> ----- */ 

    insert = () => {
        debugger
        let result = this.lookup(this.insertValues.name)
        if (result.length===0){
            if(this.insertValues.parent){
                let parentCheck = this.lookup(this.insertValues.parent)
                if(parentCheck.length===0){
                    this.semantic.innerHTML += `<div>class ${this.insertValues.parent} is not decleared!</div>`
                }
            }
                console.log('chala')
                this.insertValues.classScope = this.scopeCount+1;
                this.currentClass = this.insertValues.name;
                this.table.push(this.insertValues)
                this.insertValues={}
                return true
        }
        return false
    }

    insertInClassTable = () => {
        let foundRef = false
        for(let key in this.classTable){
            console.log(key)
            if(key===this.currentClass){
                foundRef = true
            }
        }
        
        if(!foundRef){
            this.classTable[this.currentClass] = [this.insertValues]
        }
        else{
            this.classTable[this.currentClass].push(this.insertValues)
        }
        this.insertValues={}
    }

    insertInFunctionTable = (name,type,scope) => {
        // debugger
        if(this.lookupFT(name,this.currentScope)){
            return false
        }
        else{
            this.functionTable.push({name,type,scope})
            this.insertValues={}
            return true
        }
    }

    lookup = (name) => {
        let obj = this.table.filter(item => item.name === name )
        return obj
    }

    lookupCT = (className,funcName) =>{
        let result,obj;
        for(let key in this.classTable){
            if(key===className){
                result=this.classTable[key]
            }
        }
        if(result){
            obj=result.filter(item => item.name === funcName)
            return obj
        }  
        return obj
    }

    lookupFT = (name,scope) => {
        if(scope.length!==0)  { 
           let hierarcy = scope.reverse()
            for(let i=0;i<=scope.length;i++){
                for(let key in this.functionTable){
                    if(name===this.functionTable[key].name && this.functionTable[key].scope===hierarcy[i]){
                        return this.functionTable[key].type
                    }
                }
            }
        }
        else{
            let hierarcy = 0
            for (let i = 0; i <= scope.length; i++) {
                for (let key in this.functionTable) {
                    if (name === this.functionTable[key].name && this.functionTable[key].scope === hierarcy) {
                        return this.functionTable[key].type                        
                    }
                }
            }
        }
        
        return false
    }

    comptibilityBinary = () =>{
        console.log(this.insertValues)
        // let oprand1 = this.lookupFT()
    }

    forExpCheck = () => {
        let singleOprators = ['!','~','++','--']
        if(singleOprators.indexOf(this.insertValues.oprator)===-1 && this.insertValues.name && this.insertValues.name1 ){
            this.comptibilityBinary()
        }
        else if (singleOprators.indexOf(this.insertValues.oprator) !== -1 && this.insertValues.name){

        }
    }

    checkVaribleForClass = (id) => {

        if(tokenArray[this.index-1].cp!=='.' && tokenArray[this.index+1].cp==='.'){
            if(!this.lookupFT(id,this.currentScope)){
                this.semantic.innerHTML += `<div>${id} is not decleared</div>`
            }
        }
        else if(tokenArray[this.index-1].cp==='.' && tokenArray[this.index+1].cp==='.'){
            let result = this.lookupFT(tokenArray[this.index - 2], this.currentScope)
        }
        else if(tokenArray[this.index-1].cp==='.' && tokenArray[this.index+1].cp==='('){
            let result = this.lookupFT(tokenArray[this.index-2].vp, this.currentScope)
            if(this.lookupCT(result,id).length===0){
                this.semantic.innerHTML += `<div>${id} is not decleared!</div>`
            }
        }
        this.insertValues.name ? this.insertValues.name1 = id : this.insertValues.name = id
    }

    /* ---- </Semantic Analyzer> ----- */

}


let KWArray = [
    {
        CP: 'DT',
        VP: 'let'
    },
    {
        CP: 'DT',
        VP: 'num'
    },
    {
        CP: 'DT',
        VP: 'string'
    },
    {
        CP: 'AM',
        VP: 'global'
    },
    {
        CP: 'AM',
        VP: 'local'
    },
    {
        CP: 'NSV',
        VP: 'null'
    },
    {
        CP: 'NSV',
        VP: 'undefined'
    },
    {
        CP: 'BOOL',
        VP: 'true'
    },
    {
        CP: 'BOOL',
        VP: 'false'
    },
    {
        CP: 'CONTINUE',
        VP: 'continue'
    },
    {
        CP: 'BREAK',
        VP: 'break'
    },
    {
        CP: 'LG',
        VP: 'goto'
    },
    {
        CP: 'LG',
        VP: 'label'
    },

    // loners


    {
        CP: 'CONSTRUCTOR',
        VP: 'constructor'
    },

    {
        CP: 'STATIC',
        VP: 'static'
    },

    {
        CP: 'IMPORT',
        VP: 'import'
    },
    {
        CP: 'EXPORT',
        VP: 'export'
    },
    {
        CP: 'IF',
        VP: 'if'
    },
    {
        CP: 'DO',
        VP: 'do'
    },
    {
        CP: 'CLASS',
        VP: 'class'
    },
    {
        CP: 'IN',
        VP: 'in'
    },
    {
        CP: 'ELSE',
        VP: 'else'
    },
    {
        CP: 'SWITCH',
        VP: 'switch'
    },
    {
        CP: 'RETURN',
        VP: 'return'
    },
    {
        CP: 'NEW',
        VP: 'new'
    },
    {
        CP: 'FOR',
        VP: 'for'
    },
    {
        CP: 'CASE',
        VP: 'case'
    },
    {
        CP: 'FUNCTION',
        VP: 'function'
    },
    {
        CP: 'THIS',
        VP: 'this'
    },
    {
        CP: 'WHILE',
        VP: 'while'
    },
    {
        CP: 'DEFAULT',
        VP: 'default'
    },
    {
        CP: 'EXTENDS',
        VP: 'extends'
    },


    // still no surity
    {
        CP: 'ENUM',
        VP: 'enum'
    }

]

let oprArray = [
    //Arithmetic
    {
        CP: '^',
        VP: '^'
    },
    {
        CP: 'MDM',
        VP: '*'
    },
    {
        CP: 'MDM',
        VP: '/'
    },
    {
        CP: 'MDM',
        VP: '%'
    },
    {
        CP: 'PM',
        VP: '+'
    },
    {
        CP: 'PM',
        VP: '-'
    },

    //Relational
    {
        CP: 'REL',
        VP: '=='
    },
    {
        CP: 'REL',
        VP: '==='
    },
    {
        CP: 'REL',
        VP: '!='
    },
    {
        CP: 'REL',
        VP: '!=='
    },
    {
        CP: 'REL',
        VP: '<'
    },
    {
        CP: 'REL',
        VP: '>'
    },
    {
        CP: 'REL',
        VP: '<='
    },
    {
        CP: 'REL',
        VP: '>='
    },

    //Logical
    {
        CP: '&&',
        VP: '&&'
    },
    {
        CP: '||',
        VP: '||'
    },

    //Bitwise
    {
        CP: '&',
        VP: '&'
    },
    {
        CP: '|',
        VP: '|'
    },

    //Increment / Decrement
    {
        CP: 'InDc',
        VP: '++'
    },
    {
        CP: 'InDc',
        VP: '--'
    },

    //Unary
    {
        CP: 'Unr',
        VP: '!'
    },
    {
        CP: 'Unr',
        VP: '~'
    },

    //Equals
    {
        CP: '=',
        VP: '='
    },

    //Assignment
    {
        CP: 'ASSIGN',
        VP: '+='
    },
    {
        CP: 'ASSIGN',
        VP: '-='
    },
    {
        CP: 'ASSIGN',
        VP: '*='
    },
    {
        CP: 'ASSIGN',
        VP: '/='
    },
    {
        CP: 'ASSIGN',
        VP: '^='
    }

]

let puncArray = [
    {
        CP: '{',
        VP: '{'
    },
    {
        CP: '}',
        VP: '}'
    },
    {
        CP: ',',
        VP: ','
    },
    {
        CP: '.',
        VP: '.'
    },
    {
        CP: ';',
        VP: ';'
    },
    {
        CP: ':',
        VP: ':'
    },
    {
        CP: ']',
        VP: ']'
    },
    {
        CP: '[',
        VP: '['
    },
    {
        CP: '(',
        VP: '('
    },
    {
        CP: ')',
        VP: ')'
    },
    {
        CP: '"',
        VP: '"'
    },
    {
        CP: '`',
        VP: '`'
    },
    {
        CP: "'",
        VP: "'"
    }

]
// export { print }