import React,{useRef} from 'react'
import { FaRegFile } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"

const Card = ({data,  reference}) => {
  return (
    <motion.div  drag  dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.2}
    dragTransition={{ bounceStiffness:100,bounceDamping:10}}
    className=' relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10  overflow-hidden'>
        < FaRegFile/>
        <p className=' text-sm leading-tight mt-5 font-semibold'> {data.desc}</p>
        <div className='footer absolute bottom-0 w-full  left-0'>
        <div className='flex items-center justify-between py-3 px-8 mb-3'>
            <h1>{data.filesize}</h1>
            <span className=' w-7 h-5 bg-zinc-600 rounded-lg flex items-center justify-center'>
                {data.close?<IoIosCloseCircle/>:<LuDownload size=".7em" color='#fff'/>}
                
            </span>

        </div>
        {
            data.tag.isopen&&(
                <div className={`tag w-full py-4 ${data.tag.tagColor==="blue"?"bg-blue-400":"bg-green-400"} flex items-center justify-center`}>
                <h3>{data.tag.tagTitle}</h3>
    
            </div>
            )
        }
       
        </div>
    </motion.div>
  )
}

export default Card