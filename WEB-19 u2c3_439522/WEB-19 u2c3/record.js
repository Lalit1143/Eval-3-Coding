// fill in javascript code here

document.querySelector("form").addEventListener("submit",myFunction);

function myFunction(event){
   event.preventDefault(); 

    let Name = document.querySelector("#name").value;

    let ID = document.querySelector("#employeeID").value;

    let Department = document.querySelector("#department").value;

    let Experience = document.querySelector("#exp").value;

    let Email = document.querySelector("#email").value;

    let Mobile = document.querySelector("#mbl").value;

console.log(Name, ID, Department, Experience, Email, Mobile);

let tr = document.createElement("tr");

let td1 = document.createElement("td");
td1.innerText=Name

let td2 = document.createElement("td");
td2.innerText=ID

let td3 = document.createElement("td");
td3.innerText= Department

let td4 = document.createElement("td");
td4.innerText= Experience
let years = Number(Experience);

let td5 = document.createElement("td");
td5.innerText= Email

let td6 = document.createElement("td");
td6.innerText= Mobile

let td7 = document.createElement("td");
if(years > 5 ){
    td7.innerText ="Senior"
}else if(years =2 - 5){
    td7.innerText = "Junior"
}else if(years <= 1){
td7.innerText = "Fresher"
}

let td8 = document.createElement("td");
td8.innerText= "DELETE";

tr.append(td1, td2, td3, td4, td5, td6, td7, td8);

document.querySelector("tbody").append(tr);
}