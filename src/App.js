import React from 'react';
import Description from "./components/description";
import Beats from './components/assets/beats.png'

const App = () => {
    return (
        <div>
            <div className={'cardWrapper'}>
                <img src={Beats} alt=''/>
                <Description/>
            </div>
        </div>
    );
};

export default App;
