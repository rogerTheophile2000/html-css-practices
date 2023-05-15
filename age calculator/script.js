const btnEl = document.getElementById("calculate");
const outputEl = document.getElementById("result");
const birthdayEl = document.getElementById("birthday");


btnEl.addEventListener("click", ()=> {
    const birthdayValue = birthdayEl.value;
    
    if(birthdayValue === "") {
        alert("Please enter your birthday");
    } else {
        const age = getAge(birthdayValue);
        outputEl.innerHTML = `Your age is ${age} ${age > 1 ? "years" : "year"}  old`;
    }
});

const getAge = (birthdayValue) => {
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
    
    if(month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
        age--;

    }
    return age;
}