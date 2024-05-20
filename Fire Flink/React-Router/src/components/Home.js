import { Link, Outlet } from "react-router-dom";

export default function Home() {

    return (
        <>
        <h1 className="text-3xl font-bold text-orange-400 text-center ">Home page</h1>
        <div className="flex bg-gray-300 h-96 justify-center content-aroundflex-row" >
            <ul className="">
                <li><Link to={'child'}>Home</Link></li>
                <li><Link to={'Cap'}>About</Link></li>
                <li><Link to={'CTP'}>Team</Link></li>
                <li><Link to={'CcP'}>Contact</Link></li> 
            </ul>
        </div>
        <Outlet/>
        </>
    )
  }
  