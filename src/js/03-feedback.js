import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput,500));

populateText();
 
function onInput(evt) {
    const { name, value } = evt.target;
    const formData = JSON.parse(localStorage.getItem("feedback-form-state")) || '{}';
    formData[name] = value;    
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));    
};

function populateText(){
    const getMessage = localStorage.getItem("feedback-form-state");

    if (getMessage) {
        const getObject = JSON.parse(getMessage);
        if (getObject) {
            Object.keys(getObject).forEach((key) => {
                refs.form.elements[key].value = getObject[key];
            });
        }
    }
}

function onFormSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData(refs.form);
    formData.forEach((value, key) => {
        console.log(key, value);
    });
    
};


// Мой вариант

// const refs = {
//     form: document.querySelector('.feedback-form'),
//     emailInput : document.querySelector('[name="email"]'),
//     messageInput :document.querySelector('[name="message"]'),
// }

// refs.form.addEventListener('submit', onFormSubmit);
// refs.form.addEventListener('input', throttle(onInput,500));

// populateText();


// let formData = {
//     email: "",
//     message:"",};  
// function onInput(evt) {
//     if (!getObject) {
//     formData[evt.target.name] = evt.target.value;    
//     } else
//     formData = getObject;
//     formData[evt.target.name] = evt.target.value;    
//     localStorage.setItem("feedback-form-state", JSON.stringify(formData));    
// };


// const getMessage = localStorage.getItem("feedback-form-state");
// let getObject = JSON.parse(getMessage);
 
// function populateText(){
//     const getMessage = localStorage.getItem("feedback-form-state");

//     if (getMessage) {
//         const getObject = JSON.parse(getMessage);
//         refs.emailInput.value = getObject.email; 
//         refs.messageInput.value = getObject.message;
//     }
// }

// function onFormSubmit(evt) {
//     evt.preventDefault();
//     const rezult = localStorage.getItem("feedback-form-state");
//     const rezultParse = JSON.parse(rezult); 
//     if (refs.emailInput.value  === ''|| refs.messageInput.value === '') {
//     return alert ('Заполните все поля');
//     } console.log(rezultParse);
//      evt.currentTarget.reset();
//     localStorage.removeItem("feedback-form-state");
//     getObject = {
//         email: "",
//         message:"",
//     };

// };