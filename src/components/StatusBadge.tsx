import '../styles/progress-bar.css';

type StatusVariant = "pink" | "purple" | "green" | "white";

interface StatusBadgeProps {
  text: string;
  variant?: StatusVariant;
}

function getStatusClass(variant: string){
    return [`status`, `${variant}`].join(" ");
}

export const StatusBadge = ({ text, variant = 'pink' }: StatusBadgeProps) => {
    return (<div className={`${getStatusClass(variant)}`}> {text}</div>);
}

export const CheckmarkStatusBadge = ({ text, variant = 'green' }: StatusBadgeProps) => {
    return (<div className={`${getStatusClass(variant)}`}>&#10003; {text}</div>);
};


