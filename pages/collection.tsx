import { collection, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Cards from "../components/collection/cards";
import { useAuth } from "../contexts/firebase";
import { firestore } from "../firebase/firebase";

const Collection = () => {
  const [cards, setCards] = useState<Array<any>>([]);
  const { userData } = useAuth();

  const fetchCollection = async () => {
    try {
      const snap = await getDocs(
        collection(firestore, "users", userData.uid, "collection")
      );
      const fetchedCards = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCards(fetchedCards);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchCollection();
  }, []);

  return (
    <div className="overflow-y-scroll">
      <Cards cards={cards} />
    </div>
  );
};

export default Collection;
