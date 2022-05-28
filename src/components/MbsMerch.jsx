import React from 'react'
import mbsMerch from '../styles/mbsMerch/mbsMerch.css'
const MbsMerch = () => {
  return (
    <div>
      <div className="mbsmerch-container">
        <h1>MATCHBOX STICKER MERCH</h1>
        <div className="mbsmerch-tiles-container">
          <div className="mbsmerch-tiles-box-container1">
            <div className="mbsmerch-box1">
              <button className='mbsmerch-box1-btn'>SHOP MERCH</button>
            </div>
          </div>
          <div className="mbsmerch-tiles-box-container2">
            <div className="mbsmerch-box2"></div>
            <div className="mbsmerch-box3"></div>
          </div>
          <div className="mbsmerch-tiles-box-container3">
            <div className="mbsmerch-box4"></div>
            <div className="mbsmerch-box5"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MbsMerch