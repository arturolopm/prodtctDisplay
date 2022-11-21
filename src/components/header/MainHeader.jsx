import logoSneakers from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import {useState} from 'react'

const MainHeader = () => {

    const [navClass, setNavClass] = useState("hidden font-bold md:mr-auto md:flex md:flex-row md:gap-4 md:static md:p-0")
    const handleOpenMenu = () => {
      setNavClass('absolute font-bold top-0 left-0 flex h-full w-4/5 p-8 gap-y-5 bg-white flex-col md:mr-auto md:flex md:flex-row md:gap-4 md:static md:p-0')
    }
    const handleCloseMenu = () => {
      setNavClass("hidden font-bold md:mr-auto md:flex md:flex-row md:gap-4 md:static md:p-0")
    }
 

  return (
    <header className="container mx-auto flex items-center bg-gray-200 gap-8 px-4 py-8">
      <button className="md:hidden" onClick={handleOpenMenu}>
        <MenuIcon />
      </button>
      <img className="mr-auto mb-1 h-5 md:mr-0" 
            src={logoSneakers} 
            alt="Logo Sneakers" />
      <nav className={navClass}>
        <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
          <CloseIcon />
        </button>
        <a href="#">Collections</a>
        <a href="#">Men</a>
        <a href="#">Woman</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <div className="flex gap-4">
        <button>
          <CartIcon />
        </button>
        <img src={AvatarImage} className="w-10" alt=""></img>
      </div>
    </header>
  );
};

export default MainHeader;
