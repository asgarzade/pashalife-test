import { NavLink } from "react-router-dom";
import SidebarHeader from 'views/components/SidebarHeader';
import './index.scss';

const user = {
    imagePath: '',
    fullName: 'Khalid Asgazrade',
    email: 'k.asgarzade@gmail.com'
}

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarHeader 
                user={user}
            />
            <nav className='sidebar-nav'>
                <ul>
                    <li><NavLink exact to='/'>Dashboard</NavLink></li>
                    <li><NavLink to='/tasks'>Tasks</NavLink></li>
                    <li><NavLink to='/email'>Email</NavLink></li>
                    <li><NavLink to='/contacts'>Contacts</NavLink></li>
                    <li><NavLink to='/chat'>Chat</NavLink></li>
                    <li><NavLink to='/deals'>Deals</NavLink></li>
                </ul>
                <NavLink to='/settings'>Settings</NavLink>
            </nav>
        </div>
    );
};

export default Sidebar;