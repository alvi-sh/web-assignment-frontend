import React, {useState, useEffect} from "react";
import {useProductContext} from "../context/ProductContext";
import {Link} from "react-router-dom";

const LandingPage = () => {
    const {products, fetchProducts} = useProductContext();
    const [divanSofaImage, setDivanSofaImage] = useState(null);


    useEffect(() => {
        // Fetch product when the component mounts
        fetchProducts();
    }, [fetchProducts]);

    useEffect(() => {
        // Find the product with title "Divan Sofa" and set the image
        const divanSofaProduct = products.find((product) => product.title === "Divan Sofa");
        if (divanSofaProduct) {
            setDivanSofaImage(divanSofaProduct.base64Image);
        }
    }, [products]);

    return (
        <div className="min-h-[650px] flex justify-center items-center py-12" style={{backgroundColor: "#0766AD"}}>
            <div className="container">
                <div
                    style={{backgroundColor: "#0766AD"}}
                    className="grid   grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl"

                >
                    {/* first col */}
                    <div className="p-6 sm:p-8">
                        <p data-aos="slide-right" className="text-sm" style={{color: "white"}}>
                            heavy discount
                        </p>
                        <h1
                            data-aos="zoom-out"
                            className="uppercase text-white text-4xl lg:text-7xl font-bold "
                            style={{color: "white"}}
                        >
                            Divan Sofa
                        </h1>
                        <p data-aos="fade-up" className="text-sm" style={{color: "white"}}>
                            made with love
                        </p>
                    </div>
                    {/* second col */}
                    <div data-aos="zoom-in" className="h-full flex items-center">
                        {divanSofaImage && (

                            <img
                                src={`data:image/png;base64, ${divanSofaImage}`}
                                alt="Divan Sofa"
                                className="scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,.6)] object-cover"
                            />
                        )}
                    </div>
                    {/* third col */}
                    <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
                        <p data-aos="zoom-out" className="font-bold text-xl" style={{color: "white"}}>
                            Nothing can be more confortable
                        </p>
                        <p data-aos="fade-up" className="text-3xl sm:text-5xl font-bold text-white"
                           style={{color: "white"}}>
                            Winter Sale
                        </p>
                        <p data-aos="fade-up" className="text-sm tracking-wide leading-5 text-white"
                           style={{color: "white"}}>
                            This is made from most expensive and durable wood in nature, Nothng can be more confortable.
                        </p>
                        <div data-aos="fade-up" data-aos-offset="0">
                            <Link
                                to={`/products/${encodeURIComponent(products.find((product) => product.title === "Divan Sofa")?.productId || "")}`}>
                                <button
                                    style={{color: "#4460e6"}}
                                    className="bg-white py-2 px-4 rounded-full"
                                >
                                    Find More
                                </button>
                            </Link>
                        </div>


                    </div>

                </div>
            </div>
        </div>


    );
};

export default LandingPage;
