import { Button } from '@material-tailwind/react'
import Image from 'next/image'
import Link from 'next/link'
import { baseUrl, fetchApi } from '@/utils/fetchApi'

import Property from '@/components/Property'

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <div className='flex lg:flex-row flex-col justify-center items-center m-10'>
    <Image src={imageUrl} width={500} height={300} alt='banner' />
    <div className='p-6 text-center lg:text-left'>
      <p className='text-gray-500 text-base font-semibold'>{purpose}</p>
      <h1 className='text-3xl font-bold'>{title1} <br /> {title2}</h1>
      <h3 className='text-lg py-3 text-gray-700'>{desc1} <br /> {desc2}</h3>
      <Button variant='filled'>
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </div>
  </div>

)

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <div className='mx-auto'
    >
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Appartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <div className='flex flex-wrap'>
        {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
      </div>
      <Banner
        purpose="BUY A HOME"
        title1="Find, Buy and Own Your"
        title2="Dream Home"
        desc1="Explore Appartments, Villas, Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      <div className='flex flex-wrap'>
        {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
      </div>
    </div>

  )
}


export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
