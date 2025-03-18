import React, {useState} from "react";
import {Form} from "@remix-run/react";
import {Resend} from 'resend';


export default function Navbar() {
    const [selected, setSelected] = useState("/");
    const [modal, setModal] = useState(false);
    const [email, setEmail] = useState("");

    const resend = new Resend('re_123456789');

    const handleModal = () => setModal(true);
    const closeModal = () => setModal(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await resend.emails.send({
                from: 'okolodubem9@gmail.com',
                to: 'okolodubem9@gmail.com',
                subject: 'BLOGIT',
                react: 'You have successfully subscribed to get blog posts regularly.',
            });
            alert('email sent')
        } catch (e) {
            console.log(e);
        }
        closeModal();
    }

    return (
        <div className="bg-gray-400 text-sm items-center flex relative">
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
            <button
                onClick={handleModal}
                className="bg-red-500 p-2 flex rounded flex-[5%] mr-5 justify-center"
            >
                Subscribe
            </button>

            {modal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-5  rounded shadow-lg w-1/3">
                        <div className='flex flex-col items-center justify-center'>
                            <h2 className="text-lg font-bold">Subscribe</h2>
                            <p className='py-4'>Subscribe to get regular blog posts directly to your e-mail.</p></div>
                        <Form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="block mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="border p-2 w-full rounded"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="flex justify-between">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                >
                                    Subscribe
                                </button>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="bg-gray-500 text-white px-4 py-2 rounded"
                                >
                                    Close
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            )}
        </div>
    );
}
