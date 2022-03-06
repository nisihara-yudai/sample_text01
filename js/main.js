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
