import { Icons } from '@/components/ui/icons'
import { buttonStyles } from '@gear-js/ui'
import { LevelsBackground } from '@/components/sections/levels/levels-background'
import { LevelsModeContent } from '@/components/sections/levels/levels-mode-content'
import { cn } from '@/lib/utils'

type LevelsEasyProps = BaseComponentProps & {}

export function LevelsEasy({}: LevelsEasyProps) {
  return (
    <>
      <div className="relative grow">
        <LevelsBackground picture="/images/levels/bg1.jpg" />
      </div>
      {/*Level info*/}
      <LevelsModeContent title="Easy" colorText="text-primary">
        <div className="mt-8">
          <ul>
            <li>
              <div className="flex items-center py-2.5 pl-6 space-x-7">
                <span className="text-base w-25">Enemies:</span>
                <div className="grid grid-cols-3 gap-4 text-primary">
                  <div>
                    <Icons.deathActive className="w-9 h-9" />
                  </div>
                  <div>
                    <Icons.deathInactive className="w-9 h-9" />
                  </div>
                  <div>
                    <Icons.deathInactive className="w-9 h-9" />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center py-2.5 pl-12 space-x-7">
                <span className="text-base w-25">Speed:</span>
                <div className="grid grid-cols-3 gap-4 text-primary">
                  <div>
                    <Icons.flameActive
                      secondary="#1E8C4D"
                      className="w-9 h-9"
                    />
                  </div>
                  <div>
                    <Icons.flameInactive
                      secondary="#919191"
                      className="w-9 h-9"
                    />
                  </div>
                  <div>
                    <Icons.flameInactive
                      secondary="#919191"
                      className="w-9 h-9"
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center py-2.5 pl-18 space-x-7">
                <span className="text-base w-25">Rewards:</span>
                <div className="grid grid-cols-3 gap-4 text-primary">
                  <div>
                    <Icons.coins1 secondary="#1E8C4D" className="w-9 h-9" />
                  </div>
                  <div>
                    <Icons.coins2
                      secondary="#919191"
                      className="w-9 h-9 text-[#626262]"
                    />
                  </div>
                  <div>
                    <Icons.coins3
                      secondary="#919191"
                      className="w-9 h-9 text-[#626262]"
                    />
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center py-2.5 pl-24 space-x-7">
                <span className="text-base w-25">Lives left:</span>
                <div className="grid grid-cols-3 gap-4 text-primary">
                  <div>
                    <Icons.lifes secondary="#1E8C4D" className="w-9 h-9" />
                  </div>
                  <div>
                    <Icons.lifes secondary="#1E8C4D" className="w-9 h-9" />
                  </div>
                  <div>
                    <Icons.lifes secondary="#1E8C4D" className="w-9 h-9" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className="pl-36 mt-12">
            <button className={cn('btn space-x-2.5', buttonStyles.primary)}>
              <Icons.gameJoystick className="w-5 h-5" />
              <span>Start game</span>
            </button>
          </div>
        </div>
      </LevelsModeContent>
    </>
  )
}
