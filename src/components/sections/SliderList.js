import React from 'react';
import { useGetSlidersQuery } from '../../services/api';
import Slider from '../common/Slider';

const SliderList = () => {
  const { data: sliders, isLoading, isError } = useGetSlidersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching sliders.</div>;
  }

  const displayedSliders = sliders?.response?.records?.data?.slice(0, 3);

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
