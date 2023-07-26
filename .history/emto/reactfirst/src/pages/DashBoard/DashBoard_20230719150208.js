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
                        
                    </div>
                </div>
            </div>
        </div>
    );
}



export default DashBoard;