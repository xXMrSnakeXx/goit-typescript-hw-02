import styles from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({onClick}) {
    return (
        <div className={styles.loadMore}>
            <button type='button' onClick={onClick} className={styles.btn}>Load more</button>
        </div>
    )
}