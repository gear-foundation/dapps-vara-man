import { Icons } from '@/components/ui/icons'
import { LevelsBackground } from '@/components/sections/levels/levels-background'
import { LevelsModeContent } from './levels-mode-content'
import { LevelsStartAction } from '@/components/sections/levels/levels-start-action'

export function LevelsHard() {
  return (
    <>
      <div className="relative grow">
        <LevelsBackground picture="/images/levels/bg3.jpg" />
      </div>
      {/*Level info*/}
      <LevelsModeContent title="Hard" colorText="text-[#F24A4A]">
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
          <LevelsStartAction
            className="bg-[#F24A4A] hover:bg-[#A02D30]"
            level="Hard"
          />
        </div>
      </LevelsModeContent>
    </>
  )
}
