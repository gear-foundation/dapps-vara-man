import { cn } from '@/lib/utils'

const nav = [
  {
    title: 'Easy',
  },
  {
    title: 'Medium',
  },
  {
    title: 'Hard',
  },
]

export default function Levels() {
  return (
    <>
      <div className="relative grow flex">
        <div className="relative z-1 basis-[140px]">
          <ul className="grid gap-5">
            {nav.map((_, i) => (
              <li key={i}>
                <div
                  className={cn(
                    'p-4 text-center level-mode',
                    i === 0 && 'level-mode--active'
                  )}
                >
                  <div className="before:absolute before:inset-0 before:z-0 before:bg-[#1e1e1e] before:rounded-[8px]" />
                  <div className="relative z-1">
                    <div className="bg-neutral-700 aspect-[1/1]" />
                    <h3 className="mt-2 font-semibold font-kanit tracking-[0.04em]">
                      {_.title}
                    </h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="grow">
          <div className="absolute inset-0 -z-1 pointer-events-none">image</div>
        </div>
        <div className="">info</div>
      </div>
    </>
  )
}
