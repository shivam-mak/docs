import React,{useRef} from 'react'
import Card from './Card'

const Foreground = () => {
  const ref=useRef(null);
  const data=[
    {
      desc:" lorem6",
      filesize:"9mb",
      close:true,
      tag:{isopen:true,tagTitle:"Download Now",tagColor:"green"},
    },
    {
      desc:" lorem6",
      filesize:"9mb",
      close:false,
      tag:{isopen:true,tagTitle:"Download Now",tagColor:"blue"},
    },
    {
      desc:" lorem6",
      filesize:"6mb",
      close:false,
      tag:{isopen:false,tagTitle:"Download Now",tagColor:"blue"},
    },
  ];
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
       {data.map((item,index)=>(
        <Card data={item} reference={ref} />
       ))}
    </div>
  )
}

export default Foreground