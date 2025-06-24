import { render } from '@czechitas/render';
import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Menu } from "../components/Menu";
import { Gallery } from "../components/Gallery";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import '../global.css';
import './index.css';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </div>
);
