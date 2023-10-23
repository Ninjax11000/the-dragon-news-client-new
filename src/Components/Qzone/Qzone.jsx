import React from 'react';
import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'

const Qzone = () => {
    return (
        <div >
            <h4 className='fw-bold ps-3 py-3'>Q-zone</h4>
            <div className=' ps-3'>
                <img className='my-2 w-100 z-1 ms-3' src={qzone1} alt="" />
                <img className='my-2 w-100 z-1 ms-3' src={qzone2} alt="" />
                <img className='my-2 w-100 z-1 ms-3' src={qzone3} alt="" />
               
            </div>
        </div>
    );
};

export default Qzone;