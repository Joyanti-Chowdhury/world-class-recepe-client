import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../../components/socialLogin/SocialLogin";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth/cordova";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  // const auth = getAuth(app);
  // console.log(app)
  // const [users,setUsers]  = useState(null)
  // const [error,setError] = useState('');

  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("loaction log in", location);

  const googleProvider = new GoogleAuthProvider();

  //     const handleGoogleSignIn = event => {
  //       event.preventDefault();

  //   signInWithPopup(auth,googleProvider)

  //  .then(result => {
  //   const user = result.user;
  //   console.log(user)
  //   setUsers(user)
  //   setError('')
  //   navigate('/')
  //   })
  // .catch(error => {
  //   console.log('error ' ,error.message)
  // })

  // signInWithPopup(auth,googleProvider)
  // .then(result => {
  //   const loggedInUser = result.user;
  //   console.log(loggedInUser);
  //   setUsers(loggedInUser)
  //   // navigate(from,{replace:true})
  // })
  // .catch(error =>{
  //   console.log('error',error.message);
  // })
  // }

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        console.log(result.user);

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // const user = {email, password};
    // console.log(user)
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          {/* <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat .</p>
              </div> */}
          <h1 className="text-5xl font-bold text-center">Please Login </h1>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="p-4">
              {" "}
              <p>
                Dont have an account ?{" "}
                <Link className="text-blue-600 font-bold" to="/register">
                  {" "}
                  Register
                </Link>
              </p>
            </div>



 <SocialLogin></SocialLogin>
            {/* <div className="divider"></div>

            <div className="text-center">
              <button onClick={handleGoogleSignIn} className="btn ">
                <FaGoogle className="mr-8"></FaGoogle>
                Login with Google
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
