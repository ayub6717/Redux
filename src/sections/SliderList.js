import React from 'react';
import Slider from '../components/Slider';

const SliderList = ({ sliders }) => {
  const displayedSliders = sliders?.response?.records?.data?.slice(0, 10);
  console.log(displayedSliders);

  if (!displayedSliders?.length) {
    return <div>No sliders available.</div>;
  }

  return (
    <div>
      {displayedSliders.map((slider) => (
        <Slider key={slider.id} slider={slider} />
      ))}
    </div>
  );
};

export default SliderList;
