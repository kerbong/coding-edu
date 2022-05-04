// ========== 덧셈관련 ==========
//입력 창 a와 b 선택
const a = document.querySelector("#input-a");
const b = document.querySelector("#input-b");

//form 제출 태그 선택
const plusForm = document.querySelector("#plus-form");

//제출 태그에 제출submit 이벤트 감지해서 제출submit 하면 plus 함수function 실행
plusForm.addEventListener("submit", plus);

//plus함수
function plus(event) {
  event.preventDefault();
  alert(
    `${a.value}와 ${b.value}의 덧셈 결과는 ${
      parseFloat(a.value) + parseFloat(b.value)
    } 입니다.`
  );
}

// ========== 뺄셈관련 ==========
//입력 창 c와 d 선택
const c = document.querySelector("#input-c");
const d = document.querySelector("#input-d");

//form 제출 태그 선택
const minusForm = document.querySelector("#minus-form");

//제출 태그에 제출submit 이벤트 감지해서 제출submit 하면 plus 함수function 실행
minusForm.addEventListener("submit", minus);

//뺄셈함수
function minus(event) {
  event.preventDefault();
  alert(
    `${c.value}와 ${d.value}의 뺄셈 결과는 ${
      parseFloat(c.value) - parseFloat(d.value)
    } 입니다.`
  );
}

// ========== 나눗셈관련 ==========
//입력 창 e와 f 선택
const e = document.querySelector("#input-e");
const f = document.querySelector("#input-f");

//form 제출 태그 선택
const divideForm = document.querySelector("#divide-form");

//제출 태그에 제출submit 이벤트 감지해서 제출submit 하면 divide 함수function 실행
divideForm.addEventListener("submit", divide);

//divide함수
function divide(event) {
  event.preventDefault();
  alert(
    `${e.value}와 ${f.value}의 나눗셈 결과는 ${
      parseFloat(e.value) / parseFloat(f.value)
    } 입니다.`
  );
}

// ========== 곱셈관련 ==========
//입력 창 g와 h 선택
const g = document.querySelector("#input-g");
const h = document.querySelector("#input-h");

//form 제출 태그 선택
const multipleForm = document.querySelector("#multiple-form");

//제출 태그에 제출submit 이벤트 감지해서 제출submit 하면 multiple 함수function 실행
multipleForm.addEventListener("submit", multiple);

//multiple함수
function multiple(event) {
  event.preventDefault();
  alert(
    `${g.value}와 ${h.value}의 곱셈 결과는 ${
      parseFloat(g.value) * parseFloat(h.value)
    } 입니다.`
  );
}
