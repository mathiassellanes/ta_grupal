import { FC } from "react";

type Option = {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  options: Option[];
  defaultValue: string;
  value: string
  name: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<SelectProps> = ({
  label,
  options,
  defaultValue,
  value,
  onChange,
  name,
}) => {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <div className="select">
          <select
            onChange={onChange}
            name={name}
            defaultValue={defaultValue}
            value={value}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Select;
