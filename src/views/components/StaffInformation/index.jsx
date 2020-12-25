import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { ReactComponent as Cross } from 'assets/icons/cross.svg';
import './index.scss';

const tabs = [
    {
        value: 'personalInfo',
        display: 'Şəxsi İnformasiya'
    },
    {
        value: 'regulations',
        display: 'Struktur Əsasnaməsi'
    },
    {
        value: 'responsibilites',
        display: 'Vəzifə Təlimatı'
    },
];

const StaffInformation = props => {
    const { staffMember, className } = props;
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <div className={`staff-information ${className}`}>
            <button className='back-btn' onClick={props.history.goBack}><Cross /></button>
            <ul role='navigation' className='staff-nav'>
                {
                    tabs.map(tab => (
                        <li 
                            key={tab.value}
                            role='button' 
                            className={tab.value === activeTab.value ? 'active' : ''}
                            onClick={() => setActiveTab(tab)}
                            data-target
                        >
                            {tab.display}
                        </li>
                    ))
                }
            </ul>
            <div className='staff-content'>
                <h3 className='title'>{activeTab.display}</h3>
                <p className='text'>{staffMember[activeTab.value]}</p>
            </div>
        </div>
    );
};

export default withRouter(StaffInformation);