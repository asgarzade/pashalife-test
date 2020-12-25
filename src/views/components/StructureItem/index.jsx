import { useState, useEffect } from 'react';
import './index.scss';
import { ReactComponent as DownArrow } from 'assets/icons/down-arrow.svg';


const StructureItem = props => {
    const [activeSubIndex, setActiveSubIndex] = useState(null);
    const { isOpen, structure, onClick } = props;

    const onSubClick = index => {
        if (index === activeSubIndex) setActiveSubIndex(null);
        else setActiveSubIndex(index);
    };

    useEffect(() => {
        if (!isOpen) setActiveSubIndex(null);
    }, [isOpen]);

    return (
        <div className={`structure-item ${isOpen ? 'active' : ''}`}>
            <div className='item-main'>
                <h5 className='item-title' onClick={onClick}>{structure.name}</h5>
                <div>
                    <span className='badge badge--purple'>{structure.count1}</span>
                    <span className='badge badge--blue'>{structure.count2}</span>
                    <span className='badge badge--green'>{structure.count3}</span>
                    <span className='badge badge--yellow'>{structure.count4}</span>
                </div>
                <button className='expander' onClick={onClick}>
                    <DownArrow />
                </button>
            </div>
            <ul className='sub-structures'>
                {
                    structure.subSubtructures.map((strct, index) => (
                        <li key={index} className='sub-item'>
                            <div className='item-main'>
                                <span className='sub-title' onClick={() => onSubClick(index)}>{strct.name}</span>
                                <div>
                                    { strct.count1 && <span className='badge badge--purple badge--light'>{strct.count1}</span> }
                                    { strct.count2 && <span className='badge badge--blue badge--light'>{strct.count2}</span> }
                                    { strct.count3 && <span className='badge badge--green badge--light'>{strct.count3}</span> }
                                    { strct.count4 && <span className='badge badge--yellow badge--light'>{strct.count4}</span> }
                                </div>
                            </div>
                            <ul className={`categories ${activeSubIndex === index ? 'active' : ''}`}>
                                {
                                    strct.categories.map((ctgr, idx) => (
                                        <li key={idx}>{ctgr}</li>
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default StructureItem;