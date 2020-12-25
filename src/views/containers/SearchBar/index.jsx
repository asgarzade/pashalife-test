import { useState } from 'react';
import TextInput from 'views/components/TextInput';
import Button from 'views/components/Button';
import './index.scss';

const searchFields = [
    {
        name: 'fullName',
        placeHolder: 'Ad, Soyad',
    },
    {
        name: 'structure',
        placeHolder: 'Struktur',
    },
    {
        name: 'position',
        placeHolder: 'Vəzifə',
    },
]

const SearchBar = props => {
    const [form, setForm] = useState({
        fullName: '',
        structure: '',
        position: '',
    });

    const onInputChange = e => {
        setForm(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log(form);
    }

    return (
        <div className='searchbar'>
            <h3 className='searchbar-title'>Axtarış</h3>
            <form onSubmit={onSubmit}>
                <div className='row justify-content-between'>
                    <div className='col-10 d-flex flex-wrap'>
                        {
                            searchFields.map(field => (
                                <TextInput
                                    key={field.name}
                                    name={field.name}
                                    inputId={field.name}
                                    value={form[field.name]}
                                    placeHolder={field.placeHolder}
                                    onChange={onInputChange}
                                    className='mr-5 mb-3'
                                />
                            ))
                        }
                    </div>
                    <div className='col-2 text-right'>
                        <Button
                            type='submit'
                            variant='primary'
                            className=''
                        >Axtar</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;