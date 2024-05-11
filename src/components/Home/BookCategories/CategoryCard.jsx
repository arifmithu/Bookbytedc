import React from "react";

const CategoryCard = ({ category }) => {
  console.log(category.toLowerCase());
  return (
    <div className="shadow-xl card bg-base-100 image-full">
      <figure>
        <img
          src={
            category.toLowerCase() == "sci-fi"
              ? "https://pixabay.com/photos/fantasy-sci-fi-alien-futuristic-6767623/"
              : category.toLowerCase() == "mystery"
              ? "https://i.ibb.co/d2tHH2P/tombstone-2542946-1920.jpg"
              : category.toLowerCase() == "fiction"
              ? "https://i.ibb.co/L0rtc7j/et-2006631-1920.jpg"
              : category.toLowerCase() == "fantasy"
              ? "https://i.ibb.co/5LD48vN/woman-8734993-1920.jpg"
              : "https://pixabay.com/photos/fantasy-beach-children-jellyfish-3281842/"
          }
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
