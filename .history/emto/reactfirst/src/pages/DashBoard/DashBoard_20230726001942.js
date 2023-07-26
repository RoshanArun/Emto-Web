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
                    <img src={IMAGES.recievers} class="dashboardicon" alt="dashboardlogo" /><label class="dashboardlabels">Recievers</label><br></br><br></br><br></br><br></br><br></br>
                    <label class="pro">Upgrade to Pro</label><br></br>
                    <label class="unlock">Get 1 Month Free</label><span class="small"></span>
                    <label class="unlock2">and Unlock</label><br></br>
                    <button class="upgrade">Upgrade</button><br></br><br></br><br></br>

                    <img src={IMAGES.settings} class="dashboardicon" alt="dashboardlogo" /><label class="dashboardlabels">Settings</label><br></br>
                    <img src={IMAGES.csx} class="dashboardicon" alt="dashboardlogo" /><label class="dashboardlabels">Help Desk</label><br></br>
                    <img src={IMAGES.logout} class="dashboardicon" alt="dashboardlogo" /><label class="dashboardlabels">Logout</label><br></br><br></br><br></br><br></br><br></br>
                </div>
                <div class="dashboard-top">
                    
                </div>
            </div>
        </div>
    );
}



export default DashBoard;