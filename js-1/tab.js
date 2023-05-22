//모든 버ㄴ에 붙은 orange 클래스명 제거
//버튼 0에 orange 클래스명 추가
//모든 div에 붙은 show  클래스명 제거
//div0에 show 클래스명 추가
const content = document.querySelectorAll(".tab-content");
const button = document.querySelectorAll("li");
const container = document.querySelectorAll("div")[0];
const products = document.querySelectorAll(".tab-button")[0];
const information = document.querySelectorAll(".tab-button")[1];
const shipping = document.querySelectorAll(".tab-button")[2];

// function 버튼(btn, i) {
//   btn.addEventListener("click", function () {
//     content.forEach((element) => {
//       element.classList.remove("show");
//     });
//     button.forEach((element) => {
//       element.classList.remove("orange");
//     });
//     btn.classList.add("orange");
//     content[i].classList.add("show");
//   });
// }

// 버튼(products, 0);
// 버튼(information, 1);
// 버튼(shipping, 2);

function 탭열기(구멍) {
  $(".tab-button").removeClass("orange");
  $(".tab-button").eq(구멍).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(구멍).addClass("show");
}

//배운것
// 함수로 축약할 때 변수있으면 파라미터로 바꿔봐라
// data-id로 몰래 숨기기 가능
// 이벤트리스너 하나만 붙여도 개발가능

document.querySelector(".list").addEventListener("click", function (e) {
  //if (e.target == document.querySelectorAll(".tab-button")[0]) 탭열기(0);
  //지금 누른게 버튼0이면 버튼0에 orange box0 show0
  //if (e.target == document.querySelectorAll(".tab-button")[1]) 탭열기(1);
  //지금 누른게 버튼0이면 버튼0에 orange box0 show0
  //if (e.target == document.querySelectorAll(".tab-button")[2]) 탭열기(2);
  //지금 누른게 버튼0이면 버튼0에 orange box0 show0

  //dataset 사용
  //<tag data-작명="값">
  //document.querySelector('.tab-button').dataset.작명 = '값'
  탭열기(parseInt(e.target.dataset.id));
});
