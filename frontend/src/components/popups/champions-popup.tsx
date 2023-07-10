import {
  PopupContainer,
  PopupContainerProps,
} from '@/components/common/popup-container'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/app/utils'
import { buttonStyles } from '@gear-js/ui'
import { XIcon } from 'lucide-react'

type ChampionsPopupProps = PopupContainerProps & {}

export function ChampionsPopup({
  isOpen,
  setIsOpen,
  overlayCn,
  className,
}: ChampionsPopupProps) {
  const onClose = () => setIsOpen((_) => !_)
  return (
    <PopupContainer
      {...{
        isOpen,
        setIsOpen,
        overlayCn,
        className,
      }}
      title="Champions"
      footer={
        <div className="pr-4 pl-8 pt-5 pb-8">
          <button
            className={cn(
              'btn font-kanit w-full space-x-2',
              buttonStyles.light
            )}
            onClick={onClose}
          >
            <XIcon className="w-5 h-5 text-white/80" />
            <span className="leading-4">Close</span>
          </button>
        </div>
      }
    >
      <ScrollArea className="max-h-80 pr-4 -mr-4" type="auto">
        <div className="font-kanit">
          <div className="flex justify-between px-4 leading-6 text-xs tracking-[0.08em] uppercase text-white/60 bg-white/5 rounded-[20px]">
            <span>Player</span>
            <span>Coins</span>
          </div>
        </div>
      </ScrollArea>
    </PopupContainer>
  )
}
