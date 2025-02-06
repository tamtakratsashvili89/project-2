let section =document.querySelector("section")

fetch("https://hotelbooking.stepprojects.ge/api/Hotels/GetAll")
.then((item) => item.json() )
.then((data) => {    
    data.forEach((elementi)=>(section.innerHTML += card(elementi))
    )
})    
.catch(() => section.innerHTML = "<h1> სისტემური შეცდომა, გთხოვთ სცადოთ მოგვიანებით</h1>")


function card(e){
    return `<div class="room">
        <img src="${e.featuredImage}" alt="">
        <div class="booking">
        <h1 class="rooom" >${e.name}</h1>
        <button onclick="view(${e.id})"  class="view">VIUW ALL</button>
    </div>
  </div>`
       }

      function view(et) {
      fetch (`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${et}`)
      .then((item=> item.json()))
      .then((data)=> {   
        section.innerHTML=""        
          data.rooms.forEach((rame)=>{                    
          (section.innerHTML += cardi(rame))
        })
      })
        
       }

       function cardi(e){
        return `<div class="room">
        <img src="${e.images[0].source}" alt="">
        <h1 class="rooom" >${e.name}</h1>
        <div class="booking">
            <h1 class="price">${e.pricePerNight}GEL</h1>
            <button onclick="detalebi(${e.id})" class="reservation" >BOOK NOW</button>
        </div>
      </div>`
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

   let burgerbar = document.querySelector(".fa-bars")
   let bar = document.querySelector(".bar")
 
  
   function fa() {
     bar.classList.toggle("bar")
 }