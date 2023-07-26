import React from 'react'
import EventCard from '../components/EventCard/EventCard'
import { EventData } from '@/lib/data/EventData'

export const metadata = {
  title: "Our Events",
  description: "",
};

const page = () => {
  return (
    <div className='min-h-screen w-full p-4 bg-[#0D1116] flex flex-col gap-28'>
    {
      EventData.map((item)=>{
        const currentDate = new Date().getTime();
      const past = currentDate < new Date(item.date).getTime() ? false : true;
      const isUpcoming=past?false:true;
        return(
          <EventCard
          title={item.title}
          content={item.content}
          imgSrc={'/events/'+item.imgSrc}
          lazyImgSrc={'/events/lazy/'+item.imgSrc}
          date={item.date}
             isUpcoming={isUpcoming}
             key={item.date}
          />

        )
      })
    }
    </div>
  )
}

export default page