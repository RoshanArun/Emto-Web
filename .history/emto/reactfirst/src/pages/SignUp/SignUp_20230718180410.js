import IMAGES from '../../Components';
import React from 'react';

const SignUp = () => {
    return (
        <div class="login">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <div class="wrapper">

                <div class="page-left">
                    <img src={IMAGES.emtologo} class="logo" alt="logo" />
                    <img src={IMAGES.emtotruck} class="truck" alt="logo" />
                    <img src={IMAGES.emtocaption} class="emtocaption" alt="logo" />
                    <div class="box">
                        <p class="details">EMTO app assigns the shipment to the nearest driver for pick up. You will see your vehicle, driver details, fare and receive real time status updates until delivery.</p>
                        <a class="link" href="url">Visit Website</a>
                    </div>
                </div>

                <div class="page-right">
                    <div class="signup-content">
                        <label class="signup-label">Welcome to EMTO</label> <br></br>
                        <label class="register-label">Register your Account</label><br></br><br></br><br></br>
                        <span class="smallspace2"></span>

                        <label class="firstname-label">First Name</label>
                        <label class="second-label">Last Name</label> <br></br>
                        <input class="small-boxspaced" type="text" id="num" name="num" />
                        <input class="small-box" type="text" id="num" name="num" /><br></br>
                        <label class="invalidfirstname">Enter first name</label>
                        <span class="smallspace2"></span>
                        <br></br>

                        <label class="second-label">Email</label> <br></br>
                        <input class="large-box" type="text" id="num" name="num" /><br></br>
                        <span class="smallspace"></span>

                        <label class="mobilenum-label">Mobile Number</label>
                        <label class="second-label">GST</label> <br></br>
                        <input class="small-boxspaced" type="number" id="num" name="num" />
                        <input class="small-box" type="number" id="num" name="num" />
                        <span class="smallspace"></span>

                        <label class="company-label">Company</label>
                        <label class="second-label">Cargo Type</label> <br></br>
                        <input class="small-boxspaced" type="text" id="num" name="num" />
                        <input class="small-box" type="text" id="num" name="num" />
                        <span class="smallspace"></span>

                        <label class="second-label">Billing Address</label> <br></br>
                        <input class="large-box" type="text" id="num" name="num" /><br></br>
                        <span class="smallspace"></span>

                        <button class="signup-button" type="button">SIGN UP</button> <br></br>
                        <span class="smallspace"></span>

                        <label class="signinlink-label">Already have an account? <a class="link" href="URL">Sign in</a></label> <br></br>

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

export default SignUp;