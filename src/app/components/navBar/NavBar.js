import Link from "next/link";
import { AiTwotoneHome } from 'react-icons/ai';
import { FaNotesMedical } from 'react-icons/fa6';
const NavBar = ()=>{
    const navLinks = [
        {
            icons: <AiTwotoneHome/>,
            link: "/",
            title: "Home"
        },
        {
            icons:<FaNotesMedical/>,
            link: "/addNote",
            title: "Add"
        }
    ]
    return(
        <div className=" fixed bottom-5 left-1/2 -translate-1/2 bg-secdanry/40 backdrop-blur-xl !px-5 !py-4 rounded-2xl">
            <div className="flex gap-5">
                {
                    navLinks.map((l, i)=>{
                        return(
                            <Link href={l.link} className="text-2xl hover:*:visible" key={i}>
                                {l.icons}
                                <div className=" absolute transform translate-y-[-80px] translate-x-[-10px] invisible text-sm bg-secdanry !px-2 !py-1 rounded-lg  border-background">
                                    {l.title}
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
}


export default NavBar;