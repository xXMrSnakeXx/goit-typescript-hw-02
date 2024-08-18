import styles from './LoadMoreBtn.module.css';

interface LoaderMoreBtnProps {
    onClick: () => void;
}
const LoadMoreBtn: React.FC<LoaderMoreBtnProps> = ({onClick}) => {
    return (
        <div className={styles.loadMore}>
            <button type='button' onClick={onClick} className={styles.btn}>Load more</button>
        </div>
    )
}

export default LoadMoreBtn;