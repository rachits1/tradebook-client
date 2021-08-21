import React from 'react';
import './RightSection.css';
import FeedBox from './FeedBox';

function RightSection() {
    return (
        <div className="right__section flex column">
            <div className="right__sec__head">
                <h3>What's Happening</h3>
            </div>

            <div className="right__sec__feed__container flex column">
                <FeedBox 
                    head="Where is Nifty headed?"
                    body="Nifty again failed to break the 15650-15900 range today."
                />

                <FeedBox 
                    head="Pick of the Week"
                    body="POWERINDIA all set to break the ascending triangle pattern."
                />

                <FeedBox 
                    head="Lesson for the day"
                    body="Break of a rising channel signals an acceleration of the existing trend."
                />
            </div>
        </div>
    )
}

export default RightSection;
