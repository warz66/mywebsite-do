import './SwitchMode.css';
import { useDispatch, useSelector } from 'react-redux';
import { handleMode } from 'features/mode';
import { resetSection } from 'features/locationNavFp';

const SwitchMode = ({text = true}) => {
    const mode = useSelector((state) => state.mode.value);
    const dispatch = useDispatch();

    function changeMode() {
        dispatch(resetSection());
        dispatch(handleMode());
    }

    return (

        <div className={`switch-mode${text ? "" : " realisation-style"}`}>
            <label>
                { text && <span className="switch-mode-text">{mode ? 'LIGHT MODE' : 'DARK MODE'}</span>}
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