import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import  {Image} from '../../apiService/photos'

interface ImageGalleryProps {
    images: Image[];
    onImageClick: (image: Image) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({images, onImageClick}) =>  {
return (
    <div className={styles.itemGallery}>
         <ul className={styles.gallery}>
	{images.map((image) => (
        <li key={image.id} className={styles.item} >
        <ImageCard image={image} onClick={() => onImageClick(image)}/>
	</li>
    ))}
	
</ul>
    </div>
)
}

export default ImageGallery;