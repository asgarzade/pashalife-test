import StaffCard from 'views/components/StaffCard';
import { staffMember } from 'mockdata/staff';

const StaffTree = props => {

    return (
        <div className='staff-tree'>
            <StaffCard 
                staffMember={staffMember}
                showViewButton={true}
            />
        </div>
    );
};

export default StaffTree;