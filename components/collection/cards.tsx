import { useState } from "react";
import Card from "../../interfaces/card";

interface CardsProps {
  cards: Array<{
    id: string;
    type: string;
    quantity: number;
    details: string;
  }>;
}

const getTotalPrice = (
  cards: Array<{
    id: string;
    type: string;
    quantity: number;
    details: string;
  }>
) => {
  let res = 0;

  cards.forEach((card) => {
    const parsedDetails = JSON.parse(card.details);
    if (
      parsedDetails.cardmarket === undefined ||
      parsedDetails.cardmarket.prices === undefined
    ) {
      return;
    }

    if (card.type === "regular") {
      res += parsedDetails.cardmarket?.prices?.averageSellPrice * card.quantity;
    } else {
      res += parsedDetails.cardmarket?.prices?.reverseHoloAvg30 * card.quantity;
    }
  });

  return res;
};

const Cards = ({ cards }: CardsProps) => {
  const totalPrice = getTotalPrice(cards);

  const onClickSaveChanges = () => {};

  return (
    <div className="mx-auto flex flex-col items-center justify-center space-y-4">
      <div className="w-full text-center italic">
        Collection estimated value: ${Math.round(totalPrice)}
      </div>
      <table className="mx-auto overflow-y-scroll">
        <thead className="table-auto">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Number</th>
            <th className="px-4 py-2">Set name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Amount</th>
            <th className="px-4 py-2">Type</th>
          </tr>
        </thead>
        <tbody className="table-auto">
          {cards.map((card, index) => {
            const cardInfos: Card = JSON.parse(card.details);

            return (
              <tr key={index}>
                <td className="border px-4 py-2">{cardInfos.name}</td>
                <td className="border px-4 py-2">
                  {cardInfos.number} / {cardInfos.set.total}
                </td>
                <td className="border px-4 py-2"> {cardInfos.set.name}</td>
                <td className="border px-4 py-2">
                  {card.type === "regular"
                    ? cardInfos.cardmarket?.prices?.avg30
                    : cardInfos.cardmarket?.prices?.reverseHoloAvg30}
                </td>
                <td className="border px-4 py-2 text-center">
                  {card.quantity}
                </td>
                <td className="border px-4 py-2 text-center">{card.type}</td>
                <td className=" px-4 py-2 font-bold cursor-pointer text-center">
                  -
                </td>
                <td className=" px-4 py-2 font-bold cursor-pointer text-center">
                  +
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        className="rounded-lg bg-orange-600 text-white font-bold px-4 py-2"
        onClick={onClickSaveChanges}
      >
        Save changes
      </button>
    </div>
  );
};

export default Cards;
