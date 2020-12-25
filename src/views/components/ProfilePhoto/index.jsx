import './index.scss';

const dummyPhoto = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfAaZ1tVlE2SrH3hWrZ59q3e12Cl-c1F-j-g&usqp=CAU';

const ProfilePhoto = props => {
    const { src, status } = props;
    
    return (
        <div className='profile-photo'>
            <div className='image-wrapper'>
                <img src={src || dummyPhoto}/>
            </div>
            {
                status && <span className='status'>{status}</span>
            }
        </div>
    );
};

export default ProfilePhoto;