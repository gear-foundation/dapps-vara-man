import { Link, useLocation } from 'react-router-dom'
import { Icons } from '@/components/ui/icons'
import { cn } from '@/lib/utils'

export const Logo = () => {
  const { pathname } = useLocation()

  return (
    <Link
      to="/"
      className={cn(
        'inline-flex text-white',
        pathname === '/'
          ? 'pointer-events-none'
          : 'transition-colors hover:text-opacity-70'
      )}
    >
      <Icons.logo className="h-15" />
    </Link>
  )
}
