export default function SideBarCheckBox({
  id,
  content,
  size = "4",
  color = "pink-600",
  textcolor = "gray-100",
}) {
  return (
    <div className="flex items-center">
      <input
        id={id}
        type="checkbox"
        className={`peer w-${size} h-${size} accent-${color}`}
      />
      <label
        htmlFor="checkbox_1"
        className={`ms-2 peer-checked:text-${textcolor}`}
      >
        {content}
      </label>
    </div>
  );
}
