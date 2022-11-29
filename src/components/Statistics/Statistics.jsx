import { Component } from "react";
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export class Statistics extends Component {
    static propTypes = {
        options: PropTypes.arrayOf(PropTypes.string,).isRequired,
        values: PropTypes.exact({
            good: PropTypes.number.isRequired,
            neutral: PropTypes.number.isRequired,
            bad: PropTypes.number.isRequired,
        }).isRequired,
        countTotal: PropTypes.func.isRequired,
        countPositive: PropTypes.func.isRequired,
    };

    render() {
        return (
            <section className={css.statistics}>
                <h2 className={css.statistics__title}>Statistics</h2>
                <ul className={css.statistics__optionList}>
                    {
                    this.props.options.map(option => {
                        return (
                            <li
                                key={this.props.options.indexOf(option)}
                                className={css.statistics__option}
                            >
                                {/* закинуть рандомайзер ключей? */}
                                {option}: {Object.values(this.props.values)[this.props.options.indexOf(option)]}
                            </li>
                        );
                    })
                    }
                    <li className={css.statistics__option}>Total: {this.props.countTotal()}</li>
                    <li className={css.statistics__option}>Positive feedback: {this.props.countPositive()}%</li>
                </ul>
            </section>
        )
    }
}