import React from "react";
import Card from "./Card";

function Tours({tours,removetour})  

{
return(


    <div className="container">

        <div>
        <h2 className="title"> Plan With Ayush</h2>
        </div>
         
       <div className="cards">
         {
            tours.map((tour)  =>
            {  
                // pure object ki copy pass kar di console kar ke dekha h tour ko yeha pe 
                console.log(tour);
                return <Card  key={tour.id}{...tour} removetour={removetour} ></Card>

            } )
         }
       </div>
    </div>

);


}

export default Tours;