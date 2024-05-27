import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Register = () => {

   const  { createUser } =  useContext(AuthContext)



    const handleRegister = (e) =>{
        e.preventDefault()
        

        const form = new FormData(e.currentTarget);

        const name= form.get('name');
        const email= form.get('email');
        const password= form.get('password');
        const photo= form.get('photo');

        console.log(name,email,password,photo)

        createUser(email,password)
  .then(result => {
    console.log(result.user)
  })
.catch(error => {
  console.error(error)
})




    }
    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
             <h1 className="text-5xl font-bold text-center">Register now!</h1>
        <div className="hero-content flex-col ">
          {/* <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat .</p>
          </div> */}
            <h1 className="text-5xl font-bold">Please Register</h1>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo </span>
                </label>
                <input type="text" placeholder="Photo" name="photo" className="input input-bordered" required />
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div className="p-4 text-center">
            <p>Already have an account ? <Link className="text-blue-600 font-bold" to="/login">Log in</Link></p>
            </div>
        
 

          </div>
        </div>
      </div>
        </div>
    );
};

export default Register;