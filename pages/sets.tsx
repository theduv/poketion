import { useEffect, useState } from "react";
import SetPreview from "../components/sets/setPreview";

const Sets = () => {
  const [sets, setSets] = useState([]);

  const fetchSets = async () => {
    try {
      const res = await fetch("/api/sets");
      if (res) {
        const body = await res.json();
        setSets(body.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchSets();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-2">
      {sets.map((set) => (
        <SetPreview set={set} />
      ))}
    </div>
  );
};

export default Sets;
