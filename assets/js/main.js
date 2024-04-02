function changeDataAos(element) {
  if (element) {
    element.setAttribute("data-aos", "fade-down");
  }
}

if (screen.width <= 800) {
  const h1Element = document.querySelector('h1[data-aos="fade-right"]');
  const pElement = document.querySelector('p[data-aos="fade-right"]');
  const buttonElement = document.querySelector('button[data-aos="fade-right"]');

  changeDataAos(h1Element);
  changeDataAos(pElement);
  changeDataAos(buttonElement);
}

function limontahiti(){
  window.location = "limon-tahiti";
}

function limonyulima(){
  window.location = "limon-yulima";
}

function mangotommy(){
  window.location = "mango-tommy";
}

function contactenos(){
  window.location = "https://api.whatsapp.com/send?phone=+3143260589&text=Hola%20Agro%20Tree%20of%20God";
}