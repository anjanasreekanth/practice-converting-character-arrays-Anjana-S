
//Task 1: Decode the Following Reversed Messages

let message1 = "!yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC";
let message2 = "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB";
let message3 = "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI.lanoisseforp a ekil leef ot evah t'nod uoY";
let message4 = ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ";

message1 = message1.split('').reverse().join('');
console.log(message1);
message2 = message2.split('').reverse().join('');
console.log(message2);
message3 = message3.split('').reverse().join('');
console.log(message3);
message4 = message4.split('').reverse().join('');
console.log(message4);

//Task 2: Write your own reverse messages

let myMessage1 = "Believe you can and you're halfway there";
let myMessage2 = "The only way to do great work is to love what you do";

myMessage1 = myMessage1.split('').reverse().join('');
myMessage2 = myMessage2.split('').reverse().join('');
console.log(myMessage1);
console.log(myMessage2);

