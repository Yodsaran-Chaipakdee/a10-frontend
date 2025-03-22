'use client';
import DateReserve from "@/components/DateReserve";
import { addBooking } from "@/redux/features/bookSlice";
import { useState } from "react";
import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { BookingItem } from "../../../interface";
import { useSearchParams } from "next/navigation";

export default function Booking() {
    const url = useSearchParams();
    const dispatch = useDispatch<AppDispatch>();

    const [pickupDate, setPickupDate] = useState<Dayjs | null>(null);
    const [nameLastname, setNameLastname] = useState<string>(url.get('name') || "");
    const [tel, setTel] = useState<string>(url.get('tel') || "");
    const [venue, setVenue] = useState<string>(url.get('venue') || "Bloom");

    const makeBooking = () => {
        if (tel && nameLastname && pickupDate && venue) {
            const item: BookingItem = {
                nameLastname: nameLastname,
                tel: tel,
                venue: venue,
                bookDate: dayjs(pickupDate).format("YYYY/MM/DD"),
            };
            dispatch(addBooking(item));
        }
    };

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-2xl">Venue Booking Form</div>

            {/* TextField for Name-Lastname */}
            <input
                type="text"
                name="Name-Lastname"
                value={nameLastname}
                onChange={(e) => setNameLastname(e.target.value)}
                placeholder="Name-Lastname"
                className="border rounded p-2 w-full"
            />

            {/* TextField for Contact-Number */}
            <input
                type="text"
                name="Contact-Number"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                placeholder="Contact-Number"
                className="border rounded p-2 w-full"
            />

            {/* Select for Venue */}
            <select
                id="venue"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                className="border rounded p-2 w-full"
            >
                <option value="Bloom">The Bloom Pavilion</option>
                <option value="Spark">Spark Space</option>
                <option value="GrandTable">The Grand Table</option>
            </select>

            {/* DatePicker for Booking Date */}
            <DateReserve onDateChange={(value: Dayjs) => setPickupDate(value)} />

            {/* Button to submit the booking */}
            <button
                className="bg-cyan-600 text-white border border-cyan-600 font-semibold py-2 px-4 m-2 rounded hover:bg-cyan-300 hover:text-white hover:border-transparent"
                onClick={makeBooking}
            >
                Book Venue
            </button>
        </main>
    );
}
