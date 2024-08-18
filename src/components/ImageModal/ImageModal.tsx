import styles from './ImageModal.module.css';
import Modal from 'react-modal';


interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    image: {
        urls: {
            regular: string;
        };
        alt_description: string;
        description: string |null;
        user: {
            name: string;
        };
        likes: number;
    }
}

const ImageModal: React.FC<ImageModalProps> = ({isOpen, onClose, image}) => {
    return (

<div>
    <Modal isOpen={isOpen} onRequestClose={onClose} className={styles.modal}>
        <div className={styles.imgModal}>
        <button type='button' onClick={onClose} className={styles.closeBtn}>Close</button>
    <img src={image.urls.regular} alt={image.alt_description} className={styles.img} />
    <h2>{image.description}</h2>
    <div className={styles.imageInfo}>
        <p>By {image.user.name}</p>
        <p>{image.likes} likes</p>
      </div>
        </div>
    
    </Modal>
</div>

    )
}

export default ImageModal;