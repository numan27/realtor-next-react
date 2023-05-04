import Link from "next/link";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa"
import { BsGridFill } from "react-icons/bs"
import { GoVerified } from "react-icons/go"
import millify from "millify";
import DefaultImage from "../assets/images/house.jpg"

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => (
    <Link href={`/property/${externalID}`} passHref className="">
        <div className="flex flex-col p-4 pt-0 justify-start cursor-pointer w-full">
            <div className="cover">
                <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} alt="house" />
            </div>
            <div className="w-full">
                <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center">
                        <div className="px-3 text-green-500	">{isVerified && <GoVerified className="text-lg" />}</div>
                        <h4 className="text-lg font-bold">AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</h4>
                    </div>
                    <Image src={agency?.logo?.url} width={56} height={0} alt="logo" />
                </div>

                <div className="flex items-center justify-between spanWrap text-blue-500 px-3 py-4">
                    <span className="flex items-center"> {rooms} <FaBed className="mx-2" /></span> | <span className="flex items-center ">{baths} <FaBath className="mx-2" /></span> |  <span className="flex items-center">{millify(area)} sqft <BsGridFill className="mx-2" /> </span>
                </div>
                <h4 className="text-lg">{title.length > 40 ? `${title.substring(0, 40)}...` : title}</h4>
            </div>
        </div>
    </Link>
)

export default Property;