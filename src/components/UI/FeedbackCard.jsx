import classes from './UIComponents.module.css';

const FeedbackCard = ({message}) => {
    return <div className={classes['card-container']}>
        <h3>{message}</h3>
    </div>
};

export default FeedbackCard;