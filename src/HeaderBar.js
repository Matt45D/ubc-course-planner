import React from 'react';
import './HeaderBar.css';
import { ReactComponent as Menu} from './menu.svg';

class HeaderBar extends React.Component {
    render() {
        console.log("Rendering...")
        const imageClick = () => {
            console.log('Click!');
        }
        return (
            <div className="Header">
                <div className="Child-header">
                    <Menu className="Menu" onClick={() => imageClick()}/>
                </div>
                <h1 style={{flex: 10}}>ECE Course Calculator</h1>
            </div>
        )
    }
}

export default HeaderBar;

