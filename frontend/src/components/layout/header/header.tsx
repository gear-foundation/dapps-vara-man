import { Logo } from './logo'
import { AccountComponent } from './account'
import { Icons } from '@/components/ui/icons'

export const Header = () => (
  <header className="container flex justify-between items-center py-7.5">
    <Logo />
    <div className="ml-auto mr-4">
      <button className="btn space-x-2 bg-[#3081ED] px-6 hover:bg-blue-600 transition-colors">
        <Icons.info className="w-5 h-5" />
        <span>Show Rules</span>
      </button>
    </div>
    <AccountComponent />
  </header>
)
