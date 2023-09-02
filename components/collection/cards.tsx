import Card from "../../interfaces/card";

interface CardsProps {
  cards: Array<{
    id: string;
    default: number;
    details: string;
  }>;
}

const Cards = ({ cards }: CardsProps) => {
  let totalPrice = 0;

  return (
    <div className="mx-auto">
      <table className="mx-auto">
        <thead className="table-auto">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Number</th>
            <th className="px-4 py-2">Set name</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody className="table-auto">
          {cards.map((card) => {
            const cardInfos: Card = JSON.parse(card.details);
            totalPrice += cardInfos.cardmarket.prices.avg30;

            return (
              <tr>
                <td className="border px-4 py-2">{cardInfos.name}</td>
                <td className="border px-4 py-2">
                  {cardInfos.number} / {cardInfos.set.total}
                </td>
                <td className="border px-4 py-2"> {cardInfos.set.name}</td>
                <td className="border px-4 py-2">
                  {cardInfos.cardmarket.prices.avg30}
                </td>
                <td className="border px-4 py-2">{card.default}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>{Math.round(totalPrice)}</div>
    </div>
  );
};

export default Cards;
