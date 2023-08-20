import { useSelector } from "react-redux/es/hooks/useSelector";
import { buttonSelector } from "../redux/reducers/buttonReducer";
import styles from "../styles/screen.module.css";

function Screen() {
    const res = useSelector(buttonSelector);
    return (
        <div className={styles.screen}>
            <h1>{res.number}</h1>
        </div>
    )
}

export default Screen;