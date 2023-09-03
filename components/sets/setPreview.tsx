import Image from "next/image";
import Link from "next/link";
import Set from "../../interfaces/set";

interface SetPreviewProps {
  set: Set;
}

const SetPreview = ({ set }: SetPreviewProps) => {
  return (
    <Link
      href={`/set/${set.id}`}
      className="rounded-lg bg-poke-black space-y-2 w-92 h-16 items-center text-poke-white flex justify-between px-4 py-1"
    >
      <h1 className="text-2xl break-words">{set.name}</h1>
      <Image src={set.images.symbol} alt={set.id} width={30} height={30} />
    </Link>
  );
};

export default SetPreview;
