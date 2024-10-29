import React from "react";
import svg from '../assets/404.svg';
import '../styles/404.css';


const PageNotFound = () => {
    return (
        <>
            <div className="cont-404">
                <img src={svg} alt="svg" />
                <p>Your visited page not found. You may go home page.</p>
                <button>Back to Home</button>
            </div>
        </>
    );
};

export default PageNotFound;