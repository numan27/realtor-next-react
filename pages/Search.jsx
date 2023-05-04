import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { BsFilter } from 'react-icons/bs';
import SearchFilters from '@/components/SearchFilters';
import Property from '@/components/Property';
import Image from 'next/image';
import noresult from "../assets/images/noresult.svg";


const Search = () => {

    const router = useRouter();
    const [searchFilters, setSearchFilters] = useState();

    return (
        <div>
            <div className='flex font-bold p-3 items-center justify-center bg-gray-100 cursor-pointer'
                onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
            >
                <h6 className='text-lg  mr-2'>Search Property By Filters</h6>
                <BsFilter className='text-lg' />
            </div>
            {searchFilters && <SearchFilters />}

            <h4 className='font-bold text-2xl p-4'>
                Properties {router.query.purpose}
            </h4>

            <div className='flex items-center justify-center flex-wrap'>
                {[].map((property)=>{
                    <Property property={property} key={property.id}/>
                })
                }
                {[].length === 0 && (
                    <div className='flex items-center justify-center my-4 flex-col'>
                        <Image src={noresult} alt='no result'/>
                        <h5 className="text-2xl mt-4">No results found</h5>
                    </div>
                )
                }
              
            </div>
        </div>
    )
}

export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';
  
    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
  
    return {
      props: {
        properties: data?.hits,
      },
    };
  }
  
  export default Search;