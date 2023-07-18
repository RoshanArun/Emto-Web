import emtologo from './emto-logo.png';
import truck from './truck.jpg';
import emtocaption from './Assets/emto-caption.png';
import React from 'react';

import { Img01, Img02, Img03 } from '../assets/img'

const Login = () => {
    return (
        <div class="login">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <div class="wrapper">

                <div class="page-left">
                    <img src={emtologo} class="logo" alt="logo" />
                    <img src={truck} class="truck" alt="logo" />
                    <img src={emtocaption} class="emtocaption" alt="logo" />
                    <div class="box">
                        <p class="details">EMTO app assigns the shipment to the nearest driver for pick up. You will see your vehicle, driver details, fare and receive real time status updates until delivery.</p>
                        <a class="link" href="url">Visit Website</a>
                    </div>
                </div>

                <div class="page-right">
                    <div class="signin-content">
                        <label class="signin-label">Sign In</label> <br></br><br></br>
                        <label class="num-label">Enter your mobile number</label><br></br>
                        <input class="numinput" type="number" id="num" name="num" /><span class="small"></span><br></br>
                        <label class="invalidnumber">Invalid mobile number</label><br></br>
                        <label class="OTP-label">OTP</label>
                        <input class="OTPNUM-input" type="number" id="num1" maxlength="4"/>
                        <input class="OTPNUM-input" type="number" id="num2" maxlength="4" />
                        <input class="OTPNUM-input" type="number" id="num3" maxlength="4"/>
                        <input class="OTPNUM-inputend" type="number" id="num4" maxlength="4"/><br></br>
                        <label class="invalidOTP">Invalid otp</label>
                        <button class="submit-button" type="button">SIGN IN</button> <br class="small"></br>


                    </div>
                    <div class="bottom">
                        <label class="terms">EMTO 2023 . TERMS . PRIVACY</label>
                        <label class="language" for="html">TAMIL</label>
                        <input class="radio-button" type="radio" name="lang" value="English" />
                        <label class="language" for="html">ENGLISH</label>
                        <input class="radio-button" type="radio" name="lang" value="Tamil" />
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Login;