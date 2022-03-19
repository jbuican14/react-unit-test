import PropTypes from "prop-types";
/**
 * @function
 * @param {object} props
 * @return {JSX.Element}
 */

const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <span data-test="congrates-message">Congrats! Yoou guessed</span>
      </div>
    );
  } else {
    return (
      <div data-test="component-congrats" className="alert alert-success" />
    );
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};
export default Congrats;
