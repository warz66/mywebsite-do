import './SwitchMode.css';

const SwitchMode = ({mode, changeMode}) => {

    return (

        <div className="switch-mode">
            <label>
                <span className="switch-mode-text">{mode ? 'LIGHT MODE' : 'DARK MODE'}</span>
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