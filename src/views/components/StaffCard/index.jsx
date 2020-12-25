import { Link } from "react-router-dom";
import ProfilePhoto from 'views/components/ProfilePhoto';
import { ReactComponent as ViewIcon } from 'assets/icons/view.svg';
import { ReactComponent as MailIcon } from 'assets/icons/email.svg';
import './index.scss';

const StaffCard = props => {
    const { staffMember, showViewButton, className, isPartOfTree, onCardClick } = props;

    const onClick = () => {
        if (isPartOfTree) onCardClick(staffMember.id);
    }

    return (
        <div className={`staff-card ${className} ${isPartOfTree ? 'part-of-tree' : ''}`} onClick={onClick}>
            <div className='personal-info'>
                <ProfilePhoto 
                    src={staffMember.imagePath}
                    status={staffMember.status}
                />
                <div className='ml-2'>
                    <h5 className='name'>{staffMember.fullName}</h5>
                    <p className='email'>{staffMember.email}</p>
                    <div>
                        <span className='badge badge--purple badge--large'>{staffMember.count1}</span>
                        <span className='badge badge--blue badge--large'>{staffMember.count2}</span>
                        <span className='badge badge--green badge--large'>{staffMember.count3}</span>
                        <span className='badge badge--yellow badge--large'>{staffMember.count4}</span>
                    </div>
                </div>
            </div>
            <div className='job-info'>
                <div className='job-info-item'>
                    <p className='name'>Struktur</p>
                    <p className='value'>Marketinq</p>
                </div>
                <div className="vertical-line"></div>
                <div className='job-info-item'>
                    <p className='name'>Vəzifə</p>
                    <p className='value'>Direktor</p>
                </div>
            </div>
            <div className={`actions ${showViewButton ? 'justify-content-between' : 'justify-content-center'}`}>
                { showViewButton && <Link to={`/staff/${staffMember.id}`} className='link'><ViewIcon />Bax</Link> }
                <Link to={`/email`} className='link'><MailIcon />Mail at</Link>
            </div>
        </div>
    );
};

export default StaffCard;