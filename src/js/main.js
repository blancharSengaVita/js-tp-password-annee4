
const togglePassword = {
  elementCible(){
    document.documentElement.classList.add('js-enabled');
     this.input = document.getElementById('password');
     this.button = document.querySelector('.showPass');
  },

  toggle(){
    this.button.addEventListener('click', ()=>{
      if (this.input.type === 'password') {
        this.input.type = 'text';
      } else if(this.input.type === 'text'){
        this.input.type = 'password';
      }
    });
  },

  init(){
    this.elementCible();
    this.toggle();
  }
}

togglePassword.init();