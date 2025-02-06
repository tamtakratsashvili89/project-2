let section =document.querySelector("section")

fetch("https://hotelbooking.stepprojects.ge/api/Booking")
.then((item) => item.json() )
.then((data) => {        
    data.forEach((elementi)=>
    {
        (section.innerHTML += card(elementi))
    })
})    
.catch(() => section.innerHTML = "<h1> სისტემური შეცდომა, გთხოვთ სცადოთ მოგვიანებით</h1>")


function card(e){
    
    
    return `
    <div class="total">
    <div class="tree">
                <h1>${e.customerName}</h1>
                <h1>${e.customerPhone}</h1>
            </div>        
        <div class="total1">            
            <h1>${e.checkInDate}</h1>
            <h1>${e.checkOutDate}</h1>
            <h1>${e.totalPrice}</h1>
            <button onclick="delet(${e.id})"class ="butbut">${"CANCEL BOOKING"}</button>
        </div>
    </div>            `
       }

async function getInfo() {
    try {
        let card = await fetch("https://hotelbooking.stepprojects.ge/api/Booking");
        return card.json();
    } catch (error) {
        return error;
    }
}

getInfo().then((data)=>data.forEach((item)=>(section.innerHTML +=card(item))))


function delet(ee) {
    fetch(`https://hotelbooking.stepprojects.ge/api/Booking/${ee}`, {
        method: "DELETE",
        headers: {
            accept: "*/*"
        }
    })
    .then((item)=>item.text())
    .then((info)=>{
        section.innerHTML = "";
        getInfo().then((data) =>data.forEach((item) => (section.innerHTML += card(item))));
    })    
}

    


       function btnrooms() { 
        window.location.href="./rooms.html"
          }
      
       function btn0(){
        window.location.href="./index.html"
       }
       function btn3() {
        window.location.href="./booked.html"
   }

