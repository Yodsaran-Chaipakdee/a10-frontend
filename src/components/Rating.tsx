'use client'
import { useState } from 'react';
import Rating from '@mui/material/Rating';

interface CustomRatingProps {
  venueName: string;
  onChange: (event: React.SyntheticEvent, newValue: number | null) => void;
}

export default function CustomRating({ venueName, onChange }: CustomRatingProps) {
  const [value, setValue] = useState<number | null>(0);

  return (
    <div>
      <Rating
  name={venueName}
  value={value}
  onClick={(event) => event.stopPropagation()}
  onChange={(event, newValue) => {
    setValue(newValue);
    onChange(event, newValue); 
  }}
/>

    </div>
  );
}
