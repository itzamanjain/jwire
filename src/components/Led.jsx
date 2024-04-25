import React from 'react';
import l1 from '../assets/led/l1.png';
import l2 from '../assets/led/l2.png';
import l3 from '../assets/led/l3.png';
import l4 from '../assets/led/l4.png';
import l5 from '../assets/led/l5.png';

const Led = () => {
    return (
        <div className='flex gap-5 flex-wrap justify-center items-center'>
            <div className="max-w-sm rounded overflow-hidden shadow-lg w-full md:w-1/2">
                <img className="w-full" src={l1} alt="Led 1" />
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg w-full md:w-1/2">
                <img className="w-full" src={l2} alt="Led 2" />
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg w-full md:w-1/2">
                <img className="w-full" src={l3} alt="Led 3" />
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg w-full md:w-1/2">
                <img className="w-full" src={l4} alt="Led 4" />
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg w-full md:w-1/2">
                <img className="w-full" src={l5} alt="Led 5" />
            </div>
        </div>
    );
}

export default Led;
