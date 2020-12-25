import ProfilePhoto from 'views/components/ProfilePhoto';

const SidebarHeader = props => {
    const { imagePath, fullName, email } = props.user;

    return (
        <div className='sidebar-header'>
            <ProfilePhoto src={imagePath}/>
            <div>
                <h3>{fullName}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default SidebarHeader;