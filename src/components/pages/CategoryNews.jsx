import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard";


const CategoryNews = () => {
    const {data: news} =useLoaderData();
    return (
        <div>
            <h1 className="font-semibold text-xl ">Dragon News Home</h1>
            <div>
                {
                    news.map(singleNews=><NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;