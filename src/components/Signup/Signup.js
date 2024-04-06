import styles from  "./Signup.module.css";

import {Link} from 'react-router-dom'


function Signup() {
  return (
    <>
    
    <div className={styles.wrapper}>
    <span className={styles.country}>
      <img src="./images/country.png" />
      <select>
        <option>EN</option>
        <option>UK</option>
      </select>
      </span>
      
        <form>
          <h1>SIGN UP</h1>
          <p>Enter your email and password to register</p>

          <div className={styles.input_box}>
            <lable className={styles.lable}>Name</lable>
            <br />
            <input type="text" placeholder="Enter Name" />
            <img src="./images/UserId.png" className={styles.icon}/>
          </div>
          <div className={styles.input_box}>
            <lable className={styles.lable}>Email</lable>
            <br />
            <input type="text" placeholder="Enter Email" />
            <img src="./images/User.png" className={styles.icon} />
          </div>
          <div className={styles.input_box}>
            <lable className={styles.lable}>Password</lable>
            <br />
            <input type="text" placeholder="Enter Password" />
            <img src="./images/LockPassword.png" className={styles.icon} />
          </div>
          <div className={styles.subscribe}>
            
              <input type="checkbox" />
              <span>Subscribe to weekly newsletter</span>
          </div>
          <button>SIGN UP</button>
          </form>
          <div className={styles.or}>
            <div>OR</div>
            <hr />
          </div>
          <div className={styles.icons}>
            <img src="./images/instagram.png" alt="instagram-icon" />
            <img src="./images/facebook.png" alt="facebook-icon" />
            <img src="./images/twitter.png" alt="twitter-icon" />
            <img src="./images/google.png" alt="google-icon" />
          </div>
          <div className={styles.signin_link}>
            <p>Already have an account ? <Link to="/signin" className={styles.signin}>SIGN IN</Link></p>
            </div>
      </div>
    </>
  );
}

export default Signup;
