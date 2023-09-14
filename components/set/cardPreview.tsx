import { doc, increment, setDoc } from "firebase/firestore";
import Image from "next/image";
import { useAuth } from "../../contexts/firebase";
import { firestore } from "../../firebase/firebase";
import { useState } from "react";
import Card from "../../interfaces/card";

interface CardPreviewProps {
  card: Card;
}

const CardPreview = ({ card }: CardPreviewProps) => {
  const [quantityRegular, setQuantityRegular] = useState<number>(1);
  const [quantityReverse, setQuantityReverse] = useState<number>(1);
  const { userData } = useAuth();

  const onChangeQuantityRegular = (e: any) => {
    setQuantityRegular(e.target.value);
  };
  const onChangeQuantityReverse = (e: any) => {
    setQuantityReverse(e.target.value);
  };

  const onClickAddRegular = async () => {
    try {
      setDoc(
        doc(firestore, "users", userData.uid, "collection", card.id),
        {
          type: "regular",
          quantity: increment(quantityRegular),
          id: card.id,
          details: JSON.stringify(card),
        },
        { merge: true }
      );
    } catch (e) {
      console.log(e);
    }
    setQuantityRegular(1);
  };
  const onClickAddReverse = async () => {
    try {
      setDoc(
        doc(firestore, "users", userData.uid, "collection", card.id),
        {
          type: "reverse",
          quantity: increment(quantityReverse),
          id: card.id,
          details: JSON.stringify(card),
        },
        { merge: true }
      );
    } catch (e) {
      console.log(e);
    }
    setQuantityReverse(1);
  };

  return (
    <div className="flex flex-col bg-poke-black border border-gray-500 rounded-lg items-center space-y-4">
      <h1 className="text-2xl rounded-t-lg bg-poke-red w-full text-center text-poke-white p-2">
        {card.name}
      </h1>
      <div className="p-8 flex flex-col items-center space-y-4">
        <Image src={card.images.large} alt={card.id} width={200} height={120} />
        <div className="flex space-x-4">
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-300">Regular</h3>
            <input
              value={quantityRegular}
              onChange={onChangeQuantityRegular}
              className="bg-gray-300 w-10 h-10 rounded-lg text-center"
            />
            <button
              onClick={onClickAddRegular}
              className="text-poke-white w-10 h-10 text-2xl bg-poke-light-green rounded-md"
            >
              +
            </button>
          </div>
          <div className="flex items-center space-x-3">
            <h3 className="text-gray-300">Reverse</h3>
            <input
              value={quantityReverse}
              onChange={onChangeQuantityReverse}
              className="bg-gray-300 w-10 h-10 rounded-lg text-center"
            />
            <button
              onClick={onClickAddReverse}
              className="text-poke-white w-10 h-10 text-2xl bg-poke-light-green rounded-md"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
