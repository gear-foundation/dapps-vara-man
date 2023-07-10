import { useAccount } from '@gear-js/react-hooks'
import { buttonStyles } from '@gear-js/ui'
import { SpriteIcon } from '@/components/ui/sprite-icon'
import { cn } from '@/lib/utils'

export function AccountGasBalance() {
  const { account } = useAccount()

  return (
    <div className="flex space-x-4 shrink-0">
      <div>
        <div className={cn('btn group !p-2.5', buttonStyles.lightGreen)}>
          <SpriteIcon name="test-balance" width={20} height={20} />
        </div>
      </div>
      <p className="shrink-0 grid grid-cols-[auto_auto] gap-x-1 font-kanit">
        <span className="col-span-2 text-[10px] text-dark-400">
          Gas Balance:
        </span>
        <span className="font-medium text-lg leading-none ">
          {account?.balance.value}
        </span>
        <span className="text-sm ">{account?.balance.unit}</span>
      </p>
    </div>
  )
}
