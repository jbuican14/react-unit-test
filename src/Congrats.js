/**
 * @function
 * @param {object} props
 * @return {JSX.Element}
 */

export default function Congrats(props) {
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
}
