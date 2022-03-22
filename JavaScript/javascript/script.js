const name = document.getElementById('name');
const email = document.getElementById('email')
const submit = document.getElementById('sumbit');
const password = document.getElementById('password')
const err = document.querySelector('.msg');
const users = document.querySelector('#users');

const email_regex = /^(.+)@(.+)$/;
const password_regex = /^[a-zA-Z]+$/;
submit.addEventListener('click',validate);

function validate(e){
    e.preventDefault();
    console.log(err);
    if(email.value==='' || name.value===''  ||  !checkPassword(password.value) ){
        err.classList.add('error');
        err.innerText = 'Invalid Input';
        console.log(password.value)
        setTimeout(() => {
            err.classList.remove('error');
            err.innerText = '';
        }, 3000);
    }
    else{
        var new_user = document.createElement('li');
        var data = document.createTextNode(`${name.value}:${email.value}`);
        new_user.appendChild(data);
        users.appendChild(new_user);
        email.value = '';
        name.value = '';
        password.value = '';
    }
}

function checkPassword(str){
    var cap = 0;
    var sm = 0;
    var num = 0;
    for(var i=0 ; i<str.length ; ++i){
        var code = str.charCodeAt(i);
        if(code>=65 && code<=90 ){
            sm++;
        }
        else if(code>=97 && code<=122){
            cap++;
        }
        else if(code>=48 && code <=57){
            num++;
        }
    }
    console.log(cap);
    console.log(sm);
    console.log(num);
    if(cap>0 && sm>0 && num>0 && str.length >=8){
        return true;
    }
    return false;
}