let section =document.querySelector("section")
let btn1  =document.querySelectorAll("#btn1")

fetch("https://hotelbooking.stepprojects.ge/api/Rooms/GetAll")
.then((item) => item.json() )
.then((data) => {    
    data.forEach((elementi)=>(section.innerHTML += card(elementi)))
})    
.catch(() => section.innerHTML = "<h1> სისტემური შეცდომა, გთხოვთ სცადოთ მოგვიანებით</h1>")


function card(e){
    return `<div class="room">
    <img src="${e.images[0].source}" alt="">
    <h1 class="rooom" >${e.name}</h1>
    <div class="booking">
        <h1 class="price">${e.pricePerNight}GEL</h1>
        <button class="reservation" >BOOK NOW</button>
    </div>
  </div>`
       
}


function btnrooms() { 
  window.location.href="./rooms.html"
    }

    function btn2() {
       window.location.href="./hotels.html"
    }

  function btn3() {
       window.location.href="./booked.html"
  }

  
  
  let burgerbar = document.querySelector(".fa-bars")
  let bar = document.querySelector(".bar")

 
  function fa() {
    bar.classList.toggle("bar")
}


