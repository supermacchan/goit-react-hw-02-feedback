import { Component } from "react";
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';


export class FeedbackOptions extends Component {
    static propTypes = {
        options: PropTypes.arrayOf(PropTypes.string,).isRequired,
        onLeaveFeedback: PropTypes.func.isRequired,
    };

    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
            <ul className={css.feedback__options}>
            {
                options.map(option => {
                    return (
                        <li key={options.indexOf(option)}>
                            <button
                                type="button"
                                name={option}
                                className={css.feedback__button}
                                onClick={onLeaveFeedback}
                            >
                                {option}
                            </button>
                        </li>
                    );
                })
            }
            </ul>
        )
    }
}