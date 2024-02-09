'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclosemodal = document.querySelector('.close-modal');
const btnsopenmodal = document.querySelectorAll('.show-modal');

console.log(btnsopenmodal)

const openModal = () =>{
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const closeModal = () =>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0;i<btnsopenmodal.length;i++){
    btnsopenmodal[i].addEventListener('click',openModal)

}

btnclosemodal.addEventListener('click',closeModal)

overlay.addEventListener('click',closeModal);

document.addEventListener('keydown',function(e){
   if(e.key==='Escape' && !modal.classList.contains('hidden')){
       closeModal();
   }
})