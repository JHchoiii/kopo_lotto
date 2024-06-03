//로또번호를 랜덤으로 추출하여서 배열로 반환하는 함수
function getRandomNumber(numbers, count) {
  let selectedNumber = [];
  // count의 수만큼 반복하는 while문
  while (selectedNumber.length < count) {
    // numbers 배열에서 랜덤한 인덱스 선택
    let randomIndex = Math.floor(Math.random() * numbers.length);
    // 선택된 인덱스의 숫자 가져오기
    let number = numbers[randomIndex];
    //중복되지 않은 숫자만 selectedNumber에 추가
    if (!selectedNumber.includes(number)) {
      selectedNumber.push(number);
    }
  }
  return selectedNumber;
}
//btn과 id = "buttonId"인 element를 연결
const btn = document.getElementById("buttonId");
//btn과 id = "buttonId"인 element를 연결
const result1 = document.getElementById("result1");

//버튼 클릭 이벤트에 연결
btn.addEventListener("click", function () {
  //numbers 에서 7개의 랜덤 숫자를 array라는 변수에 배열 저장
  var array = getRandomNumber(numbers, 7);
  //result1에 6개의 당첨번호와 1개의 보너스 번호를 반환
  result1.innerText = array.slice(0, 6) + " + " + array[6];
});
