import React from 'react';
import IMAGES from '../../Components';

const DashBoard = () => {
    return (
        <div class="DashBoard">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <div class="wrapper">

                <div class="dashboard-left">
                    <img src={IMAGES.emtologo} class="dashboardlogo" alt="dashboardlogo" /><br></br>
                    <img src={IMAGES.dashboard} class="dashboardicon" alt="dashboardlogo" /><label class="dashboardlabels">Dashboard</label><br></br>
                    <img src={IMAGES.senders} class="dashboardicon" alt="dashboardlogo" /><label class="dashboardlabels">Senders</label><br></br>
                    <img src={IMAGES.recievers} class="dashboardicon" alt="dashboardlogo" /><label class="dashboardlabels">Recievers</label><br></br>
                    <div class="box">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}



export default DashBoard;