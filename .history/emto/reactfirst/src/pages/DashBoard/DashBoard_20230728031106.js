import React from 'react';
import IMAGES from '../../Components';

const DashBoard = () => {
    return (
        <div class="DashBoard">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <div class="wrapper">
                <div class="dash">
                    <div class="top-logo">
                        <img src={IMAGES.emtologo} class="dashboardlogo" alt="dashboardlogo" /><br></br>
                    </div>
                    <div class="top-intro">
                        <label class="intro">Hello, John Peter</label>
                        <label class="Calender">05 June 2023</label>
                        <img src={IMAGES.calender} class="calenderIcon" alt="dashboardlogo" /><br></br>
                        <label class="introsub">Track bookings here. You almost reach a goal!</label>
                    </div>
                    <div class="top-profile">
                        <img src={IMAGES.profile} class="profileIcon" alt="dashboardlogo" />
                        <label class="userLabel">John Peter</label><br></br>
                        <label class="userLabel2">0123456789</label><br></br>
                        <label class="userLabel2">0.0</label><br></br>
                    </div>

                    <div class="bottom-options">
                        <img src={IMAGES.dashboard} class="dashboardicon" alt="dashboardlogo" /><label class="dashboardlabels">Dashboard</label><br></br>
                        <img src={IMAGES.senders} class="dashboardicon" alt="dashboardlogo" /><label class="dashboardlabels">Senders</label><br></br>
                        <img src={IMAGES.recievers} class="dashboardicon" alt="dashboardlogo" /><label class="dashboardlabels">Recievers</label><br></br><br></br>
                        <label class="pro">Upgrade to Pro</label>
                        <label class="unlock">Get 1 Month Free</label>
                        <label class="unlock2">and Unlock</label><br></br>
                        <button class="upgrade">Upgrade</button>
                        <img src={IMAGES.settings} class="dashboardicon" alt="dashboardlogo" /><label class="dashboardlabels">Settings</label><br></br>
                        <img src={IMAGES.csx} class="dashboardicon" alt="dashboardlogo" /><label class="dashboardlabels">Help Desk</label><br></br>
                        <img src={IMAGES.logout} class="dashboardicon" alt="dashboardlogo" /><label class="dashboardlabels">Logout</label><br></br>
                    </div>

                    <div class="bottom-info">
                        <div class="box">
                            <img src={IMAGES.booktrips} class="boximage" alt="dashboardlogo" />
                            <label class="boxLabel">0</label><br></br>
                            <label class="boxlabel2">Book Trips 	&#187;</label>
                        </div>
                        <div class="box">
                            <img src={IMAGES.currenttTrips} class="boximage" alt="dashboardlogo" />
                            <label class="boxLabel">0</label><br></br>
                            <label class="boxlabel2">Track Current Trip	&#187;</label>
                        </div>
                        <div class="box">
                            <img src={IMAGES.bookedTrips} class="boximage2" alt="dashboardlogo" />
                            <label class="boxLabel">0</label><br></br>
                            <label class="boxlabel2">All Booked Trips	&#187;</label>
                        </div>
                        <div class="box">
                            <img src={IMAGES.incomingShipments} class="boximage2" alt="dashboardlogo" />
                            <label class="boxLabel">0</label><br></br>
                            <label class="boxlabel2">Incoming Shipments	&#187;</label>
                        </div>
                        <div class="box">
                            <img src={IMAGES.payments} class="boximage2" alt="dashboardlogo" />
                            <label class="boxLabel">0</label><br></br>
                            <label class="boxlabel2">Payments	&#187;</label>
                        </div>
                        <div class="box">
                            <img src={IMAGES.fareCalc} class="boximage2" alt="dashboardlogo" />
                            <label class="boxLabel">0</label><br></br>
                            <label class="boxlabel2">Fare Calculator	&#187;</label>
                        </div>
                        <div class="box">
                            <img src={IMAGES.alerts} class="boximage2" alt="dashboardlogo" />
                            <label class="boxLabel">0</label><br></br>
                            <label class="boxlabel2">Alerts	&#187;</label>
                        </div>
                        <div class="box">
                            <img src={IMAGES.messages} class="boximage2" alt="dashboardlogo" />
                            <label class="boxLabel">0</label><br></br>
                            <label class="boxlabel2">Messages	&#187;</label>
                        </div>
                        <div class="box">
                            <label class="more">more...</label><br></br>
                        </div>
                    </div>

                    <div class="bottom-profile">
                        <img src={IMAGES.bronze} class="box-banner" alt="dashboardlogo" />
                        <label class="">more...</label><br></br>

                        <img src={IMAGES.bronze} class="box-banner2" alt="dashboardlogo" />
                    </div>
                </div>
            </div>
        </div>
    );
}



export default DashBoard;