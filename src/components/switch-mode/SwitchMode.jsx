import './SwitchMode.css';

const SwitchMode = ({mode, changeMode, text = true}) => {

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