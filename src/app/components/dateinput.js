export default function DateInput({value, minDate, onChange}) {
  return (
    <input
      type="date"
      className="w-full bg-transparent text-gray-700 focus:outline-none"
      value={value}
      onChange={(e) => {
        let year = e.target.value.split("-")[0];
        year = year > 2030 ? 2030 : year;
        let date = e.target.value.replace(/^\d+/, year);
        onChange(date);
      }}
      min={minDate}
    />
  );
}
