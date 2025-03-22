'use client'
import { useReducer } from "react";
import Card from "./Card";
import CustomRating from "./Rating"; // ใช้ CustomRating ของเราเอง
import Link from "next/link";

export default function CardPanel() {
  const compareReducer = (
    compareList: Map<string, number>,
    action: { type: string; venueName: string; rating?: number }
  ) => {
    switch (action.type) {
      case "add":
        return new Map(compareList.set(action.venueName, action.rating ?? 0));
      case "remove":
        compareList.delete(action.venueName);
        return new Map(compareList);
      case "updateRating":
        return new Map(compareList.set(action.venueName, action.rating ?? 0));
      default:
        return compareList;
    }
  };

  const initialVenues = new Map([
    ['The Bloom Pavilion', 0],
    ['Spark Space', 0],
    ['The Grand Table', 0],
  ]);
  const [compareList, dispatchCompare] = useReducer(compareReducer, initialVenues);

  const mockVenueRepo = [
    {vid:"001", name:"The Bloom Pavilion",image: "/img/bloom.jpg"},
    {vid:"002", name:"Spark Space",image: "/img/sparkspace.jpg"},
    {vid:"003", name:"The Grand Table",image: "/img/grandtable.jpg"},
  ]

  return (
    <div>
      <div style={{
        margin: "20px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignContent: "space-around"
      }}>
       {
          mockVenueRepo.map((cardItem)=>(
            <Link href={`/venue/${cardItem.vid}`} className="w-1/5">
          <div>
    <Card
      imgSrc={cardItem.image}
      venueName={cardItem.name}
      onRateChange={(venue, rating) => dispatchCompare({ type: "updateRating", venueName: venue, rating })}
      />
         </div>
            </Link>
          ))
       }
      </div>

      <div className="w-full text-xl font-medium">
        Venue List with Ratings : {compareList.size}
      </div>
      {Array.from(compareList.entries()).map(([venue, rating]) => (
        <div key={venue}>
          <span
            onClick={() => dispatchCompare({ type: 'remove', venueName: venue })}
            style={{ cursor: 'pointer' }}
          >
            {`${venue} Rating : ${rating}`}
          </span>
        </div>
      ))}
    </div>
  );
}
