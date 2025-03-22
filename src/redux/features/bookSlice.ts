import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interface"; 

type Bookstate = {
    bookItems: BookingItem[];
};

const initialState: Bookstate = { bookItems: [] };

export const bookSlice = createSlice({
    name: "My booking",
    initialState,
    reducers: {
        addBooking: (state, action: PayloadAction<BookingItem>) => {
            const index = state.bookItems.findIndex(
                obj => obj.venue === action.payload.venue && obj.bookDate === action.payload.bookDate
            );

            if (index !== -1) {
                // ถ้าพบรายการที่จองสถานที่และวันเดียวกัน ให้แทนที่
                state.bookItems[index] = action.payload;
            } else {
                // ถ้ายังไม่มี ให้เพิ่มใหม่
                state.bookItems.push(action.payload);
            }
        },
        removeBooking: (state, action: PayloadAction<BookingItem>) => {
            state.bookItems = state.bookItems.filter(
                obj => obj.venue !== action.payload.venue || obj.bookDate !== action.payload.bookDate
            );
        }
    }
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;
