
import { NavbarProps } from "./Navbar.type"
import { NavbarDesktop } from "./NavbarDesktop"
import { NavbarMobile } from "./NavbarMobile"

export const Navbar =(props:NavbarProps) => {
  const {users} = props


  return (
    <nav className="" >
      <div className="hidden  mx-auto md:block">
        <NavbarDesktop users={users} />
      </div>
      <div className="md:hidden">
        <NavbarMobile users={users}/>
      </div>
    </nav>
  )
}