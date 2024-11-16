import { Link, useLoaderData } from "react-router-dom";
import Header from "../Header";
import RightNav from "../layoutComponents/RightNav";


const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    const { title, details, image_url } = news;
    return (
        <div className='md:container mx-auto'>
            <header>
                <Header></Header>
            </header>
            <main className="grid md:grid-cols-12 pt-5 gap-8">
                <section className="col-span-9">
                    <h1 className="font-semibold text-xl mb-4">Dragon News</h1>
                    <div className="border border-gray-300 rounded-lg shadow-lg max-w-3xl mx-auto">
                        {/* Image Section */}
                        <img
                            src={image_url}
                            alt={title}
                            className="w-full  p-6 object-cover rounded-t-lg"
                        />

                        {/* Content Section */}
                        <div className="p-6">
                            {/* Title */}
                            <h2 className="text-2xl font-bold text-gray-800 leading-snug">
                                {title}
                            </h2>

                            {/* Details */}
                            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                                {details}
                            </p>

                            {/* Footer Section */}
                            <div className="mt-6">
                                <Link to="/category/08" className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600">
                                    All news in this category
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;