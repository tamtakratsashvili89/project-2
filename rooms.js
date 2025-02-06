let section =document.querySelector("section")

fetch("https://hotelbooking.stepprojects.ge/api/Rooms/GetAll")
.then((item) => item.json() )
.then((data) => {    
    data.forEach((elementi)=>
{
    // console.log(data);
    
    (section.innerHTML += card(elementi))
}
       
       
)
})    
.catch(() => section.innerHTML = "<h1> სისტემური შეცდომა, გთხოვთ სცადოთ მოგვიანებით</h1>")


function card(e){
    return `<div class="room">
    <img src="${e.images[0].source}" alt="">
    <h1 class="rooom" >${e.name}</h1>
    <div class="booking">
        <h1 class="price">${e.pricePerNight}GEL</h1>
        <button onclick="detalebi(${e.id})" class="reservation" >BOOK NOW</button>
    </div>
  </div>`
       }

      
function detalebi (id) {
    sessionStorage.setItem("roomId", id)
    window.location.href=("./detalebi.html")
}
       
   function btn0(){
        window.location.href="./index.html"
       }
   function btn2() {
        window.location.href="./hotels.html"
     }
 
   function btn3() {
        window.location.href="./booked.html"
   }

let select = document.querySelector("select")  

   function sub(e) {
    e.preventDefault()

    let formdata = new FormData(e.target)
    let finaldata = Object.fromEntries(formdata)
    // console.log(finaldata);
        section.innerHTML = ""
    // console.log(finaldata);
    fetch("https://hotelbooking.stepprojects.ge/api/Rooms/GetFiltered", {
        method : "POST",
        headers: {
            accept: "text/plain",
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(finaldata)   
        
    })
    .then((arrow) => arrow.json())
    .then((arrowdata)=> {
        arrowdata.forEach((item1) =>  {
            console.log(item1);
            section.innerHTML += card1(item1)
        })                
    })
   }

   function card1(e){
    return `<div class="room">
    <img src="${e.images[0].source}" alt="">
    <h1 class="room" >${e.name}</h1>
    <div class="booking">
        <h1 class="price">${e.pricePerNight}GEL</h1>
        <button onclick="detalebi(${e.id})" class="reservation" >BOOK NOW</button>
    </div>
  </div>`
       }


       let burgerbar = document.querySelector(".fa-bars")
       let bar = document.querySelector(".bar")
     
      
       function fa() {
         bar.classList.toggle("bar")
     }
     
   

   