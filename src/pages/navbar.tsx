import { Link } from "react-router-dom"
import { auth } from "../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar = () => {
    const [user] = useAuthState(auth);
    const signUserOut = async () => {
        await signOut(auth)
    }

    return (
        <div className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                {!user ? <Link to="/login">Login</Link> :
                    <Link to="/CreatePost">Create Post</Link>
                }
            </div>

            <div className="user">
                {user && (
                    <>
                        <p className="userName">{user?.displayName}</p>
                        <img alt="userProfilePic" src={user?.photoURL || ""} width={100} height={100} />
                        <button className="btn btn-outline-info" onClick={signUserOut}>Log Out</button>
                    </>
                )}
            </div>
        </div>
    )
}