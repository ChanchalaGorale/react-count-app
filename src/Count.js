import React, { useState } from "react";

function Count() {

    let [count, setCount] = useState(0);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}><i class="fas fa-plus"></i></button>
            <button className="btn btn-primary" onClick={() => setCount((count>0)? (count - 1): (count=0))}><i class="fas fa-minus"></i></button>
            <button className="btn btn-secondary"  onClick={() => setCount(0)}><i class="fas fa-history"></i></button>
        </div>
    );
  }
  
  export default Count;
