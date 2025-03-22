import Image from "next/image"
import getVenue from "@/libs/getVenue"
import Link from "next/link"
export default  async function CardDetailPage( {params}:{params: {vid:string}}){
   
    const venueDetail = await getVenue(params.vid)
/*
   const mockVenueRepo = new Map()
   mockVenueRepo.set("001",{ name:"The Bloom Pavilion",image: "/img/bloom.jpg"})
   mockVenueRepo.set("002",{ name:"Spark Space",image: "/img/sparkspace.jpg"})
   mockVenueRepo.set("003",{ name:"The Grand Table",image: "/img/grandtable.jpg"})
  */

   
    return(
        <main className="text-center p-5">
            <h1 className="text-lg font-medium">{venueDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                    <Image src={venueDetail.data.picture}
                    alt='Venue Image'
                    width={0} height={0} sizes="100vw"
                    className="rounded-lg w-[30%]"/>
                    <div className="text-left">
                    <div className="text-md mx-5">Name: {venueDetail.data.name}</div> 
                    <div className="text-md mx-5">Address: {venueDetail.data.address}</div>
                    <div className="text-md mx-5">District: {venueDetail.data.district}</div>
                    <div className="text-md mx-5">Postal Code: {venueDetail.data.postalcode}</div>
                    <div className="text-md mx-5">Tel: {venueDetail.data.tel}</div>
                    <div className="text-md mx-5">Daily Rate: {venueDetail.data.dailyrate}</div> 
                   
                   <Link href={`/booking?id=${params.vid}&name=${venueDetail.data.name}`}>
                   <button className='bg-red-600 text-white bordor bordor-cyan-600
                    font-semibold py-2 px-2 m-2 rounded z-30 absolute 
                 hover:bg-yellow-300 hover:text-red-600 hover:border-transparent'
                > Make Booking
     
                    </button>
                   </Link>
                    </div> 
                     
                  
            </div>
        </main>
    )
}

