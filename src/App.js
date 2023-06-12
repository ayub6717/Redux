import React from 'react';
import { useGetSlidersQuery } from './redux/slices/apiSlice';
import SliderList from './sections/SliderList';

function App() {
  const { data: sliders, isLoading, isError } = useGetSlidersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching sliders.</div>;
  }

  return (
    <div>
       <SliderList sliders={sliders} />
    </div>
  );
}

export default App;
