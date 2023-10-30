import { ChangeEvent, useState } from "react";

interface IProps {
  title: string;
}

export function FormComponent({ title }: IProps) {
  const [value, setValue] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}
