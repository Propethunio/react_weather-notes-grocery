import "../styles/search.css";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <MdSearch className="search-icon" />
      <input
        onChange={(e) => handleSearchNote(e.target.value)}
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
