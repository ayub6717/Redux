import React from 'react';
import { useGetSlidersQuery } from '../../redux/api/apiSlice';
import Slide from '../common/Slide';

const Slider = () => {
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
          <Slide key={slider.id} slider={slider} />
        ))}
      </div>
    );
  };
  
  export default Slider;
