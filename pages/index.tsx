import ButtonLink from "../components/index/buttonLink";

export default function Home() {
  return (
    <div className="flex flex-col space-y-2 items-center w-full">
      <div className="flex flex-col space-y-2 items-center w-1/5 border">
        <ButtonLink title="List of sets" url="/sets" />
        <ButtonLink title="My collection" url="/collection" />
      </div>
    </div>
  );
}
