import { useState } from 'react';
import StaffCard from 'views/components/StaffCard';
import './index.scss';
import { staffMembers } from 'mockdata/staff';

const StaffTree = props => {
    const [route, setRoute] = useState([]);

    const onCardClick = (id) => {
        let newRoute = [];
        let index = route.indexOf(id);
        if (index < 0) {
            newRoute = [...route, id];
        } else {
            newRoute = route.slice(0, index + 1)
        }
        setRoute(newRoute);
    }

    const renderTree = () => {
        let renderArray = [[staffMembers[0]]];

        if (route.length) {
            route.forEach(id => {
                const employeeIds = staffMembers.find(staff => staff.id === id).employees;
                const employees = employeeIds.map(id => staffMembers.find(staff => staff.id === id));
                renderArray.push(employees)
            })
        }

        return (
            renderArray.map((treeRow, index) => (
                <div className='row justify-content-around mb-5' key={index}>
                    {
                        treeRow.map((treeItem, idx) => (
                            <div className='col-4' key={idx}>
                                <StaffCard 
                                    staffMember={treeItem}
                                    showViewButton={true}
                                    isPartOfTree={true}
                                    className='m-auto'
                                    onCardClick={onCardClick}
                                />
                            </div>
                        ))
                    }
                </div>
            ))
        );
    }

    console.log(route);

    return (
        <div className='staff-tree'>
            {renderTree()}
        </div>
    );
};

export default StaffTree;