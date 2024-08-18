import React, { useState, useEffect } from 'react';
import { getPhotos } from '../../apiService/photos'
import styles from "./App.module.css";
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import Loader from '../Loader/Loader'


export default function App() {
const [query, setQuery] = useState('');
const [images, setImages] = useState([]);
const [page, setPage] = useState(1);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);
const [totalImage, setTotalImage] = useState(null);
const [showBtn, setShowBtn] = useState(false);
const [noResults, setNoResults] = useState(false);

useEffect(() => { 
    if (!query) return; 

    const getImages = async () => {
        setIsLoading(true);
        setError(null);
        setNoResults(false);

        try {
            const data = await getPhotos(query, page);
            if(data.results.length === 0) {
                setNoResults(true);
            } else{
                setImages(prev => [...prev, ...data.results]);
                setShowBtn(data.total_pages && data.total_pages !== page);
            }
          
        } catch (error) {
            setError('Please try again later.')
        } finally {
            setIsLoading(false);
        }
    };
    getImages();
}, [query, page]);

    const handleOnSubmit = (query) => {
        setQuery(query);
        setImages([]);
        setPage(1);
      }

      const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
      }

      const openModal = (image) => {
        setTotalImage(image);
      }

      const closeModal = () => {
        setTotalImage(null)
      }

    return(
        <div className={styles.app}>
            <SearchBar onSubmit={handleOnSubmit}/>
            {error && <ErrorMessage message={error}/>}
            {noResults && page === 1 && (<p>Not found images for "{query}"</p>)}
            <ImageGallery images={images} onImageClick={openModal}/>
            {isLoading && <Loader/>}
            {showBtn && <LoadMoreBtn onClick={handleLoadMore}/>}
            {totalImage && (
                <ImageModal isOpen={Boolean(totalImage)} onClose={closeModal} image={totalImage}/>
            )}
        </div>
    )
}