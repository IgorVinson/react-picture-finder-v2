import {Component} from "react";

export class Searchbar extends Component {
  render() {
      const {onSubmit } = this.props;
    return (
        <form className="search-form" onSubmit={onSubmit}>
            <input
                className="searchInput"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
            />
        </form>
    );
  }
}
export default Searchbar;