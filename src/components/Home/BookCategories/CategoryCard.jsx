import React, { useContext } from "react";
import { Navigate, useNavigate, useNavigation } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const CategoryCard = ({ category }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleBooksByCategory = (categ) => {
    console.log(categ);
    navigate(`books/category/${categ}`);
  };
  return (
    <div
      onClick={() => handleBooksByCategory(category)}
      className="shadow-xl card bg-base-100 image-full hover:cursor-pointer"
    >
      <figure>
        <img
          src={
            category.toLowerCase() == "sci-fi"
              ? "https://i.ibb.co/C8fHzmh/fantasy-6767623-1920.jpg"
              : category.toLowerCase() == "mystery"
              ? "https://i.ibb.co/d2tHH2P/tombstone-2542946-1920.jpg"
              : category.toLowerCase() == "fiction"
              ? "https://i.ibb.co/L0rtc7j/et-2006631-1920.jpg"
              : category.toLowerCase() == "fantasy"
              ? "https://i.ibb.co/5LD48vN/woman-8734993-1920.jpg"
              : category.toLowerCase() == "history"
              ? "https://i.ibb.co/SRptRXs/images-3.jpg"
              : "https://i.ibb.co/FmwnrY0/avenue-815297-1920.jpg"
          }
          alt="Book image"
          className="w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category.toUpperCase()}</h2>
        <p>Browse all the books of {category} category.</p>
        {/* <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default CategoryCard;
