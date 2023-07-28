import React from 'react';
import IMAGES from '../../Components';

const DashBoard = () => {
    return (
        <div class="DashBoard">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <div class="wrapper">
                <div class="dash-top">
                    <div class="top1">
                        <img src={IMAGES.emtologo} class="dashboardlogo" alt="dashboardlogo" /><br></br>
                    </div>
                    <div class="top2">
                        <label class="intro">Hello, John Peter</label>
                        <label class="Calender">05 June 2023</label>
                        <img src={IMAGES.calender} class="calenderIcon" alt="dashboardlogo" /><br></br>
                        <label class="introsub">Track bookings here. You almost reach a goal!</label>
                    </div>
                    <div class="top3">
                        <img src={IMAGES.profile} class="profileIcon" alt="dashboardlogo" />
                        <label class="userLabel">John Peter</label><br></br>
                        <label class="userLabel2">0123456789</label><br></br>
                        <label class="userLabel2">0.0</label><br></br>
                    </div>
                    <div class="top3">
                        <img src={IMAGES.profile} class="profileIcon" alt="dashboardlogo" />
                        <label class="userLabel">John Peter</label><br></br>
                        <label class="userLabel2">0123456789</label><br></br>
                        <label class="userLabel2">0.0</label><br></br>
                    </div>

                </div>

                <div class="dash-bottom">
                    <div class="bottom1">

                    </div>
                    <div class="bottom2">

                    </div>
                    <div class="bottom3">

                    </div>
                </div>


                {/* <div class="dashboard-left">
                    
                    <img src={IMAGES.dashboard} class="dashboardicon" alt="dashboardlogo" /><label class="dashboardlabels">Dashboard</label><br></br>
                    <img src={IMAGES.senders} class="dashboardicon" alt="dashboardlogo" /><label class="dashboardlabels">Senders</label><br></br>
                    <img src={IMAGES.recievers} class="dashboardicon" alt="dashboardlogo" /><label class="dashboardlabels">Recievers</label><br></br><br></br><br></br><br></br><br></br>
                    <label class="pro">Upgrade to Pro</label>
                    <label class="unlock">Get 1 Month Free</label>
                    <label class="unlock2">and Unlock</label><br></br>
                    <button class="upgrade">Upgrade</button>

                    <img src={IMAGES.settings} class="dashboardicon" alt="dashboardlogo" /><label class="dashboardlabels">Settings</label><br></br>
                    <img src={IMAGES.csx} class="dashboardicon" alt="dashboardlogo" /><label class="dashboardlabels">Help Desk</label><br></br>
                    <img src={IMAGES.logout} class="dashboardicon" alt="dashboardlogo" /><label class="dashboardlabels">Logout</label><br></br>
                </div>

                <div class="dashboard-right">

                    <div class="dashboard-top">
                        
                    </div>

                    <div class="right1">
                        <div class="box">

                        </div>
                        <div class="box">

                        </div>
                        <div class="box">

                        </div>
                        <div class="box">

                        </div>
                        <div class="box">

                        </div>
                        <div class="box">

                        </div>
                        <div class="box">

                        </div>
                        <div class="box">

                        </div>
                        <div class="box">

                        </div>
                    </div>


                    <div class="right2"></div>

                </div> */}



                {/* <div class="dashboard-top2">
                    
                </div> */}
            </div>


        </div>
    );
}



export default DashBoard;