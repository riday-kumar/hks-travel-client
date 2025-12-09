import { CiLocationOn } from "react-icons/ci";
import chittagong from "../../../assets/Chittagong-1440x600.jpg";
import Dhaka from "../../../assets/Dhaka.jpg";
import Rajshahi from "../../../assets/Rajshahi.webp";
import Rangpur from "../../../assets/Rangpur.webp";
import Teknef from "../../../assets/teknaf.avif";
import Sylhet from "../../../assets/Sylhet.jpg";

const routes = [
  {
    title: "Dhaka → Chittagong",
    distance: "265 KM",
    price: 680,
    img: chittagong,
  },
  {
    title: "Dhaka → Rajshahi",
    distance: "390 KM",
    price: 1050,
    img: Rajshahi,
  },
  {
    title: "Dhaka → Rangpur",
    distance: "247 KM",
    price: 500,
    img: Rangpur,
  },
  {
    title: "Dhaka → Sylhet",
    distance: "281 KM",
    price: 650,
    img: Sylhet,
  },
  {
    title: "Barisal → Dhaka",
    distance: "293 KM",
    price: 670,
    img: Dhaka,
  },
  {
    title: "Dhaka → Teknaf",
    distance: "458 KM",
    price: 1200,
    img: Teknef,
  },
];

const PopularRoutes = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold mb-8">Popular Bus Routes</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {routes.map((route, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md relative group"
          >
            <img
              src={route.img}
              alt={route.title}
              className="w-full h-56 object-cover group-hover:scale-105 duration-300"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            {/* Text */}
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-semibold">{route.title}</h3>

              <div className="flex justify-between items-center mt-2 text-sm opacity-95">
                <div className="flex items-center gap-1">
                  <CiLocationOn className="text-lg" />
                  {route.distance}
                </div>

                <p className="font-semibold">from ৳{route.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRoutes;
