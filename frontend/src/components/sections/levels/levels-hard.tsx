import { Icons } from '@/components/ui/icons'
import { Button } from '@gear-js/ui'

type LevelsHardProps = BaseComponentProps & {}

export function LevelsHard({ children }: LevelsHardProps) {
  return (
    <div className="flex">
      <div className="grow">
        <div className="absolute inset-0 -z-1 pointer-events-none">image</div>
        <div className="flex justify-center">
          <img
            src="/images/levels/hard-t.svg"
            alt="Easy"
            width={360}
            height={361}
          />
        </div>
      </div>
      <div className="">
        <div className="typo-h2">
          <i className="font-extralight text-[#F24A4A]">Hard</i>{' '}
          <b className="">level</b>
        </div>
        <div className="mt-8">
          <ul>
            <li>
              <div className="flex items-center py-2.5 pl-6 space-x-7">
                <span className="text-base w-25">Enemies:</span>
                <div className="grid grid-cols-3 gap-4 text-[#F24A4A]">
                  <div>
                    <Icons.deathActive className="w-9 h-9" />
                  </div>
                  <div>
                    <Icons.deathActive className="w-9 h-9" />
                  </div>
                  <div>
                    <Icons.deathActive className="w-9 h-9" />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center py-2.5 pl-12 space-x-7">
                <span className="text-base w-25">Speed:</span>
                <div className="grid grid-cols-3 gap-4 text-[#F24A4A]">
                  <div>
                    <Icons.flameActive
                      secondary="#A02D30"
                      className="w-9 h-9"
                    />
                  </div>
                  <div>
                    <Icons.flameActive
                      secondary="#A02D30"
                      className="w-9 h-9"
                    />
                  </div>
                  <div>
                    <Icons.flameActive
                      secondary="#A02D30"
                      className="w-9 h-9"
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center py-2.5 pl-18 space-x-7">
                <span className="text-base w-25">Rewards:</span>
                <div className="grid grid-cols-3 gap-4 text-[#F24A4A]">
                  <div>
                    <Icons.coins1 secondary="#A02D30" className="w-9 h-9" />
                  </div>
                  <div>
                    <Icons.coins2 secondary="#A02D30" className="w-9 h-9" />
                  </div>
                  <div>
                    <Icons.coins3 secondary="#A02D30" className="w-9 h-9" />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center py-2.5 pl-24 space-x-7">
                <span className="text-base w-25">Lives left:</span>
                <div className="grid grid-cols-3 gap-4 text-[#F24A4A]">
                  <div>
                    <Icons.lifes secondary="#A02D30" className="w-9 h-9" />
                  </div>
                  <div>
                    <Icons.lifes secondary="#A02D30" className="w-9 h-9" />
                  </div>
                  <div>
                    <Icons.lifes
                      secondary="#565656"
                      className="w-9 h-9 text-[#626262]"
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="pl-36 mt-12">
            <button className="btn space-x-2.5 bg-[#F24A4A] hover:bg-[#A02D30] transition-colors">
              <Icons.gameJoystick className="w-5 h-5" />
              <span>Start game</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
