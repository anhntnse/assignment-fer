import React from 'react';
import { FaStar } from "react-icons/fa";

function StarReview({ style }) {
    return (
        <div className='start-list' style={{ ...style, display: 'flex', gap: '5px', color: '#f59e0b', alignItems: 'center' }}>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
        </div>
    )
}

export default StarReview;