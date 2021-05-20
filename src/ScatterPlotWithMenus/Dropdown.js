export const Dropdown = ({
  options,
  id,
  selectedValue,
  onSelectedValueChange
}) => (
  <select
    id={id}
    onChange={event => onSelectedValueChange(event.target.value)}
    defaultValue={selectedValue}
  >
    {options.map(({ value, label }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
  </select>
);
