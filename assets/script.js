




// Below this line is javascript for checkout page. Above this line is javascript for index page


let deductBtnArr = document.querySelectorAll('.minus-btn');
let addButtonArr = document.querySelectorAll('.plus-btn');

deductBtnArr.forEach(deductBtn => {
    deductBtn.addEventListener("click", function(){
        console.log("minus clicked")
        let currentInputBox = deductBtn.previousElementSibling
        currentInputBox.value =  currentInputBox.value - 1;
    } )  
});


addButtonArr.forEach(addButton => {
    addButton.onclick = () => {
        console.log("plus clicked")

        let currentInputBox = addButton.nextElementSibling;
        currentInputBox.value =  parseInt(currentInputBox.value) + 1;
    }
});
