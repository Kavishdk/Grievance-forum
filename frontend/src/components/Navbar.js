import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    };

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Grievance Portal</h1>
                </Link>
                <nav>
                    {user && (
                        <div>
                            <span>Welcome, {user.email}</span>
                            <button onClick={handleClick}>Log Out</button>
                        </div>
                    )}
                    {!user && (
                        <div>
                            <Link to="/login" className="nav-link">Login</Link>
                            <Link to="/signup" className="nav-link cta">Sign Up</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;

