const userid = document.querySelector("#userid");
const pwd1 = document.querySelector("#pwd1");
const pwd2 = document.querySelector("#pwd2");
const level = document.querySelector("#level");
const fullname = document.querySelector("#fullname");
const email = document.querySelector("#email");
const tel = document.querySelector("#tel");
const submitButton = document.querySelector("#submit_button");
let chkFlag = true;

//https://goddino.tistory.com/52
//전송 버튼 클릭시 입력되지 않은 정보가 있을때
submitButton.addEventListener("click", function (e) {
  //눈에 보이지 않는 개행 문자열('\n') 때문에 nextSibling을 두번 쓴다
  if (!userid.value) {
    userid.nextSibling.nextSibling.style.display = "block";
    chkFlag = false;
  }

  if (!pwd1.value) {
    pwd1.nextSibling.nextSibling.style.display = "block";
    chkFlag = false;
  }

  if (!pwd2.value) {
    pwd2.nextSibling.nextSibling.style.display = "block";
    chkFlag = false;
  }

  if (!fullname.value) {
    fullname.nextSibling.nextSibling.style.display = "block";
    chkFlag = false;
  }

  if (!email.value) {
    email.nextSibling.nextSibling.style.display = "block";
    chkFlag = false;
  }

  if (chkFlag) {
    document.signup.submit();
  }
});

userid.addEventListener("focusout", function (e) {
  //공백이 아니면서 중복 체크에 통과하지 못할 경우
  if (!idCheck(e.target.value) && e.target.value) {
    userid.nextSibling.nextSibling.innerText = "중복된 아이디 입니다.";
    userid.nextSibling.nextSibling.style.display = "block";
  }
});

pwd1.addEventListener("focusout", function (e) {
  // console.log(e.target.value);
  //공백이 아니면서 유효성 체크에 통과하지 못할 경우
  if (!pwdCheck(e.target.value) && e.target.value) {
    pwd1.nextSibling.nextSibling.innerText = "특수문자, 문자, 숫자 포함 형태의 8~15자리를 입력하세요.";
    pwd1.nextSibling.nextSibling.style.display = "block";
  }
});

pwd1.addEventListener("keyup", function (e) {
  //공백이 되면
  if (!e.target.value) {
    pwd1.nextSibling.nextSibling.innerText = "필수 정보 입니다.";
    pwd1.nextSibling.nextSibling.style.display = "none";
  }
});

pwd2.addEventListener("focusout", function () {
  //두개의 패스워드 값이 있을때
  if (pwd1.value && pwd2.value) {
    //패스워드가 같지 않다면
    if (pwd1.value !== pwd2.value) {
      pwd2.nextSibling.nextSibling.innerText = "두 개의 비밀번호가 일치하지 않습니다.";
      pwd2.nextSibling.nextSibling.style.display = "block";
    }
  }
});

pwd2.addEventListener("keyup", function (e) {
  //공백이 되면
  if (!e.target.value) {
    pwd2.nextSibling.nextSibling.innerText = "필수 정보 입니다.";
    pwd2.nextSibling.nextSibling.style.display = "none";
  }
});

tel.addEventListener("focusout", function (e) {
  if (!telCheck(e.target.value)) {
    tel.nextSibling.nextSibling.innerText = "전화번호 형식이 일치하지 않습니다.";
    tel.nextSibling.nextSibling.style.display = "block";
  }
});

tel.addEventListener("keyup", function (e) {
  //공백이 되면
  if (!e.target.value) {
    tel.nextSibling.nextSibling.innerText = "필수 정보 입니다.";
    tel.nextSibling.nextSibling.style.display = "none";
  }
});

email.addEventListener("focusout", function (e) {
  if (!emailCheck(e.target.value)) {
    email.nextSibling.nextSibling.innerText = "이메일 형식이 일치하지 않습니다.";
    email.nextSibling.nextSibling.style.display = "block";
  }
});

email.addEventListener("keyup", function (e) {
  //공백이 되면
  if (!e.target.value) {
    email.nextSibling.nextSibling.innerText = "필수 정보 입니다.";
    email.nextSibling.nextSibling.style.display = "none";
  }
});

//중복된 아이디 체크
function idCheck(id) {
  return true;
}

// https://tjddnjs625.tistory.com/28
//정규식 테스트 사이트: https://regexr.com/

function pwdCheck(pwd) {
  //특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 ( 3 가지 조합)
  const reg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  return reg.test(pwd);
}

function telCheck(tel) {
  const reg = /^\d{2,3}-\d{3,4}-\d{4}$/;
  return reg.test(tel);
}

function emailCheck(email) {
  const reg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return reg.test(email);
}

// 버그1: 비밀번호 두개 입력 후 비밀번호를 지우고 다시 쓰면 일치 하지 않는데 그냥 전송이 된다.
// 버그2: 경고 문제가 있는데 입력 클릭시 그대로 전송이 된다.
