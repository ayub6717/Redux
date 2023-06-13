import React from 'react';
import { useGetSlidersQuery } from '../api/sliderApi';
import Slide from '../../components/common/Slide';
import CardSkeleton from '../../components/Skeleton/CardSkeleton';

const Slider = () => {
    const { data: sliders, isLoading, isError } = useGetSlidersQuery();
  
    if (isLoading) {
      return <div>
        <CardSkeleton />
      </div>;
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
