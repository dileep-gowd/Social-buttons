const Button = (props) => {
  //  Write your code here.
  const { name, className } = props;
  return <button className={`btn ${className}`}>{name} </button>;
};

const element = (
  //  Write your code here.
  <div className="bg">
    <h1>Social Buttons</h1>
    <Button name="Like" className="btn-1" />
    <Button name="Comment" className="btn-2" />
    <Button name="Share" className="btn-3" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
