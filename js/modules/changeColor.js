export function changeColor (input, button){
    const $d = document;
    $d.addEventListener('click', (e)=>{
        if(!e.target.matches(button)){
            $d.querySelector(input).parentElement.classList.remove('form__checked');
        }
        if(e.target.matches(input)){
            $d.querySelector(input).parentElement.classList.add('form__checked');
        }
    });


}