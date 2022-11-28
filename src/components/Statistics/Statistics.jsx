import { Component } from "react";
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export class Statistics extends Component {

    static propTypes = {
        options: PropTypes.arrayOf(PropTypes.string,).isRequired,
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
                                {/* закинуть рандомайзер ключей */}
                                {option}: 
                            </li>
                        );
                    })
                }
                </ul>
            </section>
        )
    }
}