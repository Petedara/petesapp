import React from 'react';
import './menu.css'

export default function Menu(){
    return(
        <nav className='menu'>
            <div className='menu-menu'>
                <div className='created-menu'>
                    <div className='menu-head'>
                        <p>Business</p>
                        <div>
                            <div className='menu-items menu-item'>
                                <div className="menu-icon">
                                    <i className="fa-solid fa-wallet"></i>
                                </div>
                                <div className="menu-details">
                                    <p>Wallet</p>
                                    <div className='small'>
                                        <small>Make transactions with your wallet on Petesapp.</small>
                                    </div>
                                </div>
                            </div>
                            <div className='menu-items menu-item'>
                                <div className="menu-icon">
                                    <i className="fa-solid fa-link"></i>
                                </div>
                                <div className="menu-details">
                                    <p>Review URL</p>
                                    <div className='small'>
                                        <small>Review your url to make confirmation on business agreement</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><hr />
                    <div className='menu-head'>
                        <p>Social</p>
                        <div>
                        <div className='menu-items menu-item'>
                                <div className="menu-icon">
                                    <i className="fa-regular fa-pen-to-square"></i>
                                </div>
                                <div className="menu-details">
                                    <p>Posts</p>
                                    <div className='small'>
                                        <small>See relevant post from people you follow.</small>
                                    </div>
                                </div>
                            </div>
                            <div className='menu-items menu-item'>
                                <div className="menu-icon">
                                    <i className="fa-solid fa-calendar-day"></i>
                                </div>
                                <div className="menu-details">
                                    <p>Events</p>
                                    <div className='small'>
                                        <small>See upcoming event that may interest you.</small>
                                    </div>
                                </div>
                            </div>
                            <div className='menu-items menu-item'>
                                <div className="menu-icon">
                                    <i className="fa-solid fa-users-line"></i>
                                </div>
                                <div className="menu-details">
                                    <p>Forums</p>
                                    <div className='small'>
                                        <small>Connect with relevant forums in your niche.</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><hr />
                <div className='create-menu'>
                    <p>Create</p>
                    <div className='create-menu-list'>
                        <p className='post'>Post</p>
                        <p className='status'>Status</p>
                        <p className='event'>Event</p>
                        <p className='ad'>Ad</p>
                        <p className='forum'>Forum</p>
                        <p className='room'>Room</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}