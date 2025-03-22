"use client";
import { useDispatch } from "react-redux";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";

export default function BookingList() {
    const bookItem = useAppSelector((state) => state.bookSlice.bookItems);
    const dispatch = useDispatch<AppDispatch>();

    console.log(bookItem); // ตรวจสอบข้อมูล

    return (
        <>
            {bookItem.length > 0 ? (
                bookItem.map((item) => (
                    <div
                        className="bg-slate-200 rounded px-5 mx-5 py-2 my-2 relative"
                        key={item.nameLastname}
                    >
                        <div className="text-xl">{item.nameLastname}</div>
                        <div className="text-xl">{item.tel}</div>
                        <div className="text-xl">{item.venue}</div>
                        <div className="text-xl">{item.bookDate}</div>

                        <button
                            className="bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded absolute bottom-2 right-2"
                            onClick={() => dispatch(removeBooking(item))}
                        >
                            Remove
                        </button>
                    </div>
                ))
            ) : (
                <p className="text-center text-red-500 text-xl py-4">
                    No Venue Booking
                </p>
            )}
        </>
    );
}
