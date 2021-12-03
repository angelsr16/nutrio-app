import "./Button.css";

const Button = ({ text, type, OnClick, fontSize }) => {

  const extraStyles = {
    fontSize: fontSize
  }

  return (
    <button type={type} className="btn" onClick={OnClick} style={extraStyles}>
      {text}
    </button>
  );
};

export default Button;
