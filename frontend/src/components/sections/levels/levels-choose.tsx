import { cn } from '@/lib/utils'
import { Icons } from '@/components/ui/icons'
import { Button } from '@gear-js/ui'
import { LevelsEasy } from '@/components/sections/levels/levels-easy'
import { LevelsMedium } from '@/components/sections/levels/levels-medium'
import { LevelsHard } from '@/components/sections/levels/levels-hard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const nav = [
  {
    title: 'Easy',
    card: <LevelsEasy />,
  },
  {
    title: 'Medium',
    card: <LevelsMedium />,
  },
  {
    title: 'Hard',
    card: <LevelsHard />,
  },
]

type LevelsChooseProps = BaseComponentProps & {}

export function LevelsChoose({ children }: LevelsChooseProps) {
  return (
    <Tabs defaultValue={nav[0].title} className="relative grow flex">
      <div className="relative z-1 basis-[140px]">
        <TabsList className="grid gap-5">
          {nav.map((m, i) => (
            <TabsTrigger
              value={m.title}
              key={i + m.title}
              className="p-4 text-center level-mode data-[state=active]:level-mode--active"
            >
              <div className="before:absolute before:inset-0 before:z-0 before:bg-[#1e1e1e] before:rounded-[8px]" />
              <div className="relative z-1">
                <div className="bg-neutral-700 aspect-[1/1]" />
                <h3 className="mt-2 font-semibold font-kanit tracking-[0.04em]">
                  {m.title}
                </h3>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {nav.map((m, i) => (
        <TabsContent value={m.title} key={m.title + i} className="grow">
          {m.card}
        </TabsContent>
      ))}
    </Tabs>
  )
}
