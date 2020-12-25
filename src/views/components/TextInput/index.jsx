import './index.scss'

const TextInput = props => {
    const { name, inputId, value, placeHolder, onChange, className } = props;

    return (
        <input 
            type='text'
            className={`generic-input ${className}`}
            name={name}
            id={inputId}
            value={value}
            placeholder={placeHolder}
            onChange={onChange}
        />
    );
};

export default TextInput;