import React from 'react';

// SVG Sprite as a React Component
const SelectArrowDownIcon = () => (
  <svg viewBox="0 0 10 6" style={styles.svg}>
    <polyline points="1 1 5 5 9 1" />
  </svg>
);

const SelectComponent = ({ options, value, onChange }) => (
  <div style={styles.select}>
    <select
      id="slct"
      required
      value={value}
      onChange={onChange}
      style={styles.selectElement}
    >
      <option value="" disabled>Select option</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    <SelectArrowDownIcon />
  </div>
);

// Styles
const styles = {
  select: {
    position: 'relative',
    minWidth: '200px',
  },
  svg: {
    position: 'absolute',
    right: '12px',
    top: 'calc(50% - 3px)',
    width: '10px',
    height: '6px',
    strokeWidth: '2px',
    stroke: '#9098A9',
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    pointerEvents: 'none',
  },
  selectElement: {
    WebkitAppearance: 'none',
    padding: '7px 40px 7px 12px',
    width: '100%',
    border: '1px solid #E8EAED',
    borderRadius: '5px',
    background: 'white',
    boxShadow: '0 1px 3px -2px #9098A9',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: '16px',
    transition: 'all 150ms ease',
    color: '#223254',
  },
};

export default SelectComponent;
