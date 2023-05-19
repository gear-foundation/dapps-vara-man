import { HomeFormGradient } from '@/components/sections/home/home-form-gradient'
import { HomeRegisterForm } from '@/components/sections/home/home-register-form'
import { HomeBackground } from '@/components/sections/home/home-background'

export default function Home() {
  return (
    <>
      <HomeBackground />
      <div className="flex justify-center items-center grow h-full">
        <div className="relative w-full max-w-[650px] ">
          <div className="absolute inset-0 -mx-[5px] -mt-[7px]">
            <HomeFormGradient />
          </div>

          <div className="relative z-1 grid gap-8 w-full max-w-[650px] pt-13 pb-12 px-5 bg-[#1F1F1F]/30 backdrop-blur-[5px] rounded-t-[17px]">
            <h1 className="typo-h2 text-center">
              Let's <span className="text-primary">start game</span>
            </h1>

            <HomeRegisterForm />
          </div>
        </div>
      </div>
    </>
  )
}
