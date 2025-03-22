import Card from "./Card";
import Link from "next/link";

import { VenuesItem , VenuesJson} from "../../interface";

export default async function VenueCatalog({ venuesJson }: { venuesJson: VenuesJson | Promise<VenuesJson> }) {
  const venuesJsonReady = await venuesJson; // ทำให้รองรับทั้ง Promise และ Object ปกติ
  return (
    <>
      <h2>Explore {venuesJsonReady.count} models in our catalog</h2>

      <div className="flex flex-wrap justify-around">
        {venuesJsonReady.data.map((cardItem) => (
          <Link href={`/venue/${cardItem.id}`} className="w-1/5" key={cardItem.id}>
            <div>
              <Card imgSrc={cardItem.picture} venueName={cardItem.name} />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
