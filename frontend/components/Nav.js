import Link from "next/link";
import NavStyle from "./styles/NavStyles"
const Nav = ()=>(
    <NavStyle>
        <Link href="/items">
         <a>Shop</a>
        </Link>
        <Link href="/sell">
         <a>Sell</a>
         </Link>
         <Link href="/signup">
         <a>Signup</a>
         </Link>
         <Link href="/orders">
         <a>Orders</a>
         </Link>
         <Link href="/me">
         <a>Accounts</a>
         </Link>
    </NavStyle>

);

export default Nav;