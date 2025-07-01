import { render } from '@czechitas/render';
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Menu } from "../components/Menu";
import { Gallery } from "../components/Gallery";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import '../global.css';
import './index.css';

//api
const loadPage = async () => {
  const response = await fetch("http://localhost:4000/api/drinks");
  const json = await response.json();
  const drinks = json.data;
  
  document.querySelector('#root').innerHTML = render(
    <div className="page">
      <Header showMenu={true} />
      <main>
        <Banner />
        <Menu drinks={drinks} />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );

  // Posluchače navigace
  const rollout = document.querySelector(".rollout-nav");
  const navBtn = document.querySelector(".nav-btn");

  navBtn.addEventListener("click", () => {
    rollout.classList.toggle("nav-closed");
  });

  rollout.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      rollout.classList.add("nav-closed");
    }
  });

  // Posluchače objednání 
  const formEls = document.querySelectorAll(".drink__controls");

  formEls.forEach((formEl) => {
  formEl.addEventListener("submit", async (e) => {
    e.preventDefault();

    const drinkId = formEl.dataset.id;
    const ordered = formEl.dataset.ordered === "true";
    const newOrderedState = !ordered;

    const response = await fetch(`http://localhost:4000/api/drinks/${drinkId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        { op: "replace", path: "/ordered", value: newOrderedState },
      ]),
    });

    const data = await response.json();
    console.log("Odpověď od API:", data);
    window.location.reload();
  });
});


};

loadPage();
