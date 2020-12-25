import { useState } from 'react';
import StructureItem from 'views/components/StructureItem';
import './index.scss';

const structureList = [
    {
        name: 'Struktur 1',
        count1: 1111,
        count2: 2222,
        count3: 3333,
        count4: 4444,
        subSubtructures: [
            {
                name: 'Huquq',
                count3: 3333,
                count4: 4444,
                categories: ['Huquq 1', 'Huquq 2', 'Huquq 3']
            },
            {
                name: 'Marketinq',
                count1: 1111,
                categories: ['Marketinq 1', 'Marketinq 2']
            },
            {
                name: 'Investisiya',
                count2: 2222,
                count4: 4444,
                categories: ['Investisiya 1', 'Investisiya 2', 'Investisiya 3']
            }
        ]
    },
    {
        name: 'Struktur 2',
        count1: 1111,
        count2: 2222,
        count3: 3333,
        count4: 4444,
        subSubtructures: [
            {
                name: 'Huquq',
                count3: 3333,
                count4: 4444,
                categories: ['Huquq 1', 'Huquq 2', 'Huquq 3']
            },
            {
                name: 'Marketinq',
                count1: 1111,
                categories: ['Marketinq 1', 'Marketinq 2']
            },
            {
                name: 'Investisiya',
                count2: 2222,
                count4: 4444,
                categories: ['Investisiya 1', 'Investisiya 2', 'Investisiya 3']
            }
        ]
    },
    {
        name: 'Struktur 3',
        count1: 1111,
        count2: 2222,
        count3: 3333,
        count4: 4444,
        subSubtructures: [
            {
                name: 'Huquq',
                count3: 3333,
                count4: 4444,
                categories: ['Huquq 1', 'Huquq 2', 'Huquq 3']
            },
            {
                name: 'Marketinq',
                count1: 1111,
                categories: ['Marketinq 1', 'Marketinq 2']
            },
            {
                name: 'Investisiya',
                count2: 2222,
                count4: 4444,
                categories: ['Investisiya 1', 'Investisiya 2', 'Investisiya 3']
            }
        ]
    },
    {
        name: 'Struktur 4',
        count1: 1111,
        count2: 2222,
        count3: 3333,
        count4: 4444,
        subSubtructures: [
            {
                name: 'Huquq',
                count3: 3333,
                count4: 4444,
                categories: ['Huquq 1', 'Huquq 2', 'Huquq 3']
            },
            {
                name: 'Marketinq',
                count1: 1111,
                categories: ['Marketinq 1', 'Marketinq 2']
            },
            {
                name: 'Investisiya',
                count2: 2222,
                count4: 4444,
                categories: ['Investisiya 1', 'Investisiya 2', 'Investisiya 3']
            }
        ]
    },
    {
        name: 'Struktur 5',
        count1: 1111,
        count2: 2222,
        count3: 3333,
        count4: 4444,
        subSubtructures: [
            {
                name: 'Huquq',
                count3: 3333,
                count4: 4444,
                categories: ['Huquq 1', 'Huquq 2', 'Huquq 3']
            },
            {
                name: 'Marketinq',
                count1: 1111,
                categories: ['Marketinq 1', 'Marketinq 2']
            },
            {
                name: 'Investisiya',
                count2: 2222,
                count4: 4444,
                categories: ['Investisiya 1', 'Investisiya 2', 'Investisiya 3']
            }
        ]
    },
    {
        name: 'Struktur 6',
        count1: 1111,
        count2: 2222,
        count3: 3333,
        count4: 4444,
        subSubtructures: [
            {
                name: 'Huquq',
                count3: 3333,
                count4: 4444,
                categories: ['Huquq 1', 'Huquq 2', 'Huquq 3']
            },
            {
                name: 'Marketinq',
                count1: 1111,
                categories: ['Marketinq 1', 'Marketinq 2']
            },
            {
                name: 'Investisiya',
                count2: 2222,
                count4: 4444,
                categories: ['Investisiya 1', 'Investisiya 2', 'Investisiya 3']
            }
        ]
    },
    {
        name: 'Struktur 7',
        count1: 1111,
        count2: 2222,
        count3: 3333,
        count4: 4444,
        subSubtructures: [
            {
                name: 'Huquq',
                count3: 3333,
                count4: 4444,
                categories: ['Huquq 1', 'Huquq 2', 'Huquq 3']
            },
            {
                name: 'Marketinq',
                count1: 1111,
                categories: ['Marketinq 1', 'Marketinq 2']
            },
            {
                name: 'Investisiya',
                count2: 2222,
                count4: 4444,
                categories: ['Investisiya 1', 'Investisiya 2', 'Investisiya 3']
            }
        ]
    },
    {
        name: 'Struktur 8',
        count1: 1111,
        count2: 2222,
        count3: 3333,
        count4: 4444,
        subSubtructures: [
            {
                name: 'Huquq',
                count3: 3333,
                count4: 4444,
                categories: ['Huquq 1', 'Huquq 2', 'Huquq 3']
            },
            {
                name: 'Marketinq',
                count1: 1111,
                categories: ['Marketinq 1', 'Marketinq 2']
            },
            {
                name: 'Investisiya',
                count2: 2222,
                count4: 4444,
                categories: ['Investisiya 1', 'Investisiya 2', 'Investisiya 3']
            }
        ]
    },
    {
        name: 'Struktur 9',
        count1: 1111,
        count2: 2222,
        count3: 3333,
        count4: 4444,
        subSubtructures: [
            {
                name: 'Huquq',
                count3: 3333,
                count4: 4444,
                categories: ['Huquq 1', 'Huquq 2', 'Huquq 3']
            },
            {
                name: 'Marketinq',
                count1: 1111,
                categories: ['Marketinq 1', 'Marketinq 2']
            },
            {
                name: 'Investisiya',
                count2: 2222,
                count4: 4444,
                categories: ['Investisiya 1', 'Investisiya 2', 'Investisiya 3']
            }
        ]
    },
    {
        name: 'Struktur 10',
        count1: 1111,
        count2: 2222,
        count3: 3333,
        count4: 4444,
        subSubtructures: [
            {
                name: 'Huquq',
                count3: 3333,
                count4: 4444,
                categories: ['Huquq 1', 'Huquq 2', 'Huquq 3']
            },
            {
                name: 'Marketinq',
                count1: 1111,
                categories: ['Marketinq 1', 'Marketinq 2']
            },
            {
                name: 'Investisiya',
                count2: 2222,
                count4: 4444,
                categories: ['Investisiya 1', 'Investisiya 2', 'Investisiya 3']
            }
        ]
    },
]

const Structure = props => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onItemClick = index => {
        if (index === activeIndex) setActiveIndex(null);
        else setActiveIndex(index);
    }

    return (
        <div className='structure'>
            <h3 className='structure-title'>Struktur</h3>
            <ul className='list-unstyled m-0'>
                {
                    structureList.map((structure, index) => (
                        <li key={index}>
                            <StructureItem 
                                isOpen={index === activeIndex}
                                structure={structure}
                                onClick={() => onItemClick(index)}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Structure;