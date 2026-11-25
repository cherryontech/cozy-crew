import '../styles/form-controls.css'

type SelectProps = {
    label: string;
    name: string;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
    children: React.ReactNode;
    id?: string;
  };
  
  type RadioOption = {
    label: string;
    name?: string;
    value: string;
  };
  
  type RadioGroupProps = {
    label?: string;
    name: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    value?: string;
    options: RadioOption[];
    id?: string;
  };
  
  type TextareaProps = {
    label: string;
    name: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    placeholder: string;
    rows?: number;
    cols?: number;
    id?: string;
  };


export const Select = ({name, label = '', id, children}: SelectProps) => {
    return (
        <div className="select-container">
            <label className="text-body3">{label}</label>
            <select className='select-tag text-body3' name={name} id={id}>
                {children}
            </select>
        </div>
    );
}

export const Option = ({label, value}: RadioOption) => {
    return(<option className="option-tag" value={value}>{label}</option>);
}

export const RadioGroup = ({name, options}: RadioGroupProps) => {
    return (<fieldset>
            {options.map((option, index) => (
                <div className="radio-btn" key={index}>
                    <input type="radio" value={option.value} name={name} aria-label="radio button"/>
                    <label className="radio-btn-label text-body3">
                        {option.label}
                    </label>
                </div>
            ))}
        </fieldset>);
}

export const Textarea = ({label="", name, rows, cols, placeholder}: TextareaProps) => {
    return (<label className="text-body3">{label}
        <textarea className='textarea' placeholder={placeholder} name={name} rows={rows} cols={cols}></textarea>
    </label>);
}

