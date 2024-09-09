const Notification = ({ children, Number, bgColor }) => {
  const baseType =
    "text-white h-4 w-4 rounded-full absolute top-[1.3rem] right-3 flex justify-center items-center";
  const defaultColor = bgColor ? bgColor : "bg-pink-600";
  const classNames = `${baseType} ${defaultColor}`;

  return (
    <div className="px-5 flex items-center relative h-full hover:bg-gray-200">
      {children}
      <span className={classNames}>{Number}</span>
    </div>
  );
};

export default Notification;
