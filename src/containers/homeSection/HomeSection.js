import React from "react";

import Drone1 from "assets/img/1.png";
import Drone2 from "assets/img/2.png";
import Drone3 from "assets/img/3.png";

import "./HomeSection.scss";
import Button from "components/button/Button";
import { data } from "data/Data";
import Item from "components/itemInfo/item";

class HomeSection extends React.Component {
  state = {
    dataMockup: [],
    imgDronShow1: true,
    imgDronShow2: false,
    imgDronShow3: false,
  };

  dronHandlerWrite1 = () => {
    const idItem = data.infoDronHome.filter((el) => el.id === 1);
    this.setState({
      dataMockup: idItem,
      imgDronShow1: true,
      imgDronShow2: false,
      imgDronShow3: false,
    });
  };
  dronHandlerWrite2 = () => {
    const idItem = data.infoDronHome.filter((el) => el.id === 2);
    this.setState({
      dataMockup: idItem,
      imgDronShow1: false,
      imgDronShow2: true,
      imgDronShow3: false,
    });
  };
  dronHandlerWrite3 = () => {
    const idItem = data.infoDronHome.filter((el) => el.id === 3);
    this.setState({
      dataMockup: idItem,
      imgDronShow1: false,
      imgDronShow2: false,
      imgDronShow3: true,
    });
  };
  componentDidMount() {
    const idItem = data.infoDronHome.filter((el) => el.id === 1);
    this.setState({
      dataMockup: idItem,
    });
  }

  render() {
    const { dataMockup, imgDronShow1, imgDronShow2, imgDronShow3 } = this.state;

    return (
      <div className="app-HomeSection-container">
        <div className="app-HomeSection-container__drone-block">
          <img
            width="650"
            className={
              imgDronShow1
                ? "write"
                : "app-HomeSection-container__drone-block__img1 "
            }
            src={Drone1}
            alt="product img"
          />
          <img
            width="650"
            className={
              imgDronShow2
                ? "write"
                : "app-HomeSection-container__drone-block__img2 "
            }
            src={Drone2}
            alt="product img"
          />
          <img
            width="650"
            className={
              imgDronShow3
                ? "write"
                : "app-HomeSection-container__drone-block__img2 "
            }
            src={Drone3}
            alt="product img"
          />
        </div>
        <div className="app-HomeSection-container__info-block">
          <div className="app-HomeSection-container__info-block__item">
            {dataMockup.map((el) => (
              <Item key={el.id} item={el} />
            ))}
          </div>

          <div>
            <Button
              className="app-HomeSection-container__info-block__btn-Buy"
              title="Buy now"
            />
            <Button
              className="app-HomeSection-container__info-block__btn-Buy"
              title="Learn more"
            />
          </div>
          <div>
            <Button
              onClick={this.dronHandlerWrite1}
              className={
                imgDronShow1
                  ? "btnBg"
                  : "app-HomeSection-container__info-block__btn-slide"
              }
            />
            <Button
              onClick={this.dronHandlerWrite2}
              className={
                imgDronShow2
                  ? "btnBg"
                  : "app-HomeSection-container__info-block__btn-slide"
              }
            />
            <Button
              onClick={this.dronHandlerWrite3}
              className={
                imgDronShow3
                  ? "btnBg"
                  : "app-HomeSection-container__info-block__btn-slide"
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeSection;
