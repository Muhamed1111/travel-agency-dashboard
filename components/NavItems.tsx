import {Link} from "react-router-dom";
import {sidebarItems} from "../app/constants";
import {NavLink} from "react-router";
import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
const NavItems=({handleClick}:{handleClick?:()=>void})=>{

const user ={
    name:'Adrian',
    email:'contact@jsmastery.pro',
    image:'/images/david.webp',
}
    return (
        <section className="nav-items">
            <Link to="/" className="link-logo" >
                <img src="/icons/logo.svg" alt="logo" className="size-[30px]" />
                <h1>Turixo</h1>
            </Link>
            <div className="container">
                <nav>
                    {sidebarItems.map(({ id, href, icon, label }) => (
                        <NavLink to={href} key={id}>
                            {({ isActive }: { isActive: boolean }) => (
                                <div className={cn('group nav-item', {
                                    'bg-primary-100 !text-white': isActive
                                })} onClick={handleClick}>
                                    <img
                                        src={icon}
                                        alt={label}
                                        className={`group-hover:brightness-0 size-0 group-hover:invert ${isActive ? 'brightness-0 invert' : 'text-dark-200'}`}
                                    />
                                    {label}
                                </div>
                            )}
                        </NavLink>
                    ))}
                </nav>
                <footer className="nav-footer">
                    <img src={user?.image || '/images/david.png'} alt={user?.name || 'David'}/>
                    <article>
                        <h2>{user?.name}</h2>
                        <p>{user?.email}</p>
                    </article>
                    <button onClick={()=>{
                        console.log('logout')
                    }}
                    className="cursor-pointer"
                    >
                        <img src="/icons/logout.svg" alt="logout"
                        className="size-6"
                        />

                    </button>
                </footer>
            </div>
        </section>
    )
}
export default NavItems