import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "../styles/catalogList.css";

const categories = [
  {
    name: "Women",
    path: "/women",
  },
  {
    name: "Men",
    path: "/men",
  },
  {
    name: "Kids",
    path: "/kids",
  },
];
function CatalogList() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onCategoryClicked = (value) => () => {
    setSelectedCategory(value);
    setIsOpen(false);
    console.log(selectedCategory);
  };

  return (
    <>
      <div className="DropDownContainer">
        <div className="DropDownHeader" onClick={toggling}>
          {selectedCategory || "Women"}
        </div>
        {isOpen && (
          <div className="DropDownListContainer">
            <ul className="DropDownList">
              {categories.map((category) => (
                <li className="ListItem">
                  <Link
                    to={category.path}
                    onClick={onCategoryClicked(category.name)}
                    key={Math.random()}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default CatalogList;
