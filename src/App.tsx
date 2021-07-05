import React, {useState} from 'react';
import './App.css';

function App() {
  const initialProducts = [
    {
      id: 1,
      logo: "https://tektelic.com/uploads/product/DG/product-images9.png",
      title: "Smart Room PIR Sensor",
      description: "LoRaWAN® connected Home and Office Environment Monitoring",
      type: "sensor",
    }
  ];
  const [products, setProducts] = useState(initialProducts);

  return (
    <div className="page-layout">
      <div className="page-header">
        <div className="logo">
          <img src="/tektelic-logo.svg"/>
        </div>
        <a href="#" className="header-link">
          Products
        </a>
        <a href="#" className="header-link">
          About
        </a>
      </div>
      <div className="content-wrapper">
        <div className="page-sidebar">
          <div className="sidebar-block">
            <div className="sidebar-item sidebar-item--bold">Product type</div>
            <div className="sidebar-item">
              <label><input className="checkbox" type="checkbox" id="type" name="gateway" checked={false}
                            onChange={() => {
                            }}/>Gateways</label>
            </div>
            <div className="sidebar-item">
              <label><input className="checkbox" type="checkbox" id="type" name="sensors" checked={false}
                            onChange={() => {
                            }}/>Sensors</label>
            </div>
          </div>
        </div>
        <div className="page-content">
          <div key={products[0].id} className="device">
            <div className="device-logo">
              <img className="device-logo-img" src={products[0].logo}/>
            </div>
            <div className="device-title">{products[0].title}</div>
            <div className="device-description">{products[0].description}</div>
            <div className="wishlist-icon wishlist-icon--active" onClick={() => {
            }}/>
          </div>
          <div className="wishlisted">
            <div className="wishlisted-title">Wishlisted</div>
            <div className="wishlisted-items">
              {products.map(wishlistedProduct => (
                <div key={wishlistedProduct.id} className="wishlisted-item">{wishlistedProduct.title}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
