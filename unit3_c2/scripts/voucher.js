 


async function getdata(){
    let url ="https://masai-vouchers-api.herokuapp.com/api/vouchers";

    let res = await fetch(url);

    let data = await res.json();
     append(data[0].vouchers)
    


}
getdata();

function append(data){
    let container = document.querySelector(".voucher")
    container.innerHTML="";
    data.forEach(function(ele){
    let div = document.createElement("div");
    div.setAttribute("class","voucher_list");

    let image = document.createElement("img");
    image.src = ele.image;

    let name = document.createElement("h2");
    name.innerText=ele.name

    let price = document.createElement("h3");
    price.innerText=ele.price;

    let btn = document.createElement("button")
    btn.innerText="BUY"
    btn.setAttribute("class","buy_voucher")
    btn.addEventListener("click",function(){
        addto(ele)
       
    })

    div.append(image,name,price,btn);
    container.append(div)
})
}
let purchased = JSON.parse(localStorage.getItem("purchase"))||[];
function addto(ele){
    
    
    purchased.push(ele)
    localStorage.setItem("purchase",JSON.stringify(purchased))
}

  
let person_data = JSON.parse(localStorage.getItem("user"))
displayamount(person_data)

function displayamount(person_data){
    person_data.forEach(function(ele){
        
        let h1= document.getElementById("wallet_balance");
         
        h1.innerText=ele.amount

         
    })
}
      
        
    
         
          

        
    
    
