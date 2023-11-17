const Button = (props) => {
  const { children, className, onClick } = props;

  return (
    <button onClick={onClick} className={`btn ${className || ""}`}>
      {children}
    </button>
  );
};

export default Button;
