// document.getElementById("count-el").innerText = 5;

let count = 0;
let countEl = document.getElementById("count-el");
let previous_entries_section = document.getElementById("previous_entries");

function increment() {
    count = count + 1;
    console.log(count);
    countEl.textContent = count;
}

function save() {
    console.log(`this ${count} is from the save() function`);
    previous_entries_section.innerText += ` - ${count}`;
    count = 0;
    countEl.textContent = count;
}

// welcome the user
let welcomeEl = document.getElementById("welcome-el");
let name = prompt("Hi here 👋, \nPlease enter your name:");
let message = `Hi ${name}, welcome to the people counter app.`
welcomeEl.textContent = message;
welcomeEl.textContent += "👋";