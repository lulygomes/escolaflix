import React from 'react'

function FormField ({ label, type, name, value, placeholder, onChange }) {
    return (
        <div>
            <label>
                <h3>{label}</h3>
                <input 
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </label>
        </div>
    )

}

export default FormField