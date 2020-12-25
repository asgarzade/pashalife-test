import { NavLink } from "react-router-dom";
import ProfilePhoto from 'views/components/ProfilePhoto'
import './index.scss';

const user = {
    imagePath: '',
    fullName: 'Khalid Asgarzade',
    email: 'k.asgarzade@gmail.com'
}

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar-header'>
                <ProfilePhoto src={user.imagePath}/>
                <div className='ml-2'>
                    <h5 className='name'>{user.fullName}</h5>
                    <p className='email'>{user.email}</p>
                </div>
            </div>
            
            <nav className='sidebar-nav'>
                <ul className='list-unstyled'>
                    <li><NavLink className='sidebar-link' exact to='/'>Dashboard</NavLink></li>
                    <li><NavLink className='sidebar-link' to='/tasks'>Tasks</NavLink></li>
                    <li><NavLink className='sidebar-link' to='/email'>Email</NavLink></li>
                    <li><NavLink className='sidebar-link' to='/contacts'>Contacts</NavLink></li>
                    <li><NavLink className='sidebar-link' to='/chat'>Chat</NavLink></li>
                    <li><NavLink className='sidebar-link' to='/deals'>Deals</NavLink></li>
                </ul>
                <NavLink className='sidebar-link' to='/settings'>Settings</NavLink>
            </nav>
        </div>
    );
};

export default Sidebar;