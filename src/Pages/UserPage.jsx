import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";  // Outlet says that whatever is a subRoute of this page, show it below where <Outlet /> is inputed in the RETURN part of code //
import { Link } from "react-router-dom";

export default function UserPage () {  // START of default function UserPage //
    const consolParam = useParams(); 
    console.log(consolParam);  // This will show all the object - property and parameter "username" from the code, value typed in the browser URL line, prototype: object //

    const { username } = useParams()  // DESTRUCTURING used in order to make useParams return object but to show only a VALUE of property 'username' //
    console.log(username); 
    
    // Here I can make a fetch request to our DATABASE and get info about user //


    return (  // Start of returning //
        <div>
            <h2>User's Page</h2>

        <nav>

            <Link to="/users/Artur/posts">Artur's Posts</Link> {/* This will only direct to Artur but not to any user because URL is hardcoded in here} */}
            <Link to={`/users/${username}/posts`}>User's Posts</Link> {/* {} brackets and $ signs allows us to use variables in URL. This URL will redirect to any user we will type in instaed hard-coded Artur LOL */}
            <Link to={`/users/${username}/likes`}>User's Likes</Link> {/* After clicking on it it will not change user's name to Artur in URL. Whatever user's name is written previously in URL will stay there after pressing the link button */}
            
        </nav>

            <p>{username} is the best. He adds over 800000 lines of code per 30s ! WoW! </p>  {/* We can use PARAMETERS on the page */}
            <Outlet />   {/* Outlet is whatever the subRoute component is and it will show it here. But if there is no subroute component then Outlet will show nothing */}
        </div>
    ); // Endo of returning n//
}; // END of default functionn UserPage //