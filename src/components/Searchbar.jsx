import {Component} from "react";

export class Searchbar extends Component {
  render() {
    return (
      <div className="search">
        <input className="searchInput" type="text" placeholder="Search..." />
      </div>
    );
  }
}
export default Searchbar;