import Link from "next/link";
import { useAuth } from "../contexts/firebase";

const Header = () => {
  const { currentUser, userData } = useAuth();

  return (
    <div className="w-full bg-poke-black p-4 text-poke-white flex items-center justify-between">
      <Link href="/">
        <h1 className="text-3xl">Poketion</h1>
      </Link>
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
