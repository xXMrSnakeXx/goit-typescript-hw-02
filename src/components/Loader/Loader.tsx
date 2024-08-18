import { BallTriangle } from "react-loader-spinner";
import styles from './Loader.module.css';

const Loader: React.FC = () => {
    return (
        <div className={styles.loader}>
            <BallTriangle color='rgb(80, 80, 242)' height={60} width={60}/>
        </div>
    )
}
export default Loader;