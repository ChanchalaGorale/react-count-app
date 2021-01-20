import React, { useState } from "react";

function Count() {

    let [count, setCount] = useState(0);

    return (
        
        <div className="card text-center">
            <h2>{count}</h2>
            <div className="idbtn">
                <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
                     <i class="fas fa-plus"></i> 
                    </button>
                   
                <button className="btn btn-primary" onClick={() => setCount((count>0)? (count - 1): (count=0))}>
                    <i class="fas fa-minus"></i> 
                </button>
            </div>
           <div className="resetbtn">
               <button className="btn btn-dark"  onClick={() => setCount(0)}>
                   Reset
                </button>
           </div>
            
        </div>
       
    );
  }
  
  export default Count;
