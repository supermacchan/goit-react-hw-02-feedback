import { Component } from "react";
import PropTypes from 'prop-types';
import css from './FeedbackForm.module.css';


export class FeedbackForm extends Component {

    static propTypes = {
        options: PropTypes.arrayOf(PropTypes.string,).isRequired,
    };

    render() {
        return (
            <section className={css.feedback}>
                <h2 className={css.feedback__title}>Please leave feedback</h2>
                <ul className={css.feedback__options}>
                {
                    this.props.options.map(option => {
                        return (
                            <li key={this.props.options.indexOf(option)}>
                                {/* закинуть рандомайзер ключей */}
                                <button
                                    type="button"
                                    className={css.feedback__button}
                                >
                                    {option}
                                </button>
                            </li>
                        );
                    })
                }
                </ul>
            </section>
        )
    }
}