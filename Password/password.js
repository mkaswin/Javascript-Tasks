const passwordBox  =document.getElementById("password");
const lenght =12;
const uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase ="abcdefghijklmnopqrstuvwxyz";
const numbers ="0123456789";
const symbols ="!@#$%^&*()_+~|{}[<>/-="

const alchars =uppercase + lowercase+numbers+symbols;

function createpassword(){
  let password ='';
  password +=uppercase[Math.floor(Math.random()*uppercase.length)];
  password +=lowercase[Math.floor(Math.random()*lowercase.length)];
  password +=numbers[Math.floor(Math.random()*numbers.length)];
  password +=symbols[Math.floor(Math.random()*symbols.length)];

  while (lenght>password.length){
    password +=alchars[Math.floor(Math.random()*alchars.length)];

  }
  passwordBox.value=password;
}
function copyPassword(){
  passwordBox.select();
  document.execCommand("copy");
}