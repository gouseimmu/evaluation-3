let purchased = JSON.parse(localStorage.getItem("purchase"));
display(purchased)

function display(purchased){
    let container1 = document.getElementById("purchased_vouchers")
    container1.innerHTML=""
    purchased.forEach(function(ele){
       
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = ele.image;
    
        let name = document.createElement("h2");
        name.innerText=ele.name
    
        let price = document.createElement("h3");
        price.innerText=ele.price;

        div.append(image,name,price);
        container1.append(div)
    })
}



var person_data = JSON.parse(localStorage.getItem("user"))
displayamount(person_data)

function displayamount(person_data){
    person_data.forEach(function(ele){
        let h1= document.getElementById("wallet_balance");

         
        h1.innerText=ele.amount;    
    })
}
  