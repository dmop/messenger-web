import React from '~/components/Inputs/node_modules/react';

export default function DefaultInput({
  label,
  className,
  type,
  id,
  placeholder,
}) {
  return (
    <div className="form-group">
      <div className="form-label-group">
        <label className="form-label">{label}</label>
      </div>
      <input
        type={type || 'text'}
        className={className || 'form-control form-control-lg'}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
}
