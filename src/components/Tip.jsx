import React from 'react'
import "../styles/tip.css"

export default function Tip({setTipping, setLnurl, setPolling}) {
    const tip = () => {
        setTipping(prev => !prev)
        const url = 'https://legend.lnbits.com/lnurlp/api/v1/links';
        const apiKey = 'b9a9a49dbd2343f78f52fa85afc6c394';

        // Define the request body as an object
        const requestBody = {
        description: "Tip",
        amount: 10,
        max: 100000,
        min: 10,
        comment_chars: 0
        };

        fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': apiKey
        },
        body: JSON.stringify(requestBody)
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response data here
            setPolling(data.id)
            setLnurl(data.lnurl)
            console.log(data)
        })
        .catch(error => {
            // Handle any errors here
            console.error(error);
        });
    }

  return (
    <div className='footer'>
        <div>
            <button onClick={tip}>
                <img src='./full-heart.png'/>
                <span>Support</span>
            </button>
        </div>
    </div>
  )
}
