import "./Container.css";

const Container = (props) => {
  return (
    <div className="container" id="main-container">
      {props.children}
    </div>
  );
};

export default Container;
