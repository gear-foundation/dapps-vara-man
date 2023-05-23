import type { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'
import { AccountsList } from '@/components/common/accounts-list'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  PopupContainer,
  PopupContainerProps,
} from '@/components/common/popup-container'

type Props = Pick<PopupContainerProps, 'isOpen' | 'setIsOpen'> & {
  accounts: InjectedAccountWithMeta[] | undefined
}

export const SelectAccountPopup = ({ accounts, isOpen, setIsOpen }: Props) => (
  <PopupContainer title="Connect" setIsOpen={setIsOpen} isOpen={isOpen}>
    {accounts ? (
      <ScrollArea className="max-h-80 pr-5 -mr-5" type="auto">
        <AccountsList list={accounts} onChange={() => setIsOpen((_) => !_)} />
      </ScrollArea>
    ) : (
      <p>
        Polkadot extension was not found or disabled. Please,{' '}
        <a
          href="https://polkadot.js.org/extension/"
          target="_blank"
          rel="noreferrer"
        >
          install it
        </a>
        .
      </p>
    )}
  </PopupContainer>
)
