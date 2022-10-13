console.log('Слайдер перестраивается после обновления страницы. Спасибо за понимание.')
/*header-burger
menu*/

const burger = document.querySelector('.header-burger');
const menu = document.querySelector('.navigation');
const burgerClose = document.querySelector('.header-burger__close');
const navLinks = document.querySelectorAll('.nav-link');


burger.addEventListener('click', toggleMenu);
burgerClose.addEventListener('click', toggleMenu);
navLinks.forEach((el) => el.addEventListener('click', toggleMenu));


 function toggleMenu() {
    menu.classList.toggle('active');
    burgerClose.classList.toggle('active');
}

window.addEventListener('click', function (e) {
  const target = e.target;
   if(!target.closest('.navigation') && !target.closest('.header-burger') && menu.classList.contains('active')){
    toggleMenu();
   }
    }
    
  );

  /************pop-up***********/

const loginBtn = document.querySelector('.login');
const loginPopUp = document.querySelector('.login-popup');
const menuShadow = document.querySelector('.popup-shadow');
const account = document.querySelectorAll('.nav-link')[4];

function addPopUp() {

  loginPopUp.classList.add('open');
  menuShadow.classList.add('active');
  loginPopUp.classList.remove('close');
 }

loginBtn.addEventListener('click', addPopUp);

menuShadow.addEventListener('click', () => {
  loginPopUp.classList.remove('open');
  menuShadow.classList.remove('active');
  loginPopUp.classList.add('close');
});

account.addEventListener('click', addPopUp)


const input = document.querySelectorAll('.login-input');
const loginButton = document.querySelector('.login-button');


loginButton.addEventListener('click', getValue);

function getValue() {
  addPopUp();
 
    input.forEach((el) =>  {
    
        window.alert(`Entered: ${el.value}`);
      } 
    
  )
  }
 
const registerLink = document.querySelector('.register-link');
const loginTitle = document.querySelector('.login-title');
const loginSign = document.querySelectorAll('.login-sign');
const or = document.querySelector('.or');
const loginLink = document.querySelector('.login-link');
const register = document.querySelector('.register');
const register2 = document.querySelector('.register2');
const registerLink2 = document.querySelector('.register-link2');
const loginTitle2 = document.querySelector('.login-title2');

 registerLink.addEventListener('click', signUp);

 function signUp() {

  loginTitle.classList.add('sign-up');
  loginSign.forEach(el => {
    el.classList.add('sign-up');
  })
  or.classList.add('sign-up');
  loginLink.classList.add('sign-up');
  register.style.display = 'none';
  register2.style.display = 'block';
  loginTitle2.style.display = 'block';
  loginTitle.style.display = 'none';
 
    
register2.addEventListener('click', (e) => {
  const target = e.target;
  if(target.classList.contains('register-link2')) {
    loginTitle.classList.remove('sign-up');
    loginSign.forEach(el => {
    el.classList.remove('sign-up');
  })
  or.classList.remove('sign-up');
  loginLink.classList.remove('sign-up');
  register.style.display = 'block';
  register2.style.display = 'none';
  loginTitle2.style.display = 'none';
  loginTitle.style.display = 'block';
 

}
})
 
 }
/**slider 1440px**/
const karusel = document.querySelector('.karusel-images');
const inputs = document.querySelectorAll('.dots-input');
const dots = document.querySelectorAll('.dot');
let items = document.querySelectorAll('.item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


if (window.screen.width >= 1000) {
  prev.addEventListener('click', prevImg);
  next.addEventListener('click', nextImg);

let position = 0;
let indexImg = 1;

activeDots(indexImg);

function prevImg() {

     indexImg = 0;  
      position += 860;
    if(position > 860){
      indexImg = 1;
      position = 0;
    }
      karusel.style.left = position + 'px'; 
      activeDots(indexImg);
  }
 

    function nextImg() {
    
      indexImg++;
      position -= 860;
       activeDots(indexImg);
      // console.log(indexImg) 
    if(position < 0){
      position = 860;
      indexImg = 0;
    }
    karusel.style.left = -position + 'px';    
   
  }
  function activeDots(i) {
      for(let dot of dots) {
        dot.classList.remove('active-dot');
          }
        dots[i].classList.add('active-dot');
     }
     
    }    
 /********slider 390px********/
 
if (window.screen.width <= 400) {


prev.addEventListener('click', prevImg);
next.addEventListener('click', nextImg);


let position = 0;
let indexImg = 0;

activeDots(indexImg);

function prevImg() {

     indexImg--;  
      position -= 420;
    if(position < 0){
      position = 840;
      indexImg = items.length -1;
    }
      karusel.style.left = -position + 'px'; 
      activeDots(indexImg);
  }
 

    function nextImg() {
    
      indexImg++;
      position += 420;
        if(position > 840){
      position = 0;
      indexImg = 0;
    }
    karusel.style.left = -position + 'px';    
    activeDots(indexImg);
  }
  function activeDots(i) {
    for(let dot of dots) {
      dot.classList.remove('active-dot');
        }
      dots[i].classList.add('active-dot');
   }
   
}

