
const togglePassword = {
  elementCible(){
    document.documentElement.classList.add('js-enabled');
     this.input = document.getElementById('password');
     this.button = document.querySelector('.showPass');
  },

  toggle(){
    this.button.addEventListener('click', ()=>{
      if (this.input.getAttribute('type') === 'password') {
        this.input.setAttribute('type', 'text')
      } else if(this.input.getAttribute('type') === 'text'){
        this.input.setAttribute('type', 'password');
      }
    });
  },

  init(){
    this.elementCible();
    this.toggle();
  }
}

togglePassword.init();