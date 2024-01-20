import About from "./Pages/About";
import Home from "./Pages/Home";
import UserPage from "./Pages/UserPage";
import Horrors from "./Pages/Horrors";
import { Routes, Route, Link } from "react-router-dom"



export default function App () {  // START of default function App //
  return ( // START of returning //
      <div>
          <h1>TRENING: Dynamic Routing</h1>
          <nav>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT  </Link>
            <Link to="/Horrors">HORRORS</Link>
            
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/users/:username" element={<UserPage/>} >  {/* Colon is a parameter here. It works with every API, DOM, Express... */}
          {/* :username is not username but it represents something we can pass it onto, like [ look at line 29, 30 ] */}
           
           {/* Below a nested routes */}

                <Route path="posts" element={<p>Posts part</p>} />  {/* I do not have to include slash in the path */}
                <Route path="likes" element={<p>Likes part</p>} />

            </Route>  {/* END of Routes nesting */}

           
            <Route path="/Horrors" element={<Horrors />} />
            <Route path="*" element={<h2>Page NOT found, dummy! 404 all allong! </h2>} />
          </Routes>
         
      </div>
  ) // END of returning //

}; // END of default functionn App //


// Example:  /users/artur, or /users/michal, or users/johnwick  //
// If we go to any of examples from line 29 we will get component UserPage // But endPoint Users does not exist so if I will go to /users I will receive nothing. Instead anuy other string after it will work //
