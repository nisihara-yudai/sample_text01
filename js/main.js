'use strict';

// if文で繰り返し処理
// let answer = prompt('1から20で個数を入力して下さい');

// if (answer >= 1 && answer <= 20) {
//   document.write("正しく入力されました");
// } else {
//   document.write("1から20までで入力して下さい");
// }

// for (let i = 1; i <= 200; i++){
//   if (i % 10 == 0) {
//     document.write("OK!" + "<br>");
//   } else if (i % 5 == 0) {
//     document.write("AllRight!" + "<br>");
//   } else if (i % 2 == 0) {
//     document.write("OK!AllRight!" + "<br>");
//   } else {
//     document.write(i + "<br>");
//   }
// }

// 関数で1~20までの値を繰り返し出力するプログラムを記述する
let num = function (i) {
  if (i >= 1 && i <= 20) {
    document.write("正しく入力されました" + "<br>");
  } else {
    document.write("1から20の間の数値を入れて下さい" + "<br>");
  }
}

num(21);
num(11);
num(2);

// if (answer >= 1 && answer <= 20) {
//   document.write("正しく入力されました");
// } else {
//   document.write("1から20までで入力して下さい");
// }

// もしも50から1を引き続けて25以下になったら処理を止めるコードを書く
// for (let num = 50; num >= 25; num--) {
//   document.write(num + "<br>");
// }

// 3で割り切れるならば、yesを返し、10で割り切れればnoを、30で割り切れればyes/noを返す
// for (let num = 50; num >= 25; num--) {
//   if (num % 30 == 0) {
//     document.write("yes/no" + "<br>");
//   } else if (num % 3 == 0) {
//     document.write("yes" + "<br>");
//   } else if (num % 10 == 0) {
//     document.write("no" + "<br>");
//   } else {
//     document.write(num + "<br>");
//   }
// }

// 関数で上記の問題（ 3で割り切れるならば、yesを返し、10で割り切れればnoを、30で割り切れればyes/noを返す）を記述する

// let number = function (num) {
//   if (num % 30 == 0) {
//     document.write("yes/no" + "<br>");
//   } else if (num % 3 == 0) {
//     document.write("yes" + "<br>");
//   } else if (num % 10 == 0) {
//     document.write("no" + "<br>");
//   } else {
//     document.write(num + "<br>");
//   }
// }

// number(42);
// number(33);
// number(43);
// number(50);



// 50点満点のテストで、A君は20点、B君は40点、C君は10点を取りました。評価として、30点以上は「よくできました」、15点以上は「もう少しです」、15点未満は「まだまだです」というものです。
// let feeling = (score)=>{
//   if (score >= 30) {
//     console.log("良く出来ました");
//   } else if (score >= 15) {
//     console.log("もう少しです");
//   } else {
//     console.log("まだまだです");
//   }
// }

// feeling(20);
// feeling(40);
// feeling(10);

// 果物で、りんご、葡萄、桃、マスカットがあるのですが、それぞれの色を関数で呼び出す事が出来るのでしょうか。それ以外の果物の色は「”果物の名前”の色は分かりません。」と出力して下さい
// let fruit = (fruits) => {
//   if (fruits == "りんご") {
//     document.write(fruits + "の色は赤色です。<br>");
//   } else if (fruits == "葡萄") {
//     document.write(fruits + "の色は紫色です。<br>");
//   } else if (fruits == "桃") {
//     document.write(fruits + "の色は桃色です。<br>");
//   } else if (fruits == "マスカット") {
//     document.write(fruits + "の色は薄緑色です。<br>");
//   } else {
//     document.write(fruits + "の色は分かりません<br>");
//   }
// }

// fruit("りんご");
// fruit("葡萄");
// fruit("梨");
// fruit("マスカット");
// fruit("桃");
// fruit("苺");

// let fruits = prompt("果物を入力して下さい");
// if (fruits == "りんご") {
//   document.write(fruits + "の色は赤色です。<br>");
// } else if (fruits == "葡萄") {
//   document.write(fruits + "の色は紫色です。<br>");
// } else if (fruits == "桃") {
//   document.write(fruits + "の色は桃色です。<br>");
// } else if (fruits == "マスカット") {
//   document.write(fruits + "の色は薄緑色です。<br>");
// } else {
//   document.write(fruits + "の色は分かりません<br>");
// }

// fruit("りんご");
// fruit("葡萄");
// fruit("梨");
// fruit("マスカット");
// fruit("桃");
// fruit("苺");

// 引く計算を関数を用いて作るとこうなる
// const minus = (bigNumber, smallNumber) => {
//   const minus = bigNumber - smallNumber;
//   return minus + "<br>";
// }

// document.write(minus(19, 3));
// document.write(minus(13, 8));

// function numbers(num01,num02) {
//   const numbers = num01 * num02;
//   return numbers;
// }

// document.write(numbers(18, 4));

// let numbers = function (num01, num02) {
//   const numbers = num01 / num02;
//   return numbers;
// }

// document.write(numbers(150, 6));


