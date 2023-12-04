import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { RiVideoAddLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { MdKeyboardVoice } from "react-icons/md";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-14 px-5">

      <div className="flex items-center gap-6">
        <RxHamburgerMenu className="text-2xl" />
        <img src="./images/logo.png" alt="logo" className="h-5" />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center h-11">
          <input type="text" placeholder="Search" className="bg-[#121212] text-[#ffffffe0] border border-[#303030] w-[550px] h-full rounded-l-full pl-5" />
          <div className="text-2xl bg-[#ffffff14] h-full flex items-center justify-center w-16 rounded-r-full cursor-pointer">
            <IoSearchOutline />
          </div>
        </div>
        <button className="bg-[#ffffff14] h-11 flex justify-center items-center w-11 rounded-full cursor-pointer">
          <MdKeyboardVoice className="text-2xl" />
        </button>
      </div>

      <div className="flex items-center gap-6 cursor-pointer">
        <RiVideoAddLine className="text-2xl" />
        <FaRegBell className="text-2xl" />
        <FaUserCircle className="text-2xl" />
      </div>

    </header>
  )
}

export default Header