document.getElementById("form").addEventListener("submit",handle);
let person_data = JSON.parse(localStorage.getItem("user"))||[];

function handle(event){
    
    event.preventDefault();
     
    let obj ={
     name : document.getElementById("name").value,
      email : document.getElementById("email").value,
    address : document.getElementById("address").value,
      amount : document.getElementById("amount").value,
    }
    person_data.push(obj)
    window.location.reload()


    localStorage.setItem("user",JSON.stringify(person_data))
}