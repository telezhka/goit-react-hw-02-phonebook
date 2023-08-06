export const FilterInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search contacts by name"
      style={{ marginBottom: '10px', padding: '5px' }}
    />
  );
};
