import React from 'react';
import location from '../assets/location.svg';

const List = ({ data }) => {
  return (
    <div className="card">
      <div className="img-wrap">
        <img src={data.imageUrl} alt="Place" className="img" />
      </div>
      <div className="info">
        <div className="loc-wrap">
          <div className="loc">
            <img src={location} alt="loc" />
            <p className="loc-txt">{data.location}</p>
          </div>
          <a href={data.googleMapsUrl} className="map">
            View on Google Maps
          </a>
        </div>
        <header>
          <h1 className="title">{data.title}</h1>
          <p className="date">
            {data.startDate} - {data.endDate}
          </p>
          <p className="text">{data.description}</p>
        </header>
      </div>
    </div>
  );
};

export default List;
