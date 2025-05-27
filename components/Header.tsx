import {cn} from "./NavItems";
import {Link, useLocation} from "react-router";
import {ButtonComponent} from "@syncfusion/ej2-react-buttons";

interface Props{
    title:string,
    description:string,
    ctaText?:string,
    ctaLink?:string,

}




const Header =({title,description,ctaLink,ctaText}:Props)=>{
    const location = useLocation();
    return(
        <header className="header">
            <article>
                <h1 className={cn("text-dark-100",location.pathname==='/' ? 'text-2xl md:text-4xl font-bold':
                    'text-xl md:text-2xl font-semibold')}>{title}</h1>
                <p className={cn("text-gray-100 font-normal",
                    location.pathname==='/' ? 'text-base md:text-lg font-bold':
                    'text-sm md:text-lg')}>{description}</p>

            </article>
            {ctaLink && ctaText && (
                <Link to={ctaLink}>
                    <ButtonComponent type="button"
                    className="button-class hover:drop-shadow-2xl !h-11 !w-full md:w-[240px]">
                        <img src="/icons/plus.svg" className="size-5" alt="plus"/>
                        <span className=" p-16-semibold text-white">
                            {ctaText}
                        </span>


                    </ButtonComponent>
                </Link>
            )}
        </header>
    )
}
export default Header