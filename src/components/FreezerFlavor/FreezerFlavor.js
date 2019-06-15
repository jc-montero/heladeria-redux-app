import React from 'react';

import Button from '../Button/Button';

import './FreezerFlavor.css';

const FreezerFlavor = ({ flavorName, scoops, onClickRestock }) => {
  return (
    <div className="freezer-flavor">
      <div className="freezer-flavor__inner">
        <div className="freezer-flavor__scoops-counter">{scoops}</div>
        <div className="freezer-flavor__name">{flavorName}</div>
      </div>
      <Button className="freezer-flavor__restock-button" label="Restock" onClick={onClickRestock}/>
    </div>
  );
};

export default FreezerFlavor;
