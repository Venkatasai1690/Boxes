function Box(props) {
  // Write your code here.
  const { className, children } = props;
  const boxContainer = `box ${className}`;
  return (
    <div className={boxContainer}>
      <p className="message">{children}</p>
    </div>
  );
}

const element = (
  // Write your code here.
  <div className="boxes-bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-list-container">
      <Box className="small-box" children="Small" />
      <Box className="medium-box" children="Medium" />
      <Box className="large-box" children="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
