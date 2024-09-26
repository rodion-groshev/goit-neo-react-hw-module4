import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const notify = () => toast.error("Please enter your search details.");

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value;

    if (query.trim() === "") {
      notify();
      return;
    }

    onSubmit(query);

    form.reset();
  };

  return (
    <header>
      <form className={css.searchBar} onSubmit={handleSubmit}>
        <input
          className={css.bar}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
      <Toaster position="top-right" />
    </header>
  );
};

export default SearchBar;
