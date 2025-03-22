import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import CustomRating from './Rating';

export default function Card({ 
  venueName, 
  imgSrc, 
  onRateChange // เพิ่ม prop นี้เพื่อรับ callback สำหรับอัปเดต rating
}: { 
  venueName: string; 
  imgSrc: string; 
  onRateChange?: (venue: string, rating: number) => void; // เพิ่ม function นี้
}) {
  return (
    <InteractiveCard contentName={venueName}>  
      <div className="w-full h-[70%] relative rounded-t-lg">
        <Image
          src={imgSrc}
          alt="Product Picture"
          fill={true}
          className="object-cover rounded-t-lg"
        />
      </div>
      <div className="w-full h-[15%] p-[10px]">{venueName}</div>
    
      <div className="w-full h-[15%] p-[10px]">
        {  onRateChange?
        <CustomRating 
          venueName={venueName} 
          onChange={(event, newValue) => {
            if (newValue !== null) {
              onRateChange(venueName, newValue); // ส่งค่า rating กลับไปยัง CardPanel
            }
          }}
          
        /> : ''
      }

        
        
      </div>
    </InteractiveCard>
  );
}
