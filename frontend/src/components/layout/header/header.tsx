import { Icons } from '@/components/ui/icons'
import { Link } from 'react-router-dom'
import { useGame } from '@/app/context/ctx-game'
import { HeaderAdmin } from '@/components/layout/header/header-admin'
import { AccountComponent } from '@/components/layout/header/header-account'
import { HeaderLogo } from '@/components/layout/header/header-logo'

export const Header = () => {
  const { isAdmin } = useGame()

  return (
    <header className="container flex justify-between items-center py-7.5">
      <HeaderLogo />

      {isAdmin ? (
        <HeaderAdmin />
      ) : (
        <div className="ml-auto mr-4">
          <Link
            to="/rules"
            className="btn space-x-2 bg-[#3081ED] px-6 hover:bg-blue-600 transition-colors"
          >
            <Icons.info className="w-5 h-5" />
            <span>Show Rules</span>
          </Link>
        </div>
      )}

      <AccountComponent />
    </header>
  )
}
