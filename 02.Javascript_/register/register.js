const userid = document.querySelector('#userid')
const pwd1 = document.querySelector('#pwd1')
const pwd2 = document.querySelector('#pwd2')
const level = document.querySelector('#level')
const fullname = document.querySelector('#fullname')
const email = document.querySelector('#email')
const tel = document.querySelector('#tel')
const submitButton = document.querySelector('#submit_button')

//https://goddino.tistory.com/52

submitButton.addEventListener('click', function(e){
    //눈에 보이지 않는 개행 문자열('\n') 때문에 nextSibling을 두번 쓴다
    if (!userid.value) {
        userid.nextSibling.nextSibling.style.display = 'block'
        return false
    }
    
    if (!pwd1.value) {
        pwd1.nextSibling.nextSibling.style.display = 'block'
        return false
    } 
    if (!pwd2.value) pwd2.nextSibling.nextSibling.style.display = 'block'
    if (!fullname.value) fullname.nextSibling.nextSibling.style.display = 'block'
    if (!email.value) email.nextSibling.nextSibling.style.display = 'block'
});




