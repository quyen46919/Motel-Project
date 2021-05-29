import { Box } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import './styles.scss';
import motelApi from "../../api/motelApi";
import * as parkData from "./data/skateboard-parks.json";

const useStyles = makeStyles((theme) => ({
  boxStyles: {
    width: '300px',
    maxWidth: '300px',
    height: "auto",
    overflow: "hidden",
    "& *": {
      fontSize: '17px',
      margin: "0!important",
      boxSizing: "border-box",
      padding: '0.2rem 0'
    }
  },
  titleStyles: {
    textTransform: "uppercase",
    margin: "0",
    fontSize: "19px!important",
    fontWeight: "500"
  },
  textStyles: {
    margin: "0.1rem 0",
  },
  prices: {
    fontSize: "20px!important",
    fontWeight: "400",
    margin: 0
  },
  rating: {
    padding : "0",
    margin : "0",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: '20px',
    fontWeight: '500',
    color: "#ffb400",
    "& > p" : {
      padding : "0",
      margin : "0",
      marginRight: "0.3rem",
    }
  },
}));

function Map() {
  const [selectedMotel, setSelectedMotel] = useState(null);
  const [motelList, setMotelList] = useState([]);
  const motelListFromRedux = useSelector(state => state.mainPage);
  console.log(motelListFromRedux[0]);
  const classes = useStyles();

  useEffect(() => {
    setMotelList(motelListFromRedux[0]);
  }, []);
  console.log(motelList);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedMotel(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);
  

  return (
    <div className="google-map">
      <GoogleMap
      defaultZoom={12}
      defaultCenter={{lat: 16.032460, lng: 108.218770 }}
      // defaultOptions={{ styles: mapStyles }}
    >
      {motelList.map(motel => (
        <Marker
          key={motel._id}
          position={{
            lat: motel.geometry.coordinates[0],
            lng: motel.geometry.coordinates[1]
          }}
          onClick={() => {
            setSelectedMotel(motel);
          }}
          // icon={{
          //   url: `/skateboarding.svg`,
          //   scaledSize: new window.google.maps.Size(25, 25)
          // }}
        />
      ))}

      {selectedMotel && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedMotel(null);
          }}
          position={{
            lat: selectedMotel.geometry.coordinates[0],
            lng: selectedMotel.geometry.coordinates[1]
          }}
          
        >
          <Box className={classes.boxStyles}>
                    <p className={classes.titleStyles}>
                      {selectedMotel.homeDetails.homeNumber + ' đường ' + selectedMotel.homeDetails.streetName + ', quận ' + selectedMotel.homeDetails.district + ', thành phố ' + selectedMotel.homeDetails.city} 
                    </p>
                    <p className={classes.prices}>
                      {String(selectedMotel.homeDetails.prices).replace(/(.)(?=(\d{3})+$)/g,'$1,') + " VND"}  
                    </p>
                    <div>
                        <p>Tiền điện: {selectedMotel.homeDetails.elecPrices} / kWh</p>
                    </div>
                    <div>
                        <p>Hình thức: Không chung chủ</p>
                    </div>
                    <div>
                        <p>Tiền nước: {selectedMotel.homeDetails.waterPrices} / Khối</p>
                    </div>
                    <div>
                        <p>Diện tích phòng: {selectedMotel.homeDetails.acreage}m2</p>
                    </div>
                    
                    <div>
                        <p>Số người tối đa: {selectedMotel.homeDetails.maxPeople} người</p>
                    </div>
                    <div>
                        <p>Diện tích gác lửng: {selectedMotel.homeDetails.mezzanine}m2</p>
                    </div>
              <p className="card-item__request">
                {selectedMotel.homeDetails.description}
              </p>
          </Box>
        </InfoWindow>
      )}
    </GoogleMap>
    </div>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function CustomGoogleMap() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA4h12BRnwuOh9KZk_NGDhDmzNrWjL0NMY`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
