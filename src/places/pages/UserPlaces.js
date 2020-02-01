import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const UserPlaces = props => {
  const DUMMY_PLACES = [
    {
      id: "p1",
      title: "Ayder Yaylası",
      description:
        " 1350m rakımda ladin ve kayın ormanlarıyla kaplı bir yayladır.",
      imageUrl: "https://img.timeturk.com/resim/dresim/20182/buyuk_186.jpg",
      address: "X423+W4 Yukarışimşirli, Çamlıhemşin/Rize, Türkiye",
      location: {
        lat: 40.9522736,
        lng: 41.101293
      },
      creator: "u1"
    },
    {
      id: "p2",
      title: "Ayder Yaylası",
      description:
        " 1350m rakımda ladin ve kayın ormanlarıyla kaplı bir yayladır.",
      imageUrl: "https://img.timeturk.com/resim/dresim/20182/buyuk_186.jpg",
      address: "X423+W4 Yukarışimşirli, Çamlıhemşin/Rize, Türkiye",
      location: {
        lat: 40.9522736,
        lng: 41.101293
      },
      creator: "u2"
    }
  ];
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
