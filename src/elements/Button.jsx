const Button = (props) => {
  const { children, href, classname, btntype = "submit" } = props;
  return (
    <a href={href} type={btntype} className={`btn btn-primary ${classname}`}>
      {children}
    </a>
  );
};

export default Button;
