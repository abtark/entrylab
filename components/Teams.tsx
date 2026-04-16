'use client'

import React, { useState, useEffect, useMemo, useRef } from 'react'
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform
} from 'framer-motion'

const teamData = [
  { id: 1, name: "SM Masum", type: "Onsite", img: "https://iili.io/BSl1ol4.jpg" },
  { id: 2, name: "Nazmul Alam", type: "Onsite", img: "https://iili.io/BSlE84j.jpg" },
  { id: 3, name: "Samir Sakib", type: "Onsite", img: "https://iili.io/BS0ct9I.jpg" },
  { id: 4, name: "Naimul Hasnat", type: "Onsite", img: "https://iili.io/BS0Y6Dg.jpg" },
  { id: 5, name: "Shafayet Ullah", type: "Onsite", img: "https://iili.io/BS01MuI.jpg" },
  { id: 6, name: "Hridoy Sabbir", type: "Onsite", img: "https://iili.io/BS02hBf.jpg" },
  { id: 7, name: "Aminul Islam", type: "Onsite", img: "https://iili.io/BSlqAEG.jpg" },
  { id: 8, name: "Newaz Shihab", type: "Onsite", img: "https://iili.io/BSlEqmP.jpg" },
  { id: 9, name: "Ehshan Shakil", type: "Onsite", img: "https://iili.io/BSlIrxV.jpg" },
  { id: 10, name: "Abir Eman", type: "Onsite", img: "https://iili.io/BS0lp5B.jpg" },
  { id: 11, name: "Shahed Evan", type: "Onsite", img: "https://iili.io/BS0diOX.jpg" },
  { id: 12, name: "Towhid Jihad", type: "Onsite", img: "https://iili.io/BS0chCb.jpg" },
  { id: 13, name: "Tariqul Rizvi", type: "Onsite", img: "https://iili.io/BSlGIt9.jpg" },
  { id: 14, name: "Misbah Uddin", type: "Onsite", img: "" },

  { id: 15, name: "Abdullah Takim", type: "Remote", img: "https://iili.io/BS0lmJV.jpg" },
  { id: 16, name: "Mohammad Amin", type: "Remote", img: "https://iili.io/BSlMjse.jpg" },
  { id: 17, name: "Farshid Evan", type: "Remote", img: "https://iili.io/BSllpvS.jpg" },
  { id: 18, name: "Mahmud Omey", type: "Remote", img: "" },
  { id: 19, name: "Ashraful Islam", type: "Remote", img: "https://iili.io/BS00lm7.jpg" },
  { id: 20, name: "Abu Jafar", type: "Remote", img: "https://iili.io/BSlld1R.jpg" },
  { id: 21, name: "Emran Kutub", type: "Remote", img: "https://iili.io/BS03cCb.jpg" },
  { id: 22, name: "Noman Shorif", type: "Remote", img: "https://iili.io/BS0cgZg.jpg" },
  { id: 23, name: "Fardin Chowdhury", type: "Remote", img: "https://iili.io/BS00p4f.jpg" },
  { id: 24, name: "Redwanul Karim", type: "Remote", img: "https://iili.io/BS0lixe.jpg" },
  { id: 25, name: "Uzzle Alam", type: "Remote", img: "https://iili.io/BSlGyKb.jpg" }
]

export default function Teams() {

  const [filter, setFilter] = useState('All')
  const [activeIndex, setActiveIndex] = useState(0)
  const [selected, setSelected] = useState<any>(null)

  const dragX = useMotionValue(0)

  const filtered = useMemo(() => {
    if (filter === 'All') return teamData
    return teamData.filter(m => m.type === filter)
  }, [filter])

  useEffect(() => setActiveIndex(0), [filter])

  const total = filtered.length
  const positions = [-2, -1, 0, 1, 2]

  const getItem = (offset:number) => {
    return filtered[(activeIndex + offset + total) % total]
  }

  const next = () => setActiveIndex(p => (p+1)%total)
  const prev = () => setActiveIndex(p => (p-1+total)%total)

  return (
    <section className="py-32 bg-[#111] text-white flex flex-col items-center">

      {/* GLASS FILTER BUTTON */}
      <div className="flex gap-4 mb-16 p-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
        {['All','Onsite','Remote'].map(f => (
          <button key={f} onClick={()=>setFilter(f)}
            className={`px-6 py-2 rounded-xl transition ${
              filter===f
              ? 'bg-[#00AAFF]/20 border border-[#00AAFF]/50'
              : 'text-white/50 hover:text-white'
            }`}>
            {f}
          </button>
        ))}
      </div>

      {/* CAROUSEL */}
      <motion.div
        drag="x"
        dragElastic={0.2}
        dragConstraints={{ left:0, right:0 }}
        onDragEnd={(e,info)=>{
          if(info.offset.x < -80) next()
          else if(info.offset.x > 80) prev()
        }}
        className="relative w-full h-[420px] flex justify-center items-center cursor-grab active:cursor-grabbing"
      >
        {positions.map(offset => {
          const m = getItem(offset)

          const isCenter = offset === 0

          return (
            <Card
              key={offset}
              data={m}
              offset={offset}
              isCenter={isCenter}
              onClick={()=> isCenter && setSelected(m)}
            />
          )
        })}
      </motion.div>

      {/* ARROWS */}
      <div className="flex gap-6 mt-10 text-xl">
        <button onClick={prev}><i className="fa-solid fa-chevron-left"/></button>
        <button onClick={next}><i className="fa-solid fa-chevron-right"/></button>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50"
            onClick={()=>setSelected(null)}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
          >
            <motion.div
              layoutId={`card-${selected.id}`}
              onClick={(e)=>e.stopPropagation()}
              className="bg-[#181818] p-10 rounded-3xl text-center w-[320px]"
            >
              <motion.img
                layoutId={`img-${selected.id}`}
                src={selected.img}
                className="w-32 h-32 rounded-full mx-auto mb-6"
              />

              <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
              <p className="text-white/70">{selected.title}</p>
              <p className="text-white/50">{selected.time} • {selected.type}</p>

              <div className="flex justify-center gap-6 mt-6">
                <i className="fa-brands fa-linkedin"/>
                <i className="fa-solid fa-envelope"/>
                <i className="fa-solid fa-phone"/>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}

/* CARD */
function Card({ data, offset, isCenter, onClick }:any){

  const ref = useRef<HTMLDivElement>(null)
  const [hovered,setHovered] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-100,100],[10,-10]),{damping:15})
  const rotateY = useSpring(useTransform(mouseX, [-100,100],[-10,10]),{damping:15})

  const handleMove = (e:any)=>{
    if(!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - rect.width/2)
    mouseY.set(e.clientY - rect.top - rect.height/2)
  }

  const x = offset * 260
  const scale = offset===0 ? 1 : 0.85
  const opacity = offset===0 ? 1 : 0.15

  return (
    <motion.div
      ref={ref}
      layoutId={`card-${data.id}`}
      animate={{ x, scale, opacity }}
      transition={{ type:"spring", stiffness:120, damping:20 }}
      onMouseMove={isCenter ? handleMove : undefined}
      onMouseEnter={()=> isCenter && setHovered(true)}
      onMouseLeave={()=> setHovered(false)}
      onClick={onClick}
      className="absolute w-[260px] h-[340px] p-4 bg-white/5 border border-white/20 rounded-2xl"
    >
      <motion.div style={isCenter ? {rotateX,rotateY} : {}} className="w-full h-full rounded-xl overflow-hidden">
        <motion.img
          layoutId={`img-${data.id}`}
          src={data.img}
          className={`w-full h-full object-cover ${isCenter?'grayscale hover:grayscale-0':'grayscale'}`}
        />
      </motion.div>

      {/* NAME HOVER */}
      {hovered && isCenter && (
        <motion.div
          style={{ x: mouseX, y: mouseY }}
          className="absolute top-0 left-0 pointer-events-none px-3 py-1 bg-black/80 rounded-full text-sm"
        >
          {data.name}
        </motion.div>
      )}
    </motion.div>
  )
}
