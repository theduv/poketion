import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CardsList from "../../components/set/cardsList";
import Card from "../../interfaces/card";

const Set = () => {
  const router = useRouter();
  const [cards, setCards] = useState<Array<Card>>([]);
  const { id } = router.query;

  const fetchSet = async () => {
    try {
      const res = await fetch(`/api/set/${id}`);
      if (res) {
        const body = await res.json();
        setCards(body.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (id) {
      fetchSet();
    }
  }, [id]);

  return (
    <div className="h-full overlfow-y-auto ">
      <CardsList cards={cards} />
    </div>
  );
};

export default Set;
