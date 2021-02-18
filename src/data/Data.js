import Icon1 from "assets/icon/home-02-51x70.png";
import Icon2 from "assets/icon/home-03-58x69.png";
import Icon3 from "assets/icon/home-04-103x70.png";
// Slide Img
import slideImg1 from "assets/img/6.png";
import slideImg2 from "assets/img/6.png";
import slideImg3 from "assets/img/7.png";
//Product Img
import img1 from "assets/img/Propulsion.png";
import img2 from "assets/img/4K Camera.png";
import img3 from "assets/img/Airframe & Body Set.png";
import img4 from "assets/img/Polarizing Filters.png";
//userImg
import user1 from "assets/img/user1.jpg";
import user2 from "assets/img/user2.jpg";
import user3 from "assets/img/user3.jpg";

export const data = {
  infoDronHome: [
    {
      id: 1,
      title: "iStep Inspire 1 Pro",
      info:
        " Inspire 1 Pro by iStep is a precision-engineered drone which isspecifically designed for easy flying, making it perfect to flyinside or to record action shots whilst on the move. Its foldablestructure makes it an essential item for any adventure!",
    },
    {
      id: 2,
      title: "ReFluxSpark Lite Edition",
      info:
        " A small yet powerful drone that turns the sky into your creative canvas easily and without worry, helping you make every moment an aerial moment. Its compact size hides a high degree of complexity that makes it outstanding.",
    },
    {
      id: 3,
      title: "Nox Magic 5 Elite",
      info:
        "The Magic 5 contains all of the tried-and-true features you’d expect to find in a modern drone, like GPS navigation, auto take-offs, and auto landings, intelligent high power flight battery, a built-in database of no-fly zones etc.",
    },
  ],
  Description: [
    {
      id: 1,
      src: Icon1,
      title: "POWERFUL ANTENNA",
      info:
        "Thanks to the high-quality omnidirectional 5.8 GHz antenna, our drones can receive the signal from almost any distance and location.",
    },
    {
      id: 2,
      src: Icon2,
      title: "30-MINUTE FLIGHT TIME",
      info:
        "With extended battery capacity, we guarantee long flight time that will help make great use of your favorite drone.",
    },
    {
      id: 3,
      src: Icon3,
      title: "FLIGHT CONTROL",
      info:
        "Our new drones have an improved set of sensors that give them better control even in the most complex environment and situations.",
    },
  ],
  SliderData: [
    {
      id: 1,
      title: "iStep Inspire 1 Pro",
      src: slideImg1,
      info:
        "Combining excellent build quality, features and handling with superb video performance, the DJI Inspire 1 is one of the best drones in the air right now. It's certainly not for the amateur user or those on a budget, but for industry professionals, it's highly recommended. This drone was created for professional users who want crisp 4K aerial video footage and pin-sharp photos.",
      maxSped: "18 m/s (ATTI mode, no wind)",
      weight: "3400 g",
      battery: "6000 mAh 2S liPo",
      camera: "6K Video | 12MP | 360⁰ RANGE | 3-AMIX GIMBAL",
      price: "$1300",
    },
    {
      id: 2,
      title: "ReFluxSpark Lite Edition",
      src: slideImg2,
      info:
        "Meet Spark Lite, a mini drone that features all of ReFlux's signature technologies, allowing you to seize the moment whenever you feel inspired. With intelligent flight control options, a mechanical gimbal, and a camera with incredible image quality, Spark empowers you to push your creative boundaries and achieve more.",
      maxSped: "5 m/s (S-mode)",
      weight: "297 g",
      battery: "5000 mAh liPo 4S",
      camera: "4K Video | 20MP | 100Mbps vido bitrate",
      price: "$1500",
    },
    {
      id: 3,
      title: "ReFluxSpark Lite Edition",
      src: slideImg3,

      info:
        "Meet Spark Lite, a mini drone that features all of ReFlux's signature technologies, allowing you to seize the moment whenever you feel inspired. With intelligent flight control options, a mechanical gimbal, and a camera with incredible image quality, Spark empowers you to push your creative boundaries and achieve more.",
      maxSped: "6 m/s (S-mode)",
      weight: "298 g",
      battery: "5500 mAh liPo 4S",
      camera: "1`CMOS | Electronic Shutter | 4K Video",
      price: "$2100",
    },
  ],
  productList: [
    {
      id: 1,
      name: "Propulsion System",
      src: img1,
      prace: "$1300",
    },
    {
      id: 2,
      name: "4K Camera",
      src: img2,
      prace: "$1340",
    },
    {
      id: 3,
      name: "Airframe & Body Set",
      src: img3,
      prace: "$1120",
    },
    {
      id: 4,
      name: "Polarizing Filters",
      src: img4,
      prace: "$950",
    },
  ],
  clients: [
    {
      id: 1,
      name: "Peter McMillan",
      comment:
        "“I’m not a pro in operating drones and that’s why I found the basic assistance from your staff very useful. Besides, your team has provided me with the necessary accessories for aerial photography that were very important for my photos.”",
      src: user1,
      status: "Recular Client",
    },
    {
      id: 2,
      name: "Peter McMillan",
      comment:
        "“I’m not a pro in operating drones and that’s why I found the basic assistance from your staff very useful. Besides, your team has provided me with the necessary accessories for aerial photography that were very important for my photos.”",
      src: user2,
      status: "Recular Client",
    },
    {
      id: 3,
      name: "Peter McMillan",
      comment:
        "“I’m not a pro in operating drones and that’s why I found the basic assistance from your staff very useful. Besides, your team has provided me with the necessary accessories for aerial photography that were very important for my photos.”",
      src: user3,
      status: "Recular Client",
    },
  ],
};
