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
  console.log(drinks);
  

  document.querySelector('#root').innerHTML = render(
    <div className="page">
      <Header />
      <main>
        <Banner />
        <Menu drinks={drinks} />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
  
  // Posluchače
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
};


loadPage();