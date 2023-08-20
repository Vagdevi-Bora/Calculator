import { useState } from "react";
import { useDispatch } from "react-redux";
import { buttonAction } from "../redux/reducers/buttonReducer";
import styles from "../styles/button.module.css";


function Button() {
    const [result, setResult] = useState("");
    const dispatch = useDispatch();

    const handleNumber = (n, e) => {
        dispatch(buttonAction.result(result.concat(n)));
        setResult(result.concat(n));
    }

    const clear = () => {
        setResult('');
        dispatch(buttonAction.result(0));
    }
    const deleting = () => {
        setResult(result.slice(0, -1));
        dispatch(buttonAction.result(result.slice(0, -1)));
    }

    const calculate = () => {
        try {
            setResult(eval(result).toString());
            dispatch(buttonAction.result(eval(result).toString()));
        }
        catch (e) {
            dispatch(buttonAction.result('Error'));
        }
    }

    return (
        <div className={styles.buttons_container}>
            <div>
                <div className={styles.numbers}>
                    <div id={styles.pink} onClick={clear} ><h1>AC</h1></div>
                    <div id={styles.pink} onClick={deleting} ><h1>C</h1></div>
                </div>
                <div className={styles.numbers}>
                    <div onClick={(e) => handleNumber(7, e)}><h1>7</h1></div>
                    <div onClick={() => handleNumber(8)}><h1>8</h1></div>
                    <div onClick={() => handleNumber(9)}><h1>9</h1></div>
                </div><div className={styles.numbers}>
                    <div onClick={() => handleNumber(4)}><h1>4</h1></div>
                    <div onClick={() => handleNumber(5)}><h1>5</h1></div>
                    <div onClick={() => handleNumber(6)}><h1>6</h1></div>
                </div><div className={styles.numbers}>
                    <div onClick={() => handleNumber(1)}><h1>1</h1></div>
                    <div onClick={() => handleNumber(2)}><h1>2</h1></div>
                    <div onClick={() => handleNumber(3)}><h1>3</h1></div>
                </div>
                <div className={styles.numbers}>
                    <div onClick={() => handleNumber(0)}><h1>0</h1></div>
                    <div id={styles.dot} onClick={() => handleNumber('.')}><h1>.</h1></div>
                    <div id={styles.equal} onClick={calculate} ><h1>=</h1></div>
                </div></div>
            <div>
                <div className={styles.symbols}>
                    <div onClick={() => handleNumber('+')}><h1>+</h1></div>
                    <div onClick={() => handleNumber('-')}><h1>-</h1></div>
                    <div onClick={() => handleNumber('*')}><h1>*</h1></div>
                    <div onClick={() => handleNumber('/')}><h1>÷</h1></div>
                </div>
            </div>
        </div>
    )
}

export default Button;

