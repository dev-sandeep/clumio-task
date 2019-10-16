import { useContext } from 'react';
import { BaseContext } from './BaseContext'

const UseBaseContext = () => {
    const [state, setState] = useContext(BaseContext);
    
    function setShowMovies(data){
        setState(state => ({
            ...state, show:data
        }));
    }
    return {
        setShowMovies,
        showMovies: state.show,
    }
}


export default UseBaseContext;