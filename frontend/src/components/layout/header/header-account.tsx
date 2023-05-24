import { useState } from 'react'
import { useAccount } from '@gear-js/react-hooks'
import { Button } from '@gear-js/ui'
import { AccountButton } from '@/components/common/account-button'
import { SelectAccountPopup } from '@/components/popups/select-account-popup'

export const AccountComponent = () => {
  const { account, accounts } = useAccount()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)

  return (
    <>
      {account ? (
        <>
          <AccountButton
            address={account.address}
            name={account.meta.name}
            onClick={openModal}
            simple
          />
          <SelectAccountPopup
            accounts={accounts}
            setIsOpen={setIsModalOpen}
            isOpen={isModalOpen}
          />
        </>
      ) : (
        <Button text="Connect Account" onClick={openModal} color="lightGreen" />
      )}
    </>
  )
}
