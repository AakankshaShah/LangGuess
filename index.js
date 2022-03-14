//const f=require("franc");
import {franc} from 'franc';
import langs from 'langs';
import color from 'colors';

 

const input=process.argv[2];
//console.log(input);
// console.log(franc('এটি একটি ভাষা একক IBM স্ক্রিপ্ট'));
const langCode=franc(input);
if (langCode === 'und') {
    console.log('Unable to detect the language'.red)
} else {
    const language = langs.where('3', langCode);
    console.log(language.name.green)
}












