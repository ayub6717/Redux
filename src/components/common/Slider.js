import React from 'react';

const Slider = ({ slider }) => {
  const {
    id,
    name,
    slug,
    slide
  } = slider;

  return (
    <div key={id}>
      <h2>{name}</h2>
      <p>{slug}</p>
      <div>
        {slide.slice(0, 1).map((slideItem) => (
          <div key={slideItem.id}>
            <h3>{slideItem.title_text}</h3>
            <img src={slideItem.image} alt={slideItem.title_text} />
            <p>{slideItem.sub_title_text}</p>
            <p>{slideItem.description_title_text}</p>
            <a href={slideItem.button_link} target="_blank" rel="noopener noreferrer">
              {slideItem.button_title}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
