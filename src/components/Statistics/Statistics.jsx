import { Component } from "react";
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export class Statistics extends Component {
    static propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.func.isRequired,
        positivePercentage: PropTypes.func.isRequired,
    };

    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return (
            <ul className={css.statistics__optionList}>
                <li className={css.statistics__option}>Good: {good}</li>
                <li className={css.statistics__option}>Neutral: {neutral}</li>
                <li className={css.statistics__option}>Bad: {bad}</li>
                <li className={css.statistics__option}>Total: {total()}</li>
                <li className={css.statistics__option}>Positive feedback: {positivePercentage()}%</li>
            </ul>
        )
    }
}