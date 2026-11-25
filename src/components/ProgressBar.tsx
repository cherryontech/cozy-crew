import '../styles/progress-bar.css';

import { useState } from "react";

type ProgressValueProps = {
    label: string
    progressValue: number
}

const ProgressBar = ({label, progressValue}: ProgressValueProps) => {

    const [value, setValue] = useState(progressValue);

    return (
    <div className='progress-content'>
        <div className='progress-heading'>
            <label className='text-body3'>{label}</label>
            <div className='text-body3 status-number'>{value}%</div>
        </div>
        <progress max={100} value={value} className='progress-bar'></progress>
    </div>
    );
}

export default ProgressBar;