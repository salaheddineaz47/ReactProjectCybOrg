import "./Buttons.css";

const PrimaryButton = (props) => {
  return (
    <a href={props.link} className="main-button">
      {props.children}
    </a>
  );
};

const SecondaryButton = (props) => {
  return (
    <a href={props.link} className="secondary-button">
      {props.children}
    </a>
  );
};

const TertiaryButton = (props) => {
  return (
    <a href={props.link} className="tertiary-button">
      {props.children}
    </a>
  );
};

export default PrimaryButton;
export { SecondaryButton, TertiaryButton };
