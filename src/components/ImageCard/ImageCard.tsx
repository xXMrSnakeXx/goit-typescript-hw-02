import styles from "./ImageCard.module.css";
import {Image} from '../../apiService/photos';

interface ImageCardProps {
  image: Image;
  onClick: () => void,
}

const ImageCard: React.FC<ImageCardProps> = ({image, onClick}) => {
return ( 
    <div className={styles.card} onClick={onClick}>  
  <img src={image.urls.small} alt={image.alt_description} className={styles.image}/>
    </div>
)
}

export default ImageCard;