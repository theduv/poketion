import { useState } from "react";
import Card from "../../interfaces/card";
import CardPreview from "./cardPreview";
import CardsSearch from "./cardsSearch";

interface CardsListProps {
  cards: Array<Card>;
}

const CardsList = ({ cards }: CardsListProps) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex flex-col space-y-4">
      <CardsSearch value={searchValue} setValue={setSearchValue} />
      <div className="grid grid-cols-4 gap-x-4 gap-y-2 overflow-y-scroll h-full">
        {cards
          .filter(
            (card) =>
              card.name.toLocaleLowerCase().includes(searchValue) ||
              searchValue === ""
          )
          .map((card) => (
            <CardPreview card={card} key={card.id} />
          ))}
      </div>
    </div>
  );
};

export default CardsList;
