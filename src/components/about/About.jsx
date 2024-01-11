import { aboutImg } from "../../data/data";

export default function About() {
    return (
        <section className="">
            <div className=" bg-rose-600 text-white pt-5 pb-20 md:pt-10 md:pb-32">
                <h1 className="max-w-[800px] m-auto text-center text-[1.4rem] md:text-[1.6rem] lg:text-[2rem] font-bold px-5">THE MISSING SOLUTION IN YOUR DAILY ROUTINE</h1>
                <p className="lg:max-w-[800px] md:max-w-[650px] m-auto text-center px-5">
                    If you appreciate the fusion of delectable and nutritious cuisine
                    that promotes wellness for both individuals and the planet, allow me
                    to present an enticing offering.
                </p>
            </div>
            <div className="p-4 -mt-20 max-w-[1000px] m-auto">
                <img className="about-img" src={aboutImg} alt="ABOUT HEADING IMG" />
            </div>

            <div className="max-w-[600px] m-auto">
                <div className="p-5">
                    <h1 className="text-[1.2rem] md:text-[1.6rem] lg:text-[2rem] font-bold">WE CONNECT YOU TO DELICIOUS FOOD</h1>
                    <p>
                        In collaboration with family farmers, we source fresh ingredients
                        directly from those who cultivate them to bring them to our
                        kitchen and ultimately to your table. We carefully curate a
                        selection of products to provide you with the finest options,
                        while our team of skilled chefs continuously craft incredible
                        dishes to enhance your everyday culinary experience.
                    </p>
                </div>

                <div className="p-5">
                    <h1 className="text-[1.2rem] md:text-[1.6rem] lg:text-[2rem] font-bold">DIVERSITY SPEAKS VOLUMES</h1>
                    <p>
                        We offer a wide range of ready-to-eat frozen meals to elevate your
                        daily routine. Moreover, we are constantly exploring new flavors
                        and culinary creations. With hundreds of dishes available on our
                        website and app, you'll find an extensive selection that caters to
                        your preferences.
                    </p>
                </div>

                <div className="p-5">
                    <h1 className="text-[1.2rem] md:text-[1.6rem] lg:text-[2rem] font-bold">LOTS OF TECHNOLOGY AND LOVE INVOLVED</h1>
                    <p>
                        We have a user-friendly app, seamless delivery services, and meals
                        that are easy to heat up and enjoy. As we learn from your orders,
                        we continuously strive to get closer to you and meet your needs.
                    </p>
                </div>
            </div>
        </section>
    )
}
