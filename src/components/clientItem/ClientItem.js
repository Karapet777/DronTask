import React from "react";
import "./ClientItem.scss";
const ClientItem = ({ client }) => {
  return (
    <div className="block-client">
      <div>
        <img className="block-client__img" src={client.src} alt="clientImg" />
      </div>
      <div className="block-client__block-text">
        <p className="block-client__block-text__name">{client.name}</p>
        <p className="block-client__block-text__comment">{client.comment}</p>
        <p className="block-client__block-text__status">{client.status}</p>
      </div>
    </div>
  );
};

export default ClientItem;
