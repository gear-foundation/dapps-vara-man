import { LevelsEasy } from '@/components/sections/levels/levels-easy'
import { LevelsMedium } from '@/components/sections/levels/levels-medium'
import { LevelsHard } from '@/components/sections/levels/levels-hard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const nav = [
  {
    title: 'Easy',
    card: <LevelsEasy />,
    tab_img: '/images/levels/tab-1.png',
    tab_img_active: '/images/levels/tab-1-active.png',
  },
  {
    title: 'Medium',
    card: <LevelsMedium />,
    tab_img: '/images/levels/tab-2.png',
    tab_img_active: '/images/levels/tab-2-active.png',
  },
  {
    title: 'Hard',
    card: <LevelsHard />,
    tab_img: '/images/levels/tab-3.png',
    tab_img_active: '/images/levels/tab-3-active.png',
  },
]

type LevelsChooseProps = BaseComponentProps & {}

export function LevelsSelectMode({ children }: LevelsChooseProps) {
  return (
    <Tabs defaultValue={nav[0].title} className="relative grow flex">
      <div className="relative z-1 basis-[140px] grid">
        <TabsList className="flex flex-col space-y-5 mlgh:mt-0 xxl:mt-12 items-start">
          {nav.map((m, i) => (
            <TabsTrigger
              value={m.title}
              key={i + m.title}
              className="relative w-full p-4 text-center group"
            >
              <img
                className="absolute inset-0 w-full h-full group-radix-state-active:hidden"
                src={m.tab_img}
                alt="Tab"
              />
              <img
                className="absolute inset-0 w-full h-full hidden group-radix-state-active:block"
                src={m.tab_img_active}
                alt="Tab"
              />
              <div className="relative z-1">
                <div className="bg-transparent aspect-[1/1]" />
                <h3 className="mt-2 font-semibold font-kanit tracking-[0.04em]">
                  {m.title}
                </h3>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      {nav.map((m, i) => (
        <TabsContent value={m.title} key={m.title + i} className="ml-6 grow">
          <div className="flex h-full"> {m.card}</div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
