export default function Home() {
  return (
    <>
      <div className="absolute inset-0 -z-1 flex justify-center h-full bg-[#1E1E1E]">
        <div className="absolute top-15 -bottom-0 -inset-x-[31.5%] z-1 mix-blend-color-dodge">
          <img
            src="/images/intro-smoke.webp"
            alt="aa"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <div className="relative">
          <img
            src="/images/intro-map.webp"
            alt="aa"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </>
  )
}
// before:absolute before:inset-y-0 before:left-0 before:w-25 before:bg-gradient-to-r before:from-[#1E1E1E] before:to-transparent after:absolute after:inset-y-0 after:right-0 after:w-25 after:bg-gradient-to-l after:from-[#1E1E1E] after:to-transparent
