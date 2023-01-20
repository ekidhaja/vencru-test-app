import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>Oops! Page not found. Go back <Link to="/">Home</Link></div>
    );
}
 
export default NotFound;