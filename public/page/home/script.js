let buttonsFooter = document.querySelectorAll(".buttonFooter");

buttonsFooter.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.getAttribute("data-id") == "1") {
      window.location.href = "../home/index.html";
    } else if (element.getAttribute("data-id") == "2") {
      window.location.href = "../add/index.html";
    } else if (element.getAttribute("data-id") == "3") {
      window.location.href = "../calendary/index.html";
    }
  });
});

let buttonsContentPage = document.querySelectorAll(".item");

buttonsContentPage.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.getAttribute("data-item") == 1) {
      let circle = element.querySelector(".itemCircle");
      circle.querySelector(".fa-circle").classList.remove("fa-regular");
      circle.querySelector(".fa-circle").classList.add("fa-solid");
      setTimeout(() => {
        circle.querySelector(".fa-circle").classList.add("fa-regular");
        circle.querySelector(".fa-circle").classList.remove("fa-solid");
      }, 1000);
    } else if (element.getAttribute("data-item") == 2) {
      let circle = element.querySelector(".itemCircle");
      circle.querySelector(".fa-circle").classList.remove("fa-regular");
      circle.querySelector(".fa-circle").classList.add("fa-solid");
      setTimeout(() => {
        circle.querySelector(".fa-circle").classList.add("fa-regular");
        circle.querySelector(".fa-circle").classList.remove("fa-solid");
      }, 1000);
    } else if (element.getAttribute("data-item") == 3) {
      let circle = element.querySelector(".itemCircle");
      circle.querySelector(".fa-circle").classList.remove("fa-regular");
      circle.querySelector(".fa-circle").classList.add("fa-solid");
      setTimeout(() => {
        circle.querySelector(".fa-circle").classList.add("fa-regular");
        circle.querySelector(".fa-circle").classList.remove("fa-solid");
      }, 1000);
    } else if (element.getAttribute("data-item") == 4) {
      let circle = element.querySelector(".itemCircle");
      circle.querySelector(".fa-circle").classList.remove("fa-regular");
      circle.querySelector(".fa-circle").classList.add("fa-solid");
      setTimeout(() => {
        circle.querySelector(".fa-circle").classList.add("fa-regular");
        circle.querySelector(".fa-circle").classList.remove("fa-solid");
      }, 1000);
    }
  });
});

let buttonConfig = document.querySelector(".configSpan");
let buttonBackConfig = document.querySelector(".backContent");
let buttonNotification = document.querySelector(".notificationSpan");
let buttonBackNotification = document.querySelector(
  ".backContentNotificaciones"
);

buttonConfig.addEventListener("click", () => {
  document.querySelector(".spawnConfiguracion").style.left = "0%";
});

buttonNotification.addEventListener("click", () => {
  document.querySelector(".spawnNotificaciones").style.right = "0%";
});

buttonBackNotification.addEventListener("click", () => {
  document.querySelector(".spawnNotificaciones").style.right = "-100%";
});

buttonBackConfig.addEventListener("click", () => {
  document.querySelector(".spawnConfiguracion").style.left = "-100%";
});

//Spawn Notificaciones

let buttonsTrayNotifications = document.querySelectorAll(".itemTray");
let contClicksTrayNotifications = 0;

buttonsTrayNotifications.forEach((element) => {
    if(!element.classList.contains("liActive")){
        element.addEventListener("click", () => {
            buttonsTrayNotifications.forEach((element) => {
              element.style.backgroundColor = "rgb(255, 255, 255, .2)";
            });
        
            element.style.backgroundColor = "rgba(69, 69, 69, 0.5)";
          });
    }else{
        element.addEventListener("click", () =>{
            contClicksTrayNotifications++;
            if(contClicksTrayNotifications % 2 != 0){
                element.querySelector(".arrow").style.transform = "rotate(-180deg)";
            }else{
                element.querySelector(".arrow").style.transform = "rotate(0deg)";
            }
        });
    }
});

let buttonsGeneral = document.querySelector(".configGeneral").querySelectorAll(".itemConfig");

buttonsGeneral.forEach((element) =>{
  element.addEventListener("click", () =>{
    if(element.getAttribute("data-general") == "1"){
      let color = prompt("Digite algo");
      let root = document.documentElement;
      root.style.setProperty("--background_1", color);
    }
  });
})

//Spawn Notificaciones

var map = L.map("map").setView([51.505, -0.09], 13);

// Agregar una capa de mapa base
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

document.addEventListener("DOMContentLoaded", function () {
  obtenerUbicacion();
});
  
function obtenerUbicacion() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;

      // Crear un marcador en la ubicación del usuario
      var marker = L.marker([lat, lon]).addTo(map);
      marker.bindPopup("¡Tu ubicación!").openPopup();

      // Centrar el mapa en la ubicación del usuario
      map.setView([lat, lon], 13);
    });
  } else {
    alert("Tu navegador no admite la geolocalización.");
  }
}


let buttonLocation = document.querySelector(".location");
buttonLocation.addEventListener("click", obtenerUbicacion);

