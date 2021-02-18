import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { data } from "data/Data";
import ClientItem from "components/clientItem/ClientItem";

import "./Client.scss";
const Clients = () => {
  return (
    <div className="app-client-container">
      <div className="app-client-container__block-carousel">
        <Carousel>
          {data.clients.map((el) => (
            <Carousel.Item key={el.id}>
              <div className="app-slider-container__block">
                <ClientItem key={el.id} client={el} />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Clients;
