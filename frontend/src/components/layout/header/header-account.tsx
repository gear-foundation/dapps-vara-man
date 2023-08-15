import { useState } from 'react'
import { useAccount } from '@gear-js/react-hooks'
import { Button } from '@gear-js/ui'
import { AccountButton } from '@/components/common/account-button'
import { SelectAccountPopup } from '@/components/popups/select-account-popup'

export const AccountComponent = () => {
  const { account, accounts } = useAccount()
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

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
        </>
      ) : (
        <Button text="Connect Account" onClick={openModal} color="lightGreen" />
      )}

      <SelectAccountPopup
        accounts={accounts}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
    </>
  )
}
