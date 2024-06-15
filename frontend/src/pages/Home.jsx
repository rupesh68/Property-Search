import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import ListingItem from "../components/ListingItem";
import Glide from "@glidejs/glide";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const slider = new Glide(".glide-02", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3500,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/api/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <>
      {/* top */}
     
      <section className="text-gray-400 bg-zinc-900 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <Link
                  to={"/search"}
                  className="text-xs sm:text-sm text-white font-bold hover:underline"
                >
                  Lets get started...
                </Link>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="relative w-full glide-02">
              {/*    <!-- Slides --> */}
              <div className="overflow-hidden" data-glide-el="track">
                <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
                  <li>
                    <img
                      src="https://portlandpicture.com/wp-content/uploads/2022/02/DJI_0112-800x533.jpg"
                      className="w-full max-w-full max-h-full m-auto"
                    />
                  </li>
                  <li>
                    <img
                      src="https://portlandpicture.com/wp-content/uploads/2022/02/17-800x533.jpg"
                      className="w-full max-w-full max-h-full m-auto"
                    />
                  </li>
                  <li>
                    <img
                      src="https://imgs.search.brave.com/73joKCVOD1_Z6kyqhx9jYGEWfCa9PHALdyyQ5nxpwPM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wb3J0/bGFuZHBpY3R1cmUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzAyL0lNR180/NzI4LUVkaXQuanBn"
                      className="w-full max-w-full max-h-full m-auto"
                    />
                  </li>
                  <li>
                    <img
                      src="https://portlandpicture.com/wp-content/uploads/2022/02/DJI_0679-800x533.jpg"
                      className="w-full max-w-full max-h-full m-auto"
                    />
                  </li>
                  <li>
                    <img
                      src="https://portlandpicture.com/wp-content/uploads/2022/02/30-800x533.jpg"
                      className="w-full max-w-full max-h-full m-auto"
                    />
                  </li>
                </ul>
              </div>
              {/*    <!-- Indicators --> */}
              <div
                className="absolute bottom-0 flex items-center justify-center w-full gap-2"
                data-glide-el="controls[nav]"
              >
                <button
                  className="p-4 group"
                  data-glide-dir="=0"
                  aria-label="goto slide 1"
                >
                  <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                </button>
                <button
                  className="p-4 group"
                  data-glide-dir="=1"
                  aria-label="goto slide 2"
                >
                  <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                </button>
                <button
                  className="p-4 group"
                  data-glide-dir="=2"
                  aria-label="goto slide 3"
                >
                  <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                </button>
                <button
                  className="p-4 group"
                  data-glide-dir="=3"
                  aria-label="goto slide 4"
                >
                  <span className="block w-2 h-2 transition-colors duration-300 rounded-full bg-white/20 ring-1 ring-slate-700 focus:outline-none"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* swiper */}
       {/* <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing}>
              <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "cover",
                }}
                className="h-[500px]"
              ></div>
            </SwiperSlide>
          ))}
      </Swiper>  */}
      <section className="max-w-6xl bg-zinc-900 mx-auto p-3 flex flex-col gap-8 my-10">
     
        
      </section>
      
       
         




















      {/* listing results for offer, sale and rent */}

      <div className="max-w-6xl bg-zinc-900 mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent offers
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for rent
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for sale
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=sale"}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
