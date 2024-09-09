const Button = ({ onClick, className, children, ...porps }) => {
  const baseStyle =
    "text-pink-600 text-xs border-b-[1px] border-solid sborder-current pb-[2px] inline-block bg-transparent cursor-pointer transition-all during-300 hover:text-gray-600 focus:outline-none focus:pulsate-animation";

  const classNames = `${baseStyle} ${className}`;

  return (
    <button onClick={onClick} className={classNames} {...porps}>
      {children}
    </button>
  );
};

export default Button;
