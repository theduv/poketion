import { useEffect, useState } from "react";
import SetPreview from "../components/sets/setPreview";

const Sets = () => {
  const [sets, setSets] = useState([]);
  const [displayedSets, setDisplayedSets] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const fetchSets = async () => {
    try {
      const res = await fetch("/api/sets");
      if (res) {
        const body = await res.json();
        setSets(body.data);
        setDisplayedSets(body.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onChangeSearch = (e: any) => {
    setSearchValue(e.target.value);
  };
  useEffect(() => {
    setDisplayedSets(
      sets.filter(
        (set: any) =>
          set.id.toLowerCase().includes(searchValue.toLowerCase()) ||
          set.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue]);

  useEffect(() => {
    fetchSets();
  }, []);

  return (
    <div className="flex flex-col space-y-2">
      <input
        value={searchValue}
        onChange={onChangeSearch}
        type="text"
        placeholder="Search by set name or id"
        className="bg-gray-700 text-white rounded-lg px-2 py-2 w-1/4"
      />

      <div className="grid grid-cols-3 gap-x-2 gap-y-2">
        {displayedSets.map((set) => (
          <SetPreview set={set} />
        ))}
      </div>
    </div>
  );
};

export default Sets;
