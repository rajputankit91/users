import { memo } from "react";
import "./InputField.css";

// Reusable FormField component for rendering a labeled input field
const InputField = memo(({ label, name, value, error, onChange }) => {
  return (
    <div className='label-input-field'>
      <label><span>*</span>{label} :</label>
      <div className='input-field'>
        <input className={error ? 'input-error' : ''} type="text" name={name} value={value} onChange={onChange} />
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
});

export default InputField;