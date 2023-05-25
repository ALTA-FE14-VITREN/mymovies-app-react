import React, { Component } from "react";

interface CardFilmProps {
  id: string;
  title?: string;
  release?: string;
  image?: string;
}

class Card extends Component<CardFilmProps> {
  render() {
    const { id, title, release, image } = this.props;
    return (
      <div>
        <div className="card w-96 bg-base-100 shadow-xl " id={id}>
          <figure className="px-100">
            <img src={image} alt="Shoes" />
          </figure>
          <button className="btn btn-primary text-center">Add To Favorit</button>
          <div className="card-body text-white items-center text-center">
            <h2 className="card-title  ">{title}</h2>
            <p className="text-center">{release}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-center">Detail Film</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
