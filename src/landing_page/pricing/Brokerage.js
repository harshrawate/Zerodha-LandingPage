import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>
         <div className='row p-5 mt-5 text-center border-top'>
           <div className="col-8 p-4 ">
              <a href="" style={{textDecoration:"none"}}><h3 className="fs-5">Brokerage calculator</h3></a> 
              <ul style={{textAlign:"left",lineHeight:"2.5",fontSize:"12px"}} className="text-muted">
                <li>call and trade and rms auto-squareoff</li>
                <li>Digital comntract notes</li>
                <li>Phycial copy of contract note</li>
                <li>For NRI account</li>
                <li>For NRI account(PIS)</li>
                <li>if the account is in debit balance</li>
              </ul>
           </div>
           <div className="col-4 p-4">
            <a href="" style={{textDecoration:"none"}}><h3 className="fs-5">List of charges</h3></a> 
           </div>
          
        </div>
        
     </div>
     );
}

export default Brokerage;