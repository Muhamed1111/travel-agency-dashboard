import {Link,useLoaderData,useNavigate} from "react-router";
import {sidebarItems} from "../app/constants";
import {NavLink} from "react-router";
import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";
import {logoutUser} from "../app/appwrite/auth";


export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
const NavItems=({handleClick}:{handleClick?:()=>void})=>{

const user = useLoaderData();
const navigate = useNavigate();
const  handleLogout = async ()=>{
    await logoutUser();
    navigate('/sign-in');
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
                    <img src={user?.image || '/images/david.webp'} alt={user?.name || 'David'} referrerPolicy="no-referrer"/>
                    <article>
                        <h2>{user?.name}</h2>
                        <p>{user?.email}</p>
                    </article>
                    <button onClick={()=>handleLogout()}
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