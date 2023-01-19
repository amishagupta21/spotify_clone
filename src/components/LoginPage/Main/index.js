import React, { useState } from 'react'
import styles from "./index.module.css"
import spotifyLogo from "../../../assests/icons/dark_logo.svg"
import facebook from "../../../assests/icons/facebook.png"
import apple from "../../../assests/icons/apple.png"
import gmail from "../../../assests/icons/gmail.png"

function LoginPage() {
  const [email, setEmail] = useState("");

  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const [class_name, setClass_name] = useState("");

  const emailHandler = (e) => {
    if (e.target.value.length === 0) {
      setClass_name("errorLine");
    }
    else {
      setClass_name("thickBlackLine");
    }
    setEmail(e.target.value)
  }


  const focusEmail = () => {
    setClass_name("thickBlackLine");
    setIsEmailFocused(true);
  }

  const blurEmail = () => {
    if (email.length === 0) {
      setClass_name("errorLine");
    } else {
      setClass_name("");
    }
    setIsEmailFocused(false);
  }


  const [password, setPassword] = useState("");

  const [ispassword, setisPassword] = useState(false)

  const [password_name, setPassword_name] = useState("")

  const passwordHandler = (e) => {
    if (e.target.value.length === 0) {
      setPassword_name("errorLinePassword")
    } else {
      setPassword_name("thickBlackLinePassowrd")
    }
    setPassword(e.target.value)
  }

  const focusPassword = () => {
    setPassword_name("thickBlackLinePassowrd")
    setisPassword(true)

  }
  const blurPassword = () => {
    if (password.length === 0) {
      setPassword_name("errorLinePassword")
    } else {
      setPassword_name("")
    }
    setisPassword(false)
  }


  return (
    <div className={styles.conatiner}>
      <div className={styles.header}>
        <img src={spotifyLogo} width={"185px"} alt="logo" />
      </div>

      <div className={styles.loginContainer}>
        <p>To continue, log in to Spotify.</p>

        <div className={styles.btns}>
          <button  className={styles.facebook}>
            <img src={facebook} height={28} width={28} alt="facebook icon" />
            <span>CONTINUE WITH FACEBOOK</span>
          </button>

          <button  className={styles.apple}>
            <img src={apple} height={28} width={28} alt="apple icon" />
            <span>CONTINUE WITH APPLE</span>
          </button>

          <button  className={styles.gmail}>
            <img src={gmail} height={28} width={28} alt="gmail icon" />
            <span>CONTINUE WITH GOOGLE</span>
          </button>

          <button  className={styles.phone}>
            <span>CONTINUE WITH PHONE NUMBER</span>
          </button>
        </div>

        <div className={styles.or}>
          <div></div>
          <span>OR</span>
          <div></div>
        </div>

        <div className={styles.inputField}>
          <div className={styles.username}>
            <span>Email address or username</span>

            <input className={styles[class_name]} style={{ borderColor: isEmailFocused ? "green" : "black" }} onFocus={focusEmail} onBlur={blurEmail} type="email" placeholder='Email address or username' value={email} onChange={emailHandler} />
            {class_name === "errorLine" ? <p>Please enter your Spotify username or email address.</p> : null}
          </div>
          <div className={styles.username}>
            <span>Passowrd</span>
            <input className={styles[password_name]} style={{ borderColor: ispassword ? "red" : "black" }} type="password" placeholder='Password' onFocus={focusPassword} onBlur={blurPassword} value={password} onChange={passwordHandler} />
            {password_name === "errorLinePassword" ? <p>Please enter your Spotify Passowrd.</p> : null}
          </div>

          <div className={styles.password}>
            <span>Forgot your password?</span>
          </div>

          <div className={styles.remember}>
            <div className={styles.check}>
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <button>LOG IN</button>
          </div>

          <p>Don't have an account?</p>
          <div className={styles.spotify}>
            <span>SIGN UP FOR SPOTIFY</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage


// //  given markup

// <div className={styles.box}>

// </div>

// <p>para 1</p>
// <p>para 2</p>



// // given css

// .box + p{
//   color:red
// }

/* <div role="button" aria-label='facebook button' aria-pressed="false" tabindex="0" className={styles.facebook}> */
