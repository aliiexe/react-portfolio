import './Loader.css';
import gifLoader from './gifloader.gif'; 

function Loading() {
    return (
        <div className="loading" style={{background: '#08030C'}}>
            <img className="loader" src={gifLoader} alt="Loading..."  draggable="false" />
        </div>
    );
}

export default Loading;
