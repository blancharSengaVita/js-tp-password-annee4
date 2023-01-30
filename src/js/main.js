document.documentElement.classList.add('js-enabled');

/*const input = document.getElementById('password');
const button = document.querySelector('.showPass');*/

/*button.addEventListener('click', (e)=>{
  [input.type,input.dataset.type] = [input.dataset.type,input.type];
  [button.dataset.text, button.textContent] = [button.textContent, button.dataset.text];
});

input.focus(); //il fonctionne pas*/

const showPassword = {
  input : document.getElementById('password'),
  button : document.querySelector('.showPass'),
  init() {
    this.input.focus();
    this.button.addEventListener('click', (e)=>{
      [this.input.type,this.input.dataset.type] = [this.input.dataset.type,this.input.type];
      [this.button.dataset.text, this.button.textContent] = [this.button.textContent, this.button.dataset.text];
    });
  }
};
showPassword.init();











//le hot reload ne change pas la page mais change la partie qu'on vient de mettre à jour dans la mémoire. le open in browser dans phpstorm ne permet pas de faire les choses qu'on vu qu'on est capable de faire avec npm