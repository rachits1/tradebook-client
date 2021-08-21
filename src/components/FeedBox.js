import React from 'react'

function FeedBox({head,body}) {
    return (
        <div className="right__sec__feed">
            <h6 className="faded">{head}</h6>
            <h5>{body}</h5>
        </div>
    )
}

export default FeedBox
