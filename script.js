let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
]

// *********** DOM tasks ***********

// selecting the result div, dropdown and button
let result = document.getElementById("result");
let dropdown = document.getElementById("dropdown");
let btn = document.getElementById("filterBtn");

function filterByProfession() {
    // setting the result div to empty
    result.innerHTML = "";

    // getting the value of the dropdown
    let dropdownValue = dropdown.value;
    console.log(dropdownValue);

    if (dropdownValue == "profession") {
        alert("Please select a profession before clicking the button");
        return;
    }

    // looping through the array and checking if the profession matches the dropdown value
    arr.forEach((item) => {

        // if the profession matches, then create a div and append it to the result div
        if (item.profession === dropdownValue) {
            let div = document.createElement("div");
            div.style.border='1px solid white';
            div.style.borderRadius='5px';
            div.style.padding='10px';
            div.innerText = item.id + ". Name:" + item.name       + "          Profession:" + item.profession      + "          Age:" + item.age;
            result.append(div);
        }
    })

}


// adding event listener to the button
btn.addEventListener("click", filterByProfession)
let addName = document.getElementById("name");
let addProfession = document.getElementById("profession");
let addAge = document.getElementById("age");
let addBtn = document.getElementById("adduser");


function addUser() {
    let Username = addName.value;
    let prf = addProfession.value;
    let age = addAge.value;

    let x = arr.length;
    ++x;

    let brr = { id: x, name: `${Username}`, profession: `${prf}` , age: `${age}`}
    if(Username !== "" && age !== "" && prf !== ""){
        arr.push(brr);
    }
    else{
        alert("enter details")
    }

    console.log(arr);

    addName.value = "";
    addAge.value = "";
    addProfession.value = "";

}

addBtn.addEventListener("click", addUser);