let roomId = sessionStorage.getItem("roomId")
let section =document.querySelector("section")

fetch(`https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${roomId}`)
.then((item)=> item.json())
.then((data)=> {
section.innerHTML += 
`<img width ="400" src="${data.images[0].source}" alt="">`
}  )


function book(e) {
e.preventDefault()

let formdata = new FormData(e.target)
let finalform = Object.fromEntries(formdata)
finalform.roomId = roomId    

fetch("https://hotelbooking.stepprojects.ge/api/Booking", {
    method: "POST",
    headers: {
        accept: "*/*",
        "Content-Type" : "application/json"
    },
    body: JSON.stringify(finalform)
})
.then((pasuxi) => pasuxi.text())
.then ((saboloo) => {
    section.innerHTML += `${alert("ნომერი დაჯავშნილია")}`
})
    
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
function btnrooms() { 
    window.location.href="./rooms.html"
      }




