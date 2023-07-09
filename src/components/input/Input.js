import React from 'react';
import './Input.css';

function Input({ className, label, id, name, fieldType, placeholder, inputValue, onChange }) {
    return (
        <div>
            <label htmlFor={label}>
                    <input
                        className={className}
                        id={id}
                        name={name}
                        type={fieldType}
                        value={inputValue}
                        placeholder={placeholder}
                        onChange={onChange}
                    />
            </label>
        </div>
    );
}

export default Input;