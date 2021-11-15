import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './index.css';

const Header = () => {

    const [active, updateActive] = useState('dashboard');

    const location = useLocation();

    useEffect(() => {
        const key = location.pathname.split('/').pop();
        updateActive(key);
    }, [location])

    const checkActive = (value) => {
        return value === active ? 'active' : '';
    }


    return (
        <div className='header'>
            <div>Demo</div>
            <div>
                <ul className='nav-list'>
                    <li className={checkActive('dashboard')}><Link onClick={() => updateActive('dashboard')} to='dashboard'>Dashboard</Link></li>
                    <li className={checkActive('clipboard')}><Link onClick={() => updateActive('clipboard')} to='clipboard'>Clipboard</Link></li>
                    <li className={checkActive('selfie')}><Link onClick={() => updateActive('selfie')} to='selfie'>Take Selfie</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;