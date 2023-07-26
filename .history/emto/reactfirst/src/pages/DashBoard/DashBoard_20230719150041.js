import React from 'react';
import IMAGES from '../../Components';

const DashBoard = () => {
    return (
        <div class="DashBoard">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <div class="wrapper">

                <div class="dashboard-left">
                    <img src={IMAGES.emtologo} class="dashboardlogo" alt="dashboardlogo" />
                    
                    <div class="box">
                        <p class="details">EMTO app assigns the shipment to the nearest driver for pick up. You will see your vehicle, driver details, fare and receive real time status updates until delivery.</p>
                        <a class="link" href="url">Visit Website</a>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default DashBoard;