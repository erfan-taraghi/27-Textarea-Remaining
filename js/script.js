const textarea = document.querySelector('#textarea');
const remaining = document.querySelector('#textarea_remaining');
let MAX_CHARS =250;


textarea.addEventListener('input', ()=>{
    const TotalRemaining =  MAX_CHARS - textarea.value.length;


    console.log(TotalRemaining)

    const color = TotalRemaining < 30 ? 'red' :null;
    remaining.style.color = color

    remaining.textContent =`کارکتر باقی مانده${TotalRemaining}`


    if(TotalRemaining === 0){
        remaining.textContent = `مقدار مجاز تکمیل است ${TotalRemaining}`
    }
    
})