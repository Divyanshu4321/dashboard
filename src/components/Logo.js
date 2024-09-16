import React from 'react';
import './logo.css'

const Logo = () => {
    const handleToggleSideBar = () => {
        document.body.classList.toggle('toggle-sidebar');
    }
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <a href='/' className='logo d-flex align-items-center'>
                {/* <img
                    src="image source"
                    alt="Logo"
                /> */}
                <span className='d-none d-lg-block'>Admin Dashboard</span>
            </a>
            <i
            className='bi bi-list toggle-sidebar-btn'
            onClick={handleToggleSideBar}
            >

            </i>
            
        </div>
    );
}

export default Logo;
