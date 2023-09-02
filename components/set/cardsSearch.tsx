import { Dispatch, SetStateAction } from "react";

interface CardsSearchProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const CardsSearch = ({ value, setValue }: CardsSearchProps) => {
  return (
    <div>
      <input
        className="rounded-lg px-4 py-2 bg-gray-400 text-white"
        value={value}
        onChange={(e: any) => {
          setValue(e.target.value);
        }}
        type="text"
        placeholder="Search for a card..."
      />
    </div>
  );
};

export default CardsSearch;
