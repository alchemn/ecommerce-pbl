import React from 'react'

const InputField = ({label, type="text", value, onChange, placeholder, children}) => {
  return (
    <div className='mb-4'>
      <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
      <div className="relative rounded-md shadow-sm">
        <input 
          type={type} 
          value={value} 
          onChange={onChange} 
          placeholder={placeholder} 
          className={`w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition ${children ? 'pr-10' : ''}`} 
        />
        {children && <div className="absolute inset-y-0 right-0 flex items-center pr-3">{children}</div>}
      </div>
    </div>
  )
}

export default InputField