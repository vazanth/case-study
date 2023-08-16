import { FC } from 'react';

interface LabelProps {
  label: string;
}

const Label: FC<LabelProps> = ({ label }) => {
  return <>{label}</>;
};

export default Label;
