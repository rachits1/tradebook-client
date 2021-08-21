import React from 'react'

function LeftSecContent({Icon,text}) {
    return (
        <div className="left__section__content flex">
            {Icon && <Icon className="left-sec-icon"/>}
            <h3 className="left-sec-text">{text}</h3>
        </div>
    )
}

export default LeftSecContent
