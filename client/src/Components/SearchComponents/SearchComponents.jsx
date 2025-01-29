import "./SearchComponents.css";
import SearchUserCard from "./SearchUserCard";

const SearchComponents = () => {
  return (
    <div className="SearchContainer">
      <div className="px-3 pb-5">
        <h1 className="flex justify-between text-xl pb-5">Search</h1>

        <input className="searchInput" type="text" placeholder="Search..." />
      </div>
      <hr />
      <div className="">
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <SearchUserCard />
        ))}
      </div>
    </div>
  );
};

export default SearchComponents;

// import "./SearchComponents.css";
// import SearchUserCard from "./SearchUserCard";

// const SearchComponents = ({ onClose }) => {
//   return (
//     <div className="SearchContainer">
//       <div className="px-3 pb-5">
//         <h1 className="flex justify-between text-xl pb-5">
//           Search
//           <button onClick={onClose} className="text-red-500 text-lg">
//             ✖
//           </button>
//         </h1>

//         <input className="searchInput" type="text" placeholder="Search..." />
//       </div>
//       <hr />
//       <div className="searchResults">
//         {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
//           <SearchUserCard key={index} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchComponents;
