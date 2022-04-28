import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    emailInput : document.querySelector('[name="email"]'),
    messageInput :document.querySelector('[name="message"]'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput,500));

populateText();

const formData = {};  
  
function onInput(evt) {
    formData[evt.target.name] = evt.target.value;

  localStorage.setItem("feedback-form-state", JSON.stringify(formData)); 
};

function populateText(){
    const getMessage = localStorage.getItem("feedback-form-state");

    if (getMessage) {
        const getObject = JSON.parse(getMessage);
    
        refs.emailInput.value = getObject.email; 
        refs.messageInput.value = getObject.message;
    }
}

function onFormSubmit(evt) {
    evt.preventDefault();
    const rezult = localStorage.getItem("feedback-form-state");
    console.log(JSON.parse(rezult) )
    evt.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
};