import StaffCard from 'views/components/StaffCard';
import StaffInformation from 'views/components/StaffInformation';
import BackButton from 'views/components/BackButton';
import { staffMember } from 'mockdata/staff';

const StaffMember = props => {

    return (
        <div className='staff-member mt-4'>
            <div className='container-fluid'>
                <BackButton />
                <div className='d-flex align-items-start mt-4'>
                    <StaffCard 
                        staffMember={staffMember}
                        showViewButton={false}
                    />
                    <StaffInformation
                        staffMember={staffMember}
                        className='ml-3'
                    />
                </div>
            </div>
        </div>
    );
};

export default StaffMember;