let fs = require ('fs-extra');
let inquirer = require ("inquirer")
let Word = require("./word.js");
let colors = require('colors');

let wordsArr = ["stuff", "things", "more", "useless", "random"]
let random = Math.floor((Math.random()*(wordsArr.length - 1)));
let selectedWord = wordsArr[random];

console.log(selectedWord)