import { useState } from 'react'
import { useAccount } from '@gear-js/react-hooks'
import { Button } from '@gear-js/ui'
import { GasWallet } from '@/components/common/gas-wallet'
import { AccountButton } from '@/components/common/account-button'
import { SelectAccountPopup } from '@/components/popups/select-account-popup'

export const AccountComponent = () => {
  // const { lesson, isAdmin } = useLessons()
  const { account, accounts } = useAccount()
  const [isModalOpen, setIsModalOpen] = useState(false)

  // const { pathname } = useLocation()

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      {account ? (
        <div className="flex gap-4">
          <GasWallet
            balance={account.balance}
            address={account.address}
            name={account.meta.name}
            onClick={openModal}
          />
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
      {isModalOpen && (
        <SelectAccountPopup accounts={accounts} close={closeModal} />
      )}
    </>
  )
}
