import SearchBar from 'views/containers/SearchBar';
import Structure from 'views/containers/Structure';
import StaffTree from 'views/containers/StaffTree';

const Dashboard = props => {

    return (
        <div className='dashboard'>
            <div className='container-fluid'>
                <SearchBar />
                <div className='row'>
                    <div className='col-lg-3'>
                        <Structure />
                    </div>
                    <div className='col-lg-9'>
                        <StaffTree />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;