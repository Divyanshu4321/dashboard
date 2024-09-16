import React from 'react';

const NavAvatar = () => {
    return (
        <li className='nav-item dropdown pe-3'>
            <a 
                className='nav-link nav-profile d-flex align-items-center pe-0'
                href="/"
                data-bs-toggle="dropdown"
            >
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw0PUtHtPjHLLdRNKVmV1wX_taUtdViaMWkw&s "
                    alt="Profile"
                    className='rounded-circle' />
                <span className='d-none d-md-block dropdown-toggle ps-2'>Cloud Zappy</span>
                </a>

                <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
                    <li className='dropdown-header'>
                        <h6>Admin</h6>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <hr className='dropdown-divider'/>
                    </li>
                    <li>
                        <a 
                            className='dropdown-item d-flex align-items-center'
                            href="/">
                            <i className='bi bi-person'></i>
                            <span>My Profile</span>
                        </a>
                    </li>
                    <li>
                        <hr className='dropdown-divider'/>
                    </li>
                    <li>
                        <a 
                            className='dropdown-item d-flex align-items-center'
                            href="/">
                            <i className='bi bi-gear'></i>
                            <span>Account Settings</span>
                        </a>
                    </li>
                    <li>
                        <hr className='dropdown-divider'/>
                    </li>
                    <li>
                        <a 
                            className='dropdown-item d-flex align-items-center'
                            href="/">
                            <i className='bi bi-question-circle'></i>
                            <span>Need help?</span>
                        </a>
                    </li>
                    <li>
                        <hr className='dropdown-divider'/>
                    </li>
                    <li>
                        <a 
                            className='dropdown-item d-flex align-items-center'
                            href="/">
                            <i className='bi bi-box-arrow-right'></i>
                            <span>Sign Out</span>
                        </a>
                    </li>
                    <li>
                        <hr className='dropdown-divider'/>
                    </li>


                </ul>
        </li>
    );
}

export default NavAvatar;
