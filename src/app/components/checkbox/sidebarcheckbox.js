export default function SideBarCheckBox({
  id,
  content,
  size = "4",
  color = "accent-pink-600",
  textcolor = "text-gray-100",
}) {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        style={{ width: size }}
        className={`peer w-${size} h-${size} ${color}`}
      />
      <label
        htmlFor={id}
        className={`ms-2 peer-checked:${textcolor}`}
      >
        {content}
      </label>
    </div>
  );
}
