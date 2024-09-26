import { useEffect, useState } from "react";
import Modal from "react-modal";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import fetchImages from "./components/Api/api";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState({});

  const handleSearch = (query) => {
    setQuery(query);
    setImages([]);
  };

  const handleClick = () => {
    setCurrentPage(currentPage + 1);
  };

  const openModal = (event) => {
    setIsOpen(true);
    setModalImg({
      url: event.target.attributes.value.value,
      discription: event.target.attributes.alt.value,
    });
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    const setApi = {
      page: currentPage,
      client_id: "intqt_22s9F_FXcGLvP-hN4SgO7vPJo1hN-Eave-0mg",
      per_page: 15,
      query: query,
      orientation: "landscape",
    };

    const data = async () => {
      try {
        setError(false);
        setLoader(true);
        const dataImages = await fetchImages(setApi);
        setImages((prev) => {
          return [...prev, ...dataImages.results];
        });
      } catch (error) {
        setImages([]);
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    data();
  }, [query, currentPage]);

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} onClick={openModal} />
      {images.length > 0 && <LoadMoreBtn onClick={handleClick} />}
      {loader && <Loader />}
      {error && <ErrorMessage />}
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          image={modalImg}
        />
      )}
    </>
  );
}

export default App;
