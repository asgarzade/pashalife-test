import { withRouter } from 'react-router-dom';
import { ReactComponent as LeftArrow } from 'assets/icons/left-arrow.svg';
import './index.scss';

const BackButton = props => {
    return (
        <button className='back-button' onClick={props.history.goBack}>
            <span className='arrow'><LeftArrow /></span>
            Geri qayıt
        </button>
    );
};

export default withRouter(BackButton);