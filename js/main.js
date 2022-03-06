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
// let num = function (i) {
//   if (i >= 1 && i <= 20) {
//     document.write("正しく入力されました" + "<br>");
//   } else {
//     document.write("1から20の間の数値を入れて下さい" + "<br>");
//   }
// }

// num(21);
// num(11);
// num(2);

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

let number = function (num) {
  for (let num = 50; num >= 25; num--){
    if (num % 30 == 0) {
      document.write("yes/no" + "<br>");
    } else if (num % 3 == 0) {
      document.write("yes" + "<br>");
    } else if (num % 10 == 0) {
      document.write("no" + "<br>");
    } else {
      document.write(num + "<br>");
    }
  }
}

number();

// number(33);
// number(42);
// number(50);
