import { Component } from "react";

interface DetailCardFilmProps {
  id: string;
  title?: string;
  release?: string;
  image?: string;
}
class CardDetail extends Component<DetailCardFilmProps> {
  render() {
    const { id, title, release, image } = this.props;
    return (
      <div className="text-white">
        <div className="card lg:card-side bg-base-100 shadow-xl" id={id}>
          <figure>
            <img src={image} alt="Album" />
          </figure>
          <div className="card-body text-white">
            <h2 className="card-title">{title}</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Play</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CardDetail;
