import { BallTriangle } from "react-loader-spinner";
import styles from './Loader.module.css';

export default function Loader(){
    return (
        <div className={styles.loader}>
            <BallTriangle color='rgb(80, 80, 242)' height={60} width={60}/>
        </div>
    )
}