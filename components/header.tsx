import Link from "next/link";
import { useAuth } from "../contexts/firebase";

const Header = () => {
  const { currentUser, userData } = useAuth();

  return (
    <div className="w-full bg-poke-black p-4 text-poke-white flex items-center justify-between">
      <div className="flex space-x-6">
        <Link href="/">
          <h1 className="text-3xl">Poketion</h1>
        </Link>
        <Link href="/sets">
          <h1 className="text-2xl">Sets</h1>
        </Link>
        <Link href="/collection">
          <h1 className="text-2xl">Collection</h1>
        </Link>
      </div>
      {currentUser ? (
        <div className="flex items-center">
          <h1>{userData.username}</h1>
        </div>
      ) : (
        <Link href="/logIn">Log in</Link>
      )}
    </div>
  );
};

export default Header;
