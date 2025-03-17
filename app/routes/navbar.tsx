import {useState} from "react";

export default function Navbar() {
    const [selected, setSelected] = useState("/");

    return (
        <div className="bg-gray-400 text-sm items-center flex">
            <div className=" flex gap-5 p-10 flex-[95%]">
                {["/", "/about", "/contact", "/services"].map((link) => (
                    <a
                        key={link}
                        href={link}
                        onClick={() => setSelected(link)}
                        className={`flex flex-col gap-1 ${
                            selected === link ? "font-bold underline" : ""
                        }`}
                    >
                        {link === "/"
                            ? "Home"
                            : link.replace("/", "").charAt(0).toUpperCase() + link.slice(2)}
                    </a>
                ))}
            </div>
            <button className='bg-red-500 p-2 flex rounded flex-[5%] mr-5 justify-center'>Subscribe</button>
        </div>
    );
}
