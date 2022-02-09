import React from 'react';

function MySelect({option, defaultValue, onChange, value}) {
  return (
    <select 
      className="form-select w-50"
      value={value}
      onChange={e => onChange(e.target.value)}
      >
      <option disabled value="">{defaultValue}</option>
      {option.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.name}
        </option>
      ))}
    </select>
  );
}

export default MySelect;