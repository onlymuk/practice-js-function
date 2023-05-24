// function three(num) {
//   if (num % 3 == 0) {
//     console.log("박수");
//   } else {
//     console.log("통과");
//   }
// }

// function threeNine(num) {
//   if (num % 9 == 0) {
//     console.log("박수박수");
//   } else {
//     three(num);
//   }
// }
// three(9);
// three(11);
// threeNine(18);
// threeNine(24);

// function pass(a, b) {
//   if (a + b >= 120 && a > 40 && b > 40) {
//     console.log("pass");
//   } else {
//     console.log("unpass");
//   }
// }
// pass(70, 70);
// pass(30, 100);
// pass(50, 50);

// // function threeSixNine(num) {
// //   if (num % 10 == 6 || num % 10 == 9 || num % 10 == 3) {
// //     console.log("박수");
// //   } else {
// //     console.log("패스");
// //   }
// //   if (num > 100) {
// //     alert("장난같나");
// //   }
// // }

// // threeSixNine(101);

// let 나이 = 26;
// const 지역 = "이천";

// // return kim, 0;

// var 예금액 = 10000;
// var 미래예금액 = 0;

// if (예금액 < 50000) {
//   미래예금액 = Math.ceil(1.15 ** 2 * 예금액);
// } else {
//   미래예금액 = Math.ceil(1.2 ** 2 * 예금액);
// }

// console.log(미래예금액);
// console.log(미래예금액);

// var first = 360;
// var total = 0;
// // total = first + first * (2 / 3) + first * (2 / 3) ** 2;
// total = Math.ceil(360 / (1 - 2 / 3));
// console.log(total);

// function vat(a) {
//   var num = (a * 1.1).toFixed(1); //소수점 두번쨰 자리까지, 하지만 문자열로 출력됨
//   return parseFloat(num); //해결하고 싶을때 parseInt나 parseFloat
// }

var 출석부 = ["흥민", "영희", "철수", "재석", "철수"];

function 이름찾기(name) {
  for (var i = 0; i < 5; i++) {
    if (name == 출석부[i]) {
      return console.log("있어요");
    }
  }
}

이름찾기("철수");

function 구구단() {
  for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      console.log(i * j);
    }
  }
}
구구단();

function 평균(arr, po) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  if (sum / arr.length - po > 0) {
    console.log("good");
  } else {
    console.log("NOT good");
  }
}
평균([40, 40, 40], 20);
평균([10, 20, 30, 40, 50], 40);
