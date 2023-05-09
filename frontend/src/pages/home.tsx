import { useForm } from '@mantine/form'
import { initialRegister } from '@/app/consts'
import { hexRequired } from '@/lib/form-validations'
import { Button, Input } from '@gear-js/ui'
import { useApp } from '@/app/context'
import { Icons } from '@/components/ui/icons'

const validate: Record<string, typeof hexRequired> = {
  programId: hexRequired,
}

export default function Home() {
  const { isPending } = useApp()
  const form = useForm({
    initialValues: initialRegister,
    validate: validate,
    validateInputOnChange: true,
  })
  const { getInputProps, errors } = form
  const handleSubmit = form.onSubmit((values) => {
    // setLesson({ step: +values.currentStep, programId: values.programId })
  })

  return (
    <>
      <div className="absolute inset-0 flex justify-center h-full bg-[#1E1E1E] pointer-events-none">
        <div className="absolute top-15 -bottom-0 -inset-x-[31.5%] z-1 mix-blend-color-dodge">
          <img
            src="/images/intro-smoke.webp"
            alt="aa"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <div className="relative mb-[-13%]">
          <img
            src="/images/intro-map.webp"
            alt="aa"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
      <div className="relative flex justify-center items-center grow h-full">
        <div className="relative w-full max-w-[650px] ">
          <div className="absolute inset-0 -mx-[5px] -mt-[7px]">
            <svg
              className="w-full h-[84%]"
              width="656"
              height="278"
              viewBox="0 0 656 278"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M653 257.147V22.6471C653 11.6014 644.046 2.64709 633 2.64709H22.5C11.4543 2.64709 2.5 11.6014 2.5 22.6471V257.147"
                stroke="url(#paint0_linear_212_341010)"
                stroke-width="4"
              />
              <rect
                x="650.5"
                y="277.647"
                width="148"
                height="5"
                transform="rotate(-90 650.5 277.647)"
                fill="url(#paint1_linear_212_341010)"
              />
              <rect
                x="0.499817"
                y="277.647"
                width="148"
                height="4"
                transform="rotate(-90 0.499817 277.647)"
                fill="url(#paint2_linear_212_341010)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_212_341010"
                  x1="640.5"
                  y1="2.64709"
                  x2="149.5"
                  y2="296.147"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2F81ED" />
                  <stop offset="1" stop-color="#2BD071" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_212_341010"
                  x1="650.5"
                  y1="279.835"
                  x2="684.306"
                  y2="217.693"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.657594" stop-color="#1F1F1F" />
                  <stop offset="1" stop-color="#202020" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_212_341010"
                  x1="0.499817"
                  y1="279.397"
                  x2="24.0741"
                  y2="225.231"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.657594" stop-color="#1F1F1F" />
                  <stop offset="1" stop-color="#202020" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="relative z-1 grid gap-8 w-full max-w-[650px] pt-13 pb-12 px-5 bg-[#1F1F1F]/30 backdrop-blur-[5px] rounded-t-[17px]">
            <h1 className="typo-h2 text-center">
              Let's <span className="text-primary">start game</span>
            </h1>

            <form
              onSubmit={handleSubmit}
              className="grid gap-4 w-full max-w-[400px] mx-auto"
            >
              <div className="">
                <Input
                  placeholder="Substrate address"
                  direction="y"
                  {...getInputProps('programId')}
                />
              </div>
              <div className="">
                <Input
                  placeholder="Nickname"
                  direction="y"
                  {...getInputProps('programId')}
                />
              </div>
              <div className="flex justify-center">
                <Button
                  text="Start game"
                  color="primary"
                  icon={() => <Icons.gameJoystick className="w-5 h-5 mr-2.5" />}
                  type="submit"
                  disabled={Object.keys(errors).length > 0 || isPending}
                  className="w-full max-w-[206px]"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
