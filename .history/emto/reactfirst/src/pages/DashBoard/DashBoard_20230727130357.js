import React from 'react';
import IMAGES from '../../Components';

const DashBoard = () => {
    return (
        <div class="DashBoard">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <div class="wrapper">
                <div class="dash">
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

                    <div class="bottom1">
                        
                    </div>

                    <div class="bottom2">
                        <img src={IMAGES.profile} class="profileIcon" alt="dashboardlogo" />
                        <label class="userLabel">John Peter</label><br></br>
                        <label class="userLabel2">0123456789</label><br></br>
                        <label class="userLabel2">0.0</label><br></br>
                    </div>

                    <div class="bottom3">
                        <img src={IMAGES.profile} class="profileIcon" alt="dashboardlogo" />
                        <label class="userLabel">John Peter</label><br></br>
                        <label class="userLabel2">0123456789</label><br></br>
                        <label class="userLabel2">0.0</label><br></br>
                    </div>
                    
                </div>

                {/* <div class="dash-bottom">
                    <div class="bottom1">
                    <label class="userLabel">John Peter</label><br></br>

                    </div>
                    <div class="bottom2">

                    </div>
                    <div class="bottom3">

                    </div>
                </div> */}


                {/* <div class="dashboard-left">
                    
                    
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