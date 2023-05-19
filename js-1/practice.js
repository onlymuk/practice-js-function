function three(num) {
  if (num % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}

function threeNine(num) {
  if (num % 9 == 0) {
    console.log("박수박수");
  } else {
    three(num);
  }
}
three(9);
three(11);
threeNine(18);
threeNine(24);

function pass(a, b) {
  if (a + b >= 120 && a > 40 && b > 40) {
    console.log("pass");
  } else {
    console.log("unpass");
  }
}
pass(70, 70);
pass(30, 100);
pass(50, 50);

function threeSixNine(num) {
  if (num % 10 == 6 || num % 10 == 9 || num % 10 == 3) {
    console.log("박수");
  } else {
    console.log("패스");
  }
  if (num > 100) {
    alert("장난같나");
  }
}

threeSixNine(101);
