import React from 'react';
import './LeftSection.css';
import HomeIcon from '@material-ui/icons/Home';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import LeftSecContent from './LeftSecContent';

function LeftSection() {
    return (
        <div className="left__section flex column">
            <LeftSecContent Icon={HomeIcon} text="Home"/>
            <LeftSecContent Icon={BookmarkIcon} text="Bookmark"/>
            <LeftSecContent Icon={NotificationsNoneIcon} text="Notification"/>
            <LeftSecContent Icon={MailOutlineIcon} text="Messages"/>
            <LeftSecContent Icon={PersonOutlineIcon} text="Profile"/>
            <LeftSecContent Icon={MoreHorizIcon} text="More"/>
        </div>
    )
}

export default LeftSection;
