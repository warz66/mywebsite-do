import './SwitchMode.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleMode, stopAnimBtn } from 'features/mode';

const SwitchMode = ({text = true}) => {
    const mode = useSelector((state) => state.mode.value);
    const animOK = useSelector((state) => state.mode.animBtn);
    const dispatch = useDispatch();
    
    function changeMode() {
        dispatch(handleMode());
    }

    useEffect(() => {
        if(animOK) {
            let timer;
            mode ?  timer = 1250 : timer = 750; 
            var timerID = setTimeout(function(){dispatch(stopAnimBtn())}, timer)
        }
        return() => {
            clearTimeout(timerID);
        }
    });

    return (

        <div className={`switch-mode${text ? "" : " realisation-style"}`}>
            <label className={animOK ? "animation-ok" : ""}>
                {text && <span className="switch-mode-text">{mode ? 'LIGHT MODE' : 'DARK MODE'}</span>}
                <input type="checkbox" onChange={changeMode} defaultChecked={mode}/>
                <div className="switch">
                    <div></div>
                    <div></div>
                    <span></span>
                </div>
            </label>
        </div>

    );

}
    
export default SwitchMode;