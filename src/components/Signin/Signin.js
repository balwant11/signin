import { Link } from "react-router-dom";
import styles from "./Signin.module.css";

const Signin = () => {
  return (
    <div className={styles.container}>
      <div
        className={styles.part}
        style={{
          backgroundImage: 'url("./images/rec.png")',
          backgroundSize: "630px 800px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img src="./images/logo.png" width="170px" />
        <img src="./images/girl.png" />
      </div>
      <div className={styles.wrapper}>
        <span className={styles.country}>
          <img src="./images/country.png" />
          <select>
            <option>EN</option>
            <option>UK</option>
          </select>
        </span>

        <form>
          <h1>SIGN IN</h1>
          <p>Enter your email and password to register</p>
          <div className={styles.input_flex}>
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
          </div>
          <div className={styles.subscribe}>
            <input type="checkbox" />
            <span>Subscribe to weekly newsletter</span>
          </div>
          <button>SIGN IN</button>
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
          <p>
            Already have an account ?{" "}
            <Link to="/project/" className={styles.signup}>
              SIGN UP
            </Link>
          </p>
        </div>

        <div className={styles.copyright}>
          <p>© 2023. VRISTO All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
