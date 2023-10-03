import Image from "next/image";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-white border-b-2">
      <nav className="mx-auto flex max-w-7xl items-center justify-between lg:px-8">
        <div className="flex lg:flex-1">
          <Image
            height={200}
            width={350}
            src="/logo.png"
            alt="Convenient Cravings"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
