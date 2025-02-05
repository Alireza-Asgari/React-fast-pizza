import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-500 bg-yellow-500 p-4 py-3 uppercase sm:px-6">
      <Link
        to="/"
        className="text-sm uppercase tracking-widest text-blue-500 hover:text-blue-700"
      >
        Fast React Pizza co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
