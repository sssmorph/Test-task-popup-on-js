
const openPopupButton = document.querySelector('.button-container__button');
const popupBlock = document.querySelector('.popup-block__background');
const popupSubmit = document.querySelector('.popup-block__submit-button');
const dataContainer = document.querySelector('.data-container');
const jsonContaineer = document.querySelector('.json-text');
const dataOfForm = {
    email:"",
    phone:"",
    firstName:"",
    lastName:"",
    age:""
};
let json; 



openPopupButton.addEventListener('click',()=>{
    popupBlock.classList.toggle("hidden");
});

popupBlock.addEventListener('click', (e)=>{
    if(e.target === popupBlock){
        popupBlock.classList.toggle("hidden");
    }
});

popupSubmit.addEventListener('click',function(){

    for(formChild of document.querySelector('.form-block').children){
        if(!formChild.value){
            dataOfForm.email = '';
            dataOfForm.phone = '';
            dataOfForm.firstName = '';
            dataOfForm.lastName = '';
            dataOfForm.age = '';
            alert("Вы заполнили не все поля!");
            return;
        }
        
        dataOfForm[formChild.classList[1]] = formChild.value;
        formChild.value = '';
        
    };

    dataContainer.innerHTML = '';
    jsonContaineer.innerHTML = '';

    const arr = Object.entries(dataOfForm);
    
    arr.forEach((el)=>{
        const newElement = document.createElement('li');
        newElement.innerHTML = el[0] + ':' + el[1];
        dataContainer.appendChild(newElement);
    });

    json = JSON.stringify(dataOfForm); 
    jsonContaineer.innerHTML = `json строка: ${json}`; 
    
    popupBlock.classList.toggle("hidden"); 
});


