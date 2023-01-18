export function validation (button, input, form, reverse, text){

    const validation = {
        isValid:false
    }

    document.addEventListener('click', (e)=>{
        if(e.target.matches(button)){
            e.preventDefault()
        }
    })

    document.addEventListener('click', (e)=>{
        if(e.target.matches(input) && e.target.value <=5){
            validation.isValid = true
            e.target.checked = true;
        }
        else{
            e.target.checked = false;
        }
    })

    document.addEventListener('submit', (e)=>{
        if(e.target.matches(button) && validation.isValid == true){
            document.querySelector(form).submit()
        }
    })

    document.addEventListener('click', (e)=>{
        if(e.target.matches(button) && validation.isValid == true){
            validation.isValid = false;
            document.querySelector(form).classList.toggle('form__none');
            document.querySelector(reverse).classList.toggle('reverse__active');
        }
    })

    document.addEventListener('click', (e)=>{
        if(e.target.matches(input)){

            document.querySelector(text).textContent = `You selected ${e.target.value} of 5`
        }
    })

}



