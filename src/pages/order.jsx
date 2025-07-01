import { render } from '@czechitas/render';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Order } from "../components/Order";
import '../global.css';
import './index.css';
import './order.css';

const loadOrder = async () => {
  const response = await fetch("http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image");
  const json = await response.json();
  const orderedItems = json.data;

  document.querySelector('#root').innerHTML = render(
    <div className="page">
      <Header showMenu={false} />
      <Order items={orderedItems} />
      <Footer />
    </div>
  );
};

loadOrder();


