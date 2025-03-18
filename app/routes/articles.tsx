import {useEffect, useState} from "react";
import {toast} from 'sonner'

interface Article {
    id: number;
    title: string;
    description: string;
    url: string;
    social_image: string;
}

function Articles() {
    const [res, setRes] = useState<Article[] | null>(null);
    const [change, setChange] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
            setLoading(true);
            const fetchData = async () => {
                try {
                    const response = await fetch("https://dev.to/api/articles");

                    if (!response.ok) {
                        toast.error("Route not found");
                    }

                    const data: Article[] = await response.json();

                    setRes(data);

                    console.log(data)
                    toast.success("data successfully retrieved");
                    setLoading(false);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };
            fetchData()
        },
        [change]);

    return (
        <div className='bg-gray-400 p-10'>
            {loading && (
                <div className='w-full h-screen flex items-start justify-center '>
                    <div
                        className="motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-whiteinline-block dark:text-whiteinline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] dark:text-white">
                    </div>
                </div>
            )}
            <div className="flex flex-wrap gap-10 justify-center h-full">
                {res?.map((item) => (
                    <div
                        key={item.id}
                        className="shadow-lg rounded-sm bg-gray-200 p-4 flex flex-col gap-3 w-1/4"
                    >
                        <img
                            src={item.social_image || "/fallback-img"}
                            alt="Corresponding article"
                            className="w-full h-40 object-cover rounded"
                        />
                        <h1 className="font-bold mt-2">{item.title}</h1>
                        <p className="text-sm">{item.description}</p>
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 underline mt-2 block"
                        >
                            Read more
                        </a>
                    </div>
                ))}
            </div>
            {!loading && (
                <button
                    onClick={() => setChange((prev) => !prev)}
                    className="p-3 m-10 bg-blue-500 text-white rounded"
                >
                    Refresh
                </button>)}
        </div>
    );
}

export default Articles;
