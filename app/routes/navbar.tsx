import {useState} from "react";

export default function Navbar() {
    const [selected, setSelected] = useState("/");

    return (
        <div className="bg-gray-400 text-sm items-center flex">
            <div className="flex gap-5 p-10 flex-[95%]">
                {["/", "/about", "/contact", "/services"].map((link) => (
                    <a
                        key={link}
                        href={link}
                        onClick={(e) => {
                            e.preventDefault();
                            setSelected(link);
                        }}
                        className={`flex flex-col gap-1 ${selected === link ? "font-bold underline" : ""}`}
                    >
                        {link === "/"
                            ? "Home"
                            : link.replace(/^\/+/, "").replace(/^\w/, (char) => char.toUpperCase())}
                    </a>
                ))}
            </div>
            <button className="bg-red-500 p-2 flex rounded flex-[5%] mr-5 justify-center">
                Subscribe
            </button>
        </div>
    );
}
