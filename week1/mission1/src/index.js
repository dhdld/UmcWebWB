const nameCheck = document.getElementById('nameCheck');
const emailCheck = document.getElementById('emailCheck');
const ageCheck = document.getElementById('ageCheck');
const passwordCheck = document.getElementById('passwordCheck');
const checkpwConfirm = document.getElementById('checkpwConfirm');

const btn = document.getElementById('btn');

nameCheck.style.fontSize = '10px';
emailCheck.style.fontSize = '10px';
ageCheck.style.fontSize = '10px';
passwordCheck.style.fontSize = '10px';
checkpwConfirm.style.fontSize = '10px';

let nameOk = false;
let emailOk = false;
let ageOk = false;
let passwordOk = false;
let checkpwOk = false;

btn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const password = document.getElementById('password').value;
    const checkpw = document.getElementById('checkpw').value;

    if (typeof name == 'string' && name !== '') {
        nameCheck.innerHTML = '멋진 이름이네요!';
        nameCheck.style.color = 'green';
        nameOk = true;
    }
    else {
        nameCheck.innerHTML = '필수 입력 항목입니다!';
        nameCheck.style.color = 'red';
    }

    if (email == '') {
        emailCheck.innerHTML = '필수 입력 항목입니다!';
        emailCheck.style.color = 'red';
    }
    else if (email.includes('@') && email.includes('.')) {
        emailCheck.innerHTML = '올바른 이메일 형식입니다!';
        emailCheck.style.color = 'green';
        emailOk = true;
    } else {
        emailCheck.innerHTML = '올바른 이메일 형식이 아닙니다!';
        emailCheck.style.color = 'red';
    }

    if (age == '') {
        ageCheck.innerHTML = '필수 입력 항목입니다!';
        ageCheck.style.color = 'red';
    }
    else if (isNaN(age)) {
        ageCheck.innerHTML = '숫자만 입력해주세요!';
        ageCheck.style.color = 'red';
    }
    else if (age < 0) {
        ageCheck.innerHTML = '나이는 음수가 될 수 없습니다!';
        ageCheck.style.color = 'red';
    }
    else if (Number.isInteger(Number(age)) == false) {
        ageCheck.innerHTML = '나이는 정수로 입력해주세요!';
        ageCheck.style.color = 'red';
    }
    else if (age < 19) {
        ageCheck.innerHTML = '미성년자는 가입할 수 없습니다!';
        ageCheck.style.color = 'red';
    } else {
        ageCheck.innerHTML = '올바른 나이 형식입니다!';
        ageCheck.style.color = 'green';
        ageOk = true;
    }

    let passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{4,12}$/;
    if (password.length < 4) {
        passwordCheck.innerHTML = '비밀번호는 최소 4자리 이상이어야 합니다.';
        passwordCheck.style.color = 'red';
    }
    else if (password.length > 12) {
        passwordCheck.innerHTML = '비밀번호는 최대 12자리까지 가능합니다.';
        passwordCheck.style.color = 'red';
    } else if (!passwordRegex.test(password)) {
        passwordCheck.innerHTML = '영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.';
        passwordCheck.style.color = 'red';
    } else {
        passwordCheck.innerHTML = '올바른 비밀번호입니다!';
        passwordCheck.style.color = 'green';
        passwordOk = true;
    }
    if (password !== checkpw || checkpw == '') {
        checkpwConfirm.innerHTML = '비밀번호가 일치하지 않습니다.';
        checkpwConfirm.style.color = 'red';
    } else {
        checkpwConfirm.innerHTML = '비밀번호가 일치합니다!';
        checkpwConfirm.style.color = 'green';
        checkpwOk = true;
    }

    if (nameOk && emailOk && ageOk && passwordOk && checkpwOk) {
        modal.style.display = 'flex';
    }
}
);

const close = document.getElementById('closeModal');
const modal = document.querySelector('.modalWrapper');

close.onclick = () => {
    modal.style.display = 'none';
}