import { doc, increment, setDoc } from "firebase/firestore";
import Image from "next/image";
import { useAuth } from "../../contexts/firebase";
import { firestore } from "../../firebase/firebase";
import Card from "../../interfaces/card";

interface CardPreviewProps {
  card: Card;
}

const CardPreview = ({ card }: CardPreviewProps) => {
  const { userData } = useAuth();

  const onClickAdd = async () => {
    try {
      setDoc(
        doc(firestore, "users", userData.uid, "collection", card.id),
        {
          default: increment(1),
          id: card.id,
          details: JSON.stringify(card),
        },
        { merge: true }
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col bg-poke-black border border-gray-500 rounded-lg items-center space-y-4">
      <h1 className="text-2xl rounded-t-lg bg-poke-red w-full text-center text-poke-white p-2">
        {card.name}
      </h1>
      <div className="p-8 flex flex-col items-center space-y-4">
        <Image src={card.images.large} alt={card.id} width={200} height={120} />
        <button
          onClick={onClickAdd}
          className="text-poke-white w-10 h-10 text-2xl bg-poke-light-green rounded-md"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CardPreview;
