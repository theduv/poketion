import { Dispatch, SetStateAction } from "react";

interface InputWithLabelProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  title: string;
  type: string;
}

const InputWithLabel = ({
  value,
  setValue,
  title,
  type,
}: InputWithLabelProps) => {
  const onChangeValue = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <label className="flex space-x-2 items-center justify-between w-full">
      <h1>{title}</h1>
      <input
        value={value}
        onChange={onChangeValue}
        placeholder={title}
        type={type}
        className="p-2 rounded-lg text-gray-500 border border-gray-200 "
      />
    </label>
  );
};

export default InputWithLabel;
