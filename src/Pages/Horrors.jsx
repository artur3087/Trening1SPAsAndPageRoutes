import { Link } from "react-router-dom";

// Below I import useSearchParams, which allow me to search parameters in URL with '?' sign ...  umm... hmm.. //

import { useSearchParams } from "react-router-dom";


 
export default function Horrors() { // START of the default function Horrors //



    // Below it is shown how to use 'useSearchParams'. useSearchParams do not return data contained in arrays unless it is written in a way below: //

    const [arraySearchParams] = useSearchParams();
    const sort = arraySearchParams.get("sort");  // Word "sort" in a variable comes from a code below. Line 42, 43. It can be replaced by any other word //

    console.log(sort); // consoling to check it //



    // Below I create array of strings with a list of horrors //

    const HorrorsArray = [ // Beginning of the array //

    "Shining", "Halloween", "Halloween2", "The Fly", "Nightmare On Elm Street", "Friday the 13th", "Hellraiser", "The Thing"

    ]; // End of the array //



    // Below I change array HorrorsArray to show its strings in alphabetical order by using 'sort' //

    HorrorsArray.sort(); 

    // If I would like to sort them in reverse then I can type in line 12: HorrorArray.sort().reverse(); //



    return (  // START of returning //

    <div>
        <h2>HORRORS</h2>

    <div className="Sort-Buttons">
        <Link to="/Horrors?sort=desc">Sort alphabetically</Link>   {/* It doesnt matter if it is a word 'sort'. Instead it can be Link to="/Horrors?Artur=desc" */}
        
         <Link to="/Horrors?sort=asc">Sort in de-alphabetically</Link>
    </div>

    {/* START of mapping array of horrors HorrorArray below: */}

        {HorrorsArray.map((horror) => {
            return <p key={horror}>{horror}</p>
        }

        
        )}; {/* END of mapping array of horrors HorrorArray */}
    </div>

    ); // END of returning //




}; // END of the default function Horrors //