import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const initialProducts = [
    {
      id: 1,
      logo: "https://tektelic.com/uploads/product/DG/product-images9.png",
      title: "Smart Room PIR Sensor",
      description: "LoRaWAN® connected Home and Office Environment Monitoring",
      type: "sensor",
    },
    {
      id: 2,
      logo: "https://tektelic.com/uploads/product/Devices-Website-Scale/smart-room-sensor-3.png",
      title: "Smart Room Base Sensor",
      description: "LoRaWAN® connected Home and Office Environment Monitoring",
      type: "sensor"
    },
    {
      id: 3,
      logo: "https://tektelic.com/uploads/product/CO2_ISO-3.svg",
      title: "Smart Room CO2",
      description: "LoRaWAN® connected Indoor Ambient Environment Monitoring",
      type: "sensor"
    },
    {
      id: 4,
      logo: "https://tektelic.com/uploads/product/Devices-Website-Scale/Micro.png",
      title: "KONA Micro Gateway",
      description: "Enterprise LoRaWAN® Gateway for Mission Critical Deployments",
      type: "gateway"
    },
    {
      id: 5,
      logo: "https://tektelic.com/uploads/product/KONA-Enterprise-new-2-3.svg",
      title: "KONA Enterprise Gateway",
      description: "Highly Optimized Cost-Effective Gateway for Enterprise Deployments",
      type: "gateway"
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
              <label><input className="checkbox" type="checkbox" id="type" name="gateway" checked={false} onChange={() => {}}/>Gateways</label>
            </div>
            <div className="sidebar-item">
              <label><input className="checkbox" type="checkbox" id="type" name="sensors" checked={false} onChange={() => {}}/>Sensors</label>
            </div>
          </div>
        </div>
        <div className="page-content">
          {products.map(product => (
            <div key={product.id} className="device">
              <div className="device-logo">
                <img className="device-logo-img" src={product.logo}/>
              </div>
              <div className="device-title">{product.title}</div>
              <div className="device-description">{product.description}</div>
              <div className="wishlist-icon wishlist-icon--active" onClick={() => {}}/>
            </div>
          ))}
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
