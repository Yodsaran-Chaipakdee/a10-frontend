

import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {Dayjs} from 'dayjs';

export default function DateReserve( {onDateChange}:{onDateChange:Function} ) {
  
  const [reserveDate ,setReserveDate ] = useState<Dayjs|null>(null)

  return (
    <div className='bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center'>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker className='bg-white'
      value={reserveDate}
      onChange={(value)=>{setReserveDate(value); onDateChange(value)}}/>
      </LocalizationProvider>

    
    

    </div>
  );
}
