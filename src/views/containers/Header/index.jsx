import ProfilePhoto from 'views/components/ProfilePhoto';
import './index.scss';

const Header = props => {
    return (
        <div className='header'>
            <div className='container-fluid d-flex align-items-center justify-content-end'>
                <div className='mr-3'>notifications</div>
                <ProfilePhoto />
            </div>
        </div>
    );
};

export default Header;