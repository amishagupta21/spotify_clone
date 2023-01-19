import React from 'react'
import styles from "./index.module.css"
import spotifyLogo from "../../../assests/icons/dark_logo.svg"
import facebook from "../../../assests/icons/facebook.png"
import gmail from "../../../assests/icons/gmail.png"

const SignUpPage = () => {
  return (
    <div className={styles.conatiner}>

      <div className={styles.header}>
        <img src={spotifyLogo} width={"150px"} alt="logo" />
      </div>
      <div className={styles.signupcontent}>
        <h1>Sign up for free to start listening.</h1>
        <div className={styles.btns}>
          <button className={styles.facebook}>
            <img src={facebook} height={28} width={28} alt="facebook icon" />
            <span>CONTINUE WITH FACEBOOK</span>
          </button>

          <button className={styles.gmail}>
            <img src={gmail} height={28} width={28} alt="gmail icon" />
            <span>CONTINUE WITH GOOGLE</span>
          </button>
        </div>

        <div className={styles.or}>
          <div></div>
          <span>OR</span>
          <div></div>
        </div>

        <div className={styles.about}>
          <div className={styles.inputFieldContainer}>
            <span>What's your email?</span>
            <input type="email" placeholder='Enter Your email' />
            <a href="/">Use phone number instead.</a>
          </div>
          <div className={styles.inputFieldContainer}>
            <span>Confirm your email</span>
            <input type="email" placeholder='Enter Your email Again' />
          </div>
          <div className={styles.inputFieldContainer}>
            <span>Create a password</span>
            <input type="email" placeholder='Create a password' />
          </div>
          <div className={styles.inputFieldContainer}>
            <span>What should we call you?</span>
            <input type="email" placeholder='Enter Your profile name' />
            <h3>This appears on your profile.</h3>
          </div>

          <span>What's your date of birth?</span>
          <div className={styles.datefield}>
            <div>
              <span>Year</span>
              <input placeholder='YYYY' />
            </div>

            <div>
              <label for="month">Month</label>
              <select id="month">
                <option value="month">Month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>

            <div>
              <span>Day</span>
              <input placeholder='DD' />
            </div>

          </div>

          <span>What's your gender?</span>
          <div className={styles.genderfield}>
            <div className={styles.gender}>
              <input type="radio" />
              <span>Male</span>
            </div>
            <div className={styles.gender}>
              <input type="radio" />
              <span>Female</span>
            </div>
            <div className={styles.gender}>
              <input type="radio" />
              <span>Non-binary</span>
            </div>
            <div className={styles.gender}>
              <input type="radio" />
              <span>Other</span>
            </div>
            <div className={styles.gender}>
              <input type="radio" />
              <span>Prefer not to say</span>
            </div>
          </div>

          <div className={styles.agreedfield}>
            <div className={styles.checkboxField}>
              <input type="checkbox" />
              <p>I would prefer not to receive marketing messages from Spotify</p>
            </div>
            <div className={styles.checkboxField}>
              <input type="checkbox" />
              <p>Share my registration data with Spotify's content providers for marketing purposes.</p>
            </div>

          </div>

          <div className={styles.conditions}>
            <p>By clicking on sign-up, you agree to Spotify's <span>Terms and Conditions of Use.</span></p>
            <p>To learn more about how Spotify collects, uses, shares and protects your personal data, please see <span>Spotify's Privacy Policy.</span></p>

            <button className={styles.signupButton}>
            Sign Up
          </button>
           <p>Have an account? <span>Log in.</span></p>
          </div>
      
        
        </div>
      </div>

    </div>
  )
}

export default SignUpPage

