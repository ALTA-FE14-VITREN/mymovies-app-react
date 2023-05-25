import { Component } from "react";
import Card from "./assets/components/Card";
import Navbar from "./assets/components/Navbar";
import { list } from "./dummy/list.json";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="m-10 gap-y-5 gap-x-5 flex flex-row">
          {list
            ? list.map((item, index) => {
                return <Card key={index} id="list" image={item.image} title={item.title} release={item.release} />;
              })
            : undefined}
        </div>
      </div>
    );
  }
}
export default Home;
