import './index.scss';

const Button = props => {
    const { type, variant, className, onClick, children } = props;

    return (
        <button
            className={`button button-${variant} className`}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;