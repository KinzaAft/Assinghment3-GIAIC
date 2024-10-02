import Link from "next/link";
export default function Footer(){
    return (
        <div className="footer">
            <div className="first">
                <h1 className="logo text-3xl ">Portfoilio</h1><br />    
                <h1 className="text-3xl text-white">Contact us</h1><br />
                <p className="text-2xl" >Gmail: kinzaaftab16@gmail.com</p>
                <p className="text-2xl">Linkdin: Kinza Aftab</p>
                <p className="text-2xl">Github: KinzaAft</p>
            </div>
            <div className="second">
            <h1 className="logo text-3xl ">Portfoilio</h1><br />    
                <h1 className="text-3xl text-white ">Links</h1><br />
                <p>
               <Link href="/">Home</Link>
                </p>
                <p>
              <Link href="/aboutUs">About</Link>
                </p>
                <p>
              <Link href="/contactUs">Contact us</Link>
                </p>
            </div>
            <div className="third ">Made By <span>Kinza Aftab</span></div>
        </div>

    )
}