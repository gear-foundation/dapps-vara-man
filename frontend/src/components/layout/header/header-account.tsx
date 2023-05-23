import { useState } from 'react'
import { useAccount } from '@gear-js/react-hooks'
import { Button } from '@gear-js/ui'
import { GasWallet } from '@/components/common/gas-wallet'
import { AccountButton } from '@/components/common/account-button'
import { SelectAccountPopup } from '@/components/popups/select-account-popup'
import { useGame } from '@/app/context/ctx-game'

export const AccountComponent = () => {
  const { account, accounts } = useAccount()
  const { isAdmin } = useGame()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)

  return (
    <>
      {account ? (
        <div className="flex gap-4">
          {!isAdmin && (
            <GasWallet
              balance={account.balance}
              address={account.address}
              name={account.meta.name}
              onClick={openModal}
            />
          )}

          <AccountButton
            address={account.address}
            name={account.meta.name}
            onClick={openModal}
            simple
          />
        </div>
      ) : (
        <Button text="Connect Account" onClick={openModal} color="lightGreen" />
      )}
      <SelectAccountPopup
        accounts={accounts}
        setIsOpen={setIsModalOpen}
        isOpen={isModalOpen}
      />
    </>
  )
}