import classes from './Timer.module.css';

const Timer = (props) => {
   return (
    <div className={classes.timer}>
        <div className={[classes.card]}>
            <div>{props.timer.days}</div>
            <div className={classes.tag}>days</div>
        </div>
        <div className={[classes.card]}>
            <div>{props.timer.hours}</div>
            <div className={classes.tag}>hours</div>
        </div>
        <div className={[classes.card]}>
            <div>{props.timer.minutes}</div>
            <div className={classes.tag}>minutes</div>
        </div>
        <div className={[classes.card]}>
            <div>{props.timer.seconds > 9 ? props.timer.seconds : '0' + props.timer.seconds}</div>
            <div className={classes.tag}>seconds</div>
        </div>
    </div>
   );
}

export default Timer;