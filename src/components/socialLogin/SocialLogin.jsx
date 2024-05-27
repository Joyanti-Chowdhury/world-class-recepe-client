
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {

    const [user,setUser]  = useState(null)
    const [error,setError] = useState('');
    const navigate  = useNavigate()
    const location = useLocation();
    console.log('login',location);
    const from = location?.state?.from?.pathname || '/';



    const {googleSignIn} = useContext(AuthContext)

    const handleGoogleSignIn = () => {
         googleSignIn()
         .then(result => {
        console.log(result.user)
        // const loggedInUser = result.user;
        // console.log(loggedInUser);
        // setUser(loggedInUser)
        // navigate(from,{replace:true})
         })
         .catch((error) => {
          console.error(error)
            // ...
          });
    }
    return (
        <div className='p-3'>
            <div className='divider'></div>

            <div className='text-center'>
                <button onClick={handleGoogleSignIn} className="btn ">
                    <FaGoogle className='mr-8'></FaGoogle>
                    Login with Google
                    </button>
            </div>
        </div>
    );
};

export default SocialLogin;