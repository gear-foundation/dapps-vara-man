import { cn } from '@/app/utils'
import { buttonStyles } from '@gear-js/ui'
import { useState } from 'react'
import { ChampionsPopup } from '@/components/popups/champions-popup'

type GameNavProps = BaseComponentProps & {}

export function GameNavChampions({}: GameNavProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className={cn('btn px-6', buttonStyles.lightGreen)}
        onClick={() => setOpen((_) => !_)}
      >
        Show champions
      </button>

      <ChampionsPopup setIsOpen={setOpen} isOpen={open} />
    </>
  )
}
