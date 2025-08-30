import { useDispatch, useSelector } from "react-redux";
import "./SearchComponents.css";
import SearchUserCard from "./SearchUserCard";
import { searchUserAction } from "../../Redux/User/Action";

const SearchComponents = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { user } = useSelector((store) => store); // for redux

  const handleSearch = (e) => {
    dispatch(searchUserAction({ jwt: token, query: e.target.value }));
  };

  return (
    <div className="SearchContainer">
      <div className="px-3 pb-5">
        <h1 className="flex justify-between text-xl pb-5">Search</h1>

        <input
          onChange={handleSearch}
          className="searchInput"
          type="text"
          placeholder="Search..."
        />
      </div>
      <hr />
      <div className="">
        {user.searchUser?.map((item) => (
          <SearchUserCard user={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchComponents;
