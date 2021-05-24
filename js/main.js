
function navBarAnimation() {
  const navbar = document.getElementById("ul");
  const liitems = navbar.querySelectorAll(".header ul li");
  const sections = document.querySelectorAll("#imgs, #about");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(element => {
      if (pageYOffset >= element.offsetTop - 300 && 
          pageYOffset <= element.offsetTop + element.clientHeight - 300) {
        element.classList.add("active");
        liitems.forEach(liElement => {
          if (element.classList.contains("active")) {
            if (liElement.classList.contains(element.id)) {
              liElement.classList.add("active");
            } else {
              liElement.classList.remove("active");
            }
          }
        });
      } else {
        element.classList.remove("active");
      }
    });
  });
}

function picAnimation() {
  let text = document.getElementById("midtext");
  let bird1 = document.getElementById("bird1");
  let bird2 = document.getElementById("bird2");
  let forest = document.getElementById("forest");
  let rocks = document.getElementById("rocks");

  window.addEventListener('scroll', () => {
    let scrolledYValue = window.scrollY;

    text.style.top = scrolledYValue * -0.1 + 'vh';
    bird1.style.top = scrolledYValue * -0.02 + '%';
    bird1.style.left = scrolledYValue * 0.03 + '%';
    bird2.style.top = scrolledYValue * -0.03 + '%';
    bird2.style.left = scrolledYValue * -0.04 + '%';
    forest.style.top = scrolledYValue * -0.01 + '%';
    rocks.style.top = scrolledYValue * 0.005 + '%';

    let header = document.getElementsByClassName("header");
    header.item(0).classList.toggle('sticky', window.scrollY > 0);
  

  });
}