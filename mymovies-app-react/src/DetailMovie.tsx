import { Component } from "react";
import Navbar from "./assets/components/Navbar";
import CardDetail from "./assets/components/CardDetail";
import DetailCard from "./assets/components/DetailCard";

class DetailMovie extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          <DetailCard />
        </div>
        <div className="m-10 flex flex-row gap-5 item-center">
          <CardDetail id="film" title="John Wick: Chapter 4" release="chapter 4" image="https://image.tmdb.org/t/p/w500//vZloFAK7NmvMGKE7VkF5UHaz0I.jpg" />
          <CardDetail id="film" title="Fast X " release="17 May 2023 (US)" image="https://image.tmdb.org/t/p/w500//1E5baAaEse26fej7uHcjOgEE2t2.jpg" />
          <CardDetail id="film" title="SISU" release="27 January 2023 (FI)" image="https://image.tmdb.org/t/p/w500//pnQYjDxqZ3C6reI8N0MfNi4NMkZ.jpg" />
        </div>
        <div className="m-10 flex flex-row gap-5 item-center">
          <CardDetail id="film" title="The Mother" release="20 maret 2022" image="https://image.tmdb.org/t/p/w500//vnRthEZz16Q9VWcP5homkHxyHoy.jpg" />
          <CardDetail id="film" title="The Wandering Earth 2 " release="22 Janiari 2022" image="https://image.tmdb.org/t/p/w500//pR858ihc6Ls9xohpdRJVjV787ml.jpg" />
          <CardDetail id="film" title="SISU" release="27 January 2023 (FI)" image="https://image.tmdb.org/t/p/w500//pnQYjDxqZ3C6reI8N0MfNi4NMkZ.jpg" />
        </div>
        <div className="m-10 flex flex-row gap-5 item-center">
          <CardDetail id="film1" title="The Best Man" release="22 maret 2023" image="https://image.tmdb.org/t/p/w500//c9f6mFZqkyz4AD0sxGmynE1pe0v.jpg" />
          <CardDetail id="film2" title="Fast X " release="17 May 2023 (US)" image="https://image.tmdb.org/t/p/w500//1E5baAaEse26fej7uHcjOgEE2t2.jpg" />
          <CardDetail id="film3" title="The Super Mario Bros" release="27 Mei 2021 (FI)" image="https://image.tmdb.org/t/p/w500//qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg" />
        </div>
      </div>
    );
  }
}
export default DetailMovie;
