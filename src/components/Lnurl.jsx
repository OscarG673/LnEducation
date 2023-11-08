import React from 'react'
import "../styles/tip.css"

export default function Lnurl({lnurl, setIsTipping}) {
  return (
    <div className='lnurl'>
        <div>
        <img id='barcode' 
            src={`https://api.qrserver.com/v1/create-qr-code/?data=${lnurl}&amp;size=100x100`}
            alt="" 
            title="Tip" 
            width="210" 
            height="210" />
        </div>
        <button className='cancel' onClick={() => setIsTipping(false)}>Cancel</button>
    </div>
  )
}
