let challenge = '30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(0,2));
console.log(challenge.substring(0,3));
console.log(challenge.substr(3,18));
console.log(challenge.substring(3,21));
console.log(challenge.includes('Script'));
console.log(challenge.split());
console.log(challenge.split(' '));
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(','));
console.log(challenge.replace('JavaScript','Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf('because'));
console.log(sentence.lastIndexOf('because'));
console.log(sentence.search('because'));
console.log(challenge.trim());
console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('pt'));
console.log(challenge.match(/a/gi));
let sentence1 =  '30 Days of';
let sentence2 = 'JavaScript';
console.log(sentence1.concat(sentence2));
console.log(challenge.repeat(2));

//EXERCISE: LEVEL 2
// let longSentence = "The quote 'There is no exercise better for the heart than reaching down and lifting 
// people up.' by John Holmes teaches us to help one another.";
console.log(`The quote \'There is no exercise better for the heart than reaching down and lifting people. \' by John Holmes teaches us to help one another.`)
console.log("Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."
);
console.log(typeof('10')==10);
let int10 = parseInt('10');
console.log(typeof(int10))
let floatValue='9.8';
floatValue ==10?console.log(typeof(floatValue)):console.log(floatValue=parseFloat(Math.ceil(floatValue)))
let word1 ='python';
let word2 ='jargon';
console.log(word1.includes('on'));
console.log(word2.includes('on'));
let wordChecking = 'I hope this course is not full of jargon';
console.log(wordChecking.includes('jargon'))
console.log(Math.floor(Math.random()*100));
console.log(Math.floor((Math.random()*(50)+50)));
console.log(Math.floor((Math.random()*(251))));
let text = 'JavaScript';
let randomNum = Math.floor((Math.random()*10));
console.log(text[randomNum]);
console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t5\t25\t125');
let becauseSentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(becauseSentence.substr(31,23));

//EXERCISE : LEVEL 3
let matchSentence = 'You cannot end a sentence with because because because is a conjunction';
let NumbOfBecause = matchSentence.match(/because/gi)
NumbOfBecause = NumbOfBecause.length;
console.log(`Number of because in the sentence is ${NumbOfBecause}`)
const realSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let symbols = /[%#@;$&?!]/gi;
let cleanedSentence =(realSentence.replace(symbols,''));
console.log(cleanedSentence);
//income calculation
let incomeSentence = 'Calculate the total annual income of the person by extracting the numbers from the following text. \'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let numExtraction = /\d+/g;
let totalIncome=incomeSentence.match(numExtraction);
let totalIncomeCalculation = (+totalIncome[0]*12)+(+totalIncome[1])+(+totalIncome[2]*12);
console.log(totalIncomeCalculation);




