import React, { useState, useEffect } from 'react';
import { getPhotos } from '../../apiService/photos'
import styles from "./App.module.css";
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from "../ImageGallery/ImageGallery";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import Loader from '../Loader/Loader';
import { Image } from '../../apiService/photos';

const App: React.FC = () => {
const [query, setQuery] = useState<string>('');
const [images, setImages] = useState<Image[]>([]);
const [page, setPage] = useState<number>(1);
const [isLoading, setIsLoading] = useState<boolean>(false);
const [error, setError] = useState<string | null>(null);
const [totalImage, setTotalImage] = useState<Image | null>(null);
const [showBtn, setShowBtn] = useState<boolean>(false);
const [noResults, setNoResults] = useState<boolean>(false);

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
                setShowBtn(data.total_pages > page);
            }
          
        } catch (error) {
            setError('Please try again later.')
        } finally {
            setIsLoading(false);
        }
    };
    getImages();
}, [query, page]);

    const handleOnSubmit = (query: string) => {
        setQuery(query);
        setImages([]);
        setPage(1);
      }

      const handleLoadMore = () => {
        setPage((prevPage) => prevPage + 1);
      }

      const openModal = (image: Image) => {
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

export default App;