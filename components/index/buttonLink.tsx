import Link from "next/link";

interface ButtonLinkProps {
  url: string;
  title: string;
}

const ButtonLink = ({ url, title }: ButtonLinkProps) => {
  return (
    <Link href={url} className="w-full">
      <button className="py-4 px-12 bg-poke-red text-poke-white text-4xl font-bold rounded-md w-full">
        {title}
      </button>
    </Link>
  );
};

export default ButtonLink;
