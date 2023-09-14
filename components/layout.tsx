import Header from "./header";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-poke-white h-screen text-poke-black">
      <Header />
      <div className="p-12 h-full">{children}</div>
    </div>
  );
};

export default Layout;
