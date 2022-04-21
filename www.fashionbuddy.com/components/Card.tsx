import { FC } from "react";
import StarRatings from "react-star-ratings";

const Card: FC<{name: string; price: number; rating: number, id: string}> = ({name, price, rating, id}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg" key={id} >
            <img className="w-full" src="#" alt="this is image section" />
            <div className="bg-cyan-50 px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <div className="font-bold text-xl mb-2">{price}</div>
                <StarRatings rating={rating} starRatedColor="red" />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-3 py-2 px-4 rounded">
                    Add to cart
                </button>
                <button className="bg-blue-500 mx-12 hover:bg-blue-700 text-white font-bold my-3 py-2 px-4 rounded">
                    Shop Now
                </button>
            </div>
        </div>
    );
};

export default Card;
