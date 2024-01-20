import { Email, Facebook, Instagram, LocationOn, Phone, Twitter, WhatsApp } from '@mui/icons-material';
import { appleStore, playStore } from '../../data/data';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-orange-100">
            <div className="flex flex-col gap-5 md:flex-row md:justify-between md:w-[90vw] lg:w-[95vw] max-w-[1200px] md:m-auto items-center py-5 md:py-10">

                <div className="flex flex-col gap-2">
                    <h2 className=' text-center font-semibold'>SOCIAL MEDIAS</h2>
                    <ul className="flex gap-3">
                        <li className="cursor-pointer hover:text-blue-500">
                            <Facebook />
                        </li>
                        <li className="cursor-pointer hover:text-orange-500">
                            <Instagram />
                        </li>
                        <li className="cursor-pointer hover:text-green-500">
                            <WhatsApp />
                        </li>
                        <li className="cursor-pointer hover:text-sky-500">
                            <Twitter />
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col gap-2">
                    <h2 className='text-center font-semibold'>DOWNLOAD OUR APP</h2>

                    <div className="flex justify-center gap-2">
                        <img className="w-[40%] lg:w-[50%] cursor-pointer" src={appleStore} alt="APPLE STORE" />
                        <img className="w-[40%] lg:w-[50%] cursor-pointer" src={playStore} alt="PLAY STORE" />
                    </div>
                </div>

                <div className="">
                    <div className="flex">
                        <di className=''>
                            <LocationOn />
                        </di>
                        <div className="">
                            99 Street Name - City
                        </div>
                    </div>

                    <div className="flex">
                        <div className="">
                            <Phone />
                        </div>
                        <div className="">
                            +99 999 999 999
                        </div>
                    </div>

                    <div className="flex">
                        <div className="">
                            <Email />
                        </div>
                        <div className="">
                            ecommerce@example.com
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-300 text-center py-4">
                <span> &copy; 2023. Developed by </span>
                <Link className='font-bold' to={"https://www.michelpomerantzeff.com"} target='_blank' rel="noopener noreferrer">
                    Michel Pomerantzeff
                </Link>
            </div>
        </footer>
    )
}
