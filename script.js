const trigramBtn = document.querySelector ('.trigram');
console.log(trigramBtn);

trigramBtn.addEventListener('click', () => {
    if (trigramBtn.getAttribute('aria-expanded') === 'false') {
trigramBtn.setAttribute('aria-expanded', true)
   } else {
trigramBtn.setAttribute('aria-expanded', false)
    }
});


window.addEventListener('resize', () => {
    //console.log (window.innerWidth);
    if (window.innerWidth > 1023){
       trigramBtn.setAttribute('aria-expanded', 'false'); 
    }
});