import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import data from './data';

import Tours from './Component/Tours';


function App() {

const [tours,setTours]= useState( data)
  
function removetour(id)
{
const newTours= tours.filter( tour => tour.id !==id);
setTours(newTours);
}

  if(tours.length === 0)
  {
    return(
              <div className='refresh'>
                  <h2>
                    No Tours Left
                  </h2>

                  <button className='btn-white' onClick={ () => setTours(data)}>
                    Refresh
                  </button>

              </div>
    );
  }


  return (
    <div className='app'>
        <Tours tours={tours} removetour={removetour}>  </Tours>
    </div>
  );
}

export default App;
