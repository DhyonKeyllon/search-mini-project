import "./styles.css";

export const InputComponent = ({
  searchValue,
  handleChangeValue,
  placeholder,
}) => {
  return (
    <input
      className="text-input"
      type="search"
      onChange={handleChangeValue}
      value={searchValue}
      placeholder={placeholder}
    />
  );
};
