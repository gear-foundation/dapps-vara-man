import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Command,
  CreditCard,
  File,
  FileText,
  Github,
  HelpCircle,
  Image,
  Loader2,
  LucideProps,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  Trash,
  Twitter,
  User,
  X,
  Home,
  type Icon as LucideIcon,
  LogOut,
  ArrowLeft,
  ChevronFirst,
  ChevronLast,
  ChevronsLeft,
  ChevronsRight,
  SortAsc,
  SortDesc,
  Filter,
  ArrowUpDown,
  ChevronsUpDown,
  Download,
  MoreHorizontal,
  List,
  Edit,
  Users,
  Newspaper,
  CalendarDays,
  Globe,
  ChevronsUp,
  ChevronDown,
  ChevronUp,
  CalendarPlus,
  ListPlus,
  Undo,
  Redo,
  Upload,
  ListX,
  ArrowUpAZ,
  ArrowDownAZ,
} from 'lucide-react'

export type Icon = LucideIcon

export const Icons = {
  close: X,
  spinner: Loader2,
  trash: Trash,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  moreHorizontal: MoreHorizontal,
  moreVertical: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  twitter: Twitter,
  check: Check,
  home: Home,
  logout: LogOut,
  first: ChevronsLeft,
  last: ChevronsRight,
  left: ChevronLeft,
  right: ChevronRight,
  sortAsc: SortAsc,
  sortDesc: SortDesc,
  filter: Filter,
  arrowUpDown: ArrowUpDown,
  chevronUp: ChevronUp,
  chevronDown: ChevronDown,
  chevronsUpDown: ChevronsUpDown,
  download: Download,
  list: List,
  edit: Edit,
  logo: ({ ...props }: LucideProps) => (
    <svg
      width="92"
      height="60"
      viewBox="0 0 92 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_273_151233)">
        <path
          d="M17.9287 22.1352L12.0764 0H7.94296L17.9287 37.7691V52.1831L4.13341 0H0L15.862 60H17.9287H19.9941H22.0608V0H17.9287V22.1352Z"
          fill="currentColor"
        />
        <path
          d="M91.4938 60L75.6318 0H73.5651H71.4984H69.4317V59.9987H73.5651L84.4745 49.0843L87.3603 59.9987H91.4938V60ZM80.8074 35.2084L73.5663 42.4494V7.81694L80.8074 35.2084ZM73.5651 54.1502V48.2941L82.0285 39.8307L83.2534 44.4619L73.5651 54.1502Z"
          fill="currentColor"
        />
        <path
          d="M30.7688 0H28.7021H26.6354V59.9987H30.7688L41.6782 49.0843L44.5641 59.9987H48.6975L32.8342 0H30.7688ZM38.0098 35.2083L30.7688 42.4494V7.81694L38.0098 35.2083ZM30.7688 54.1502V48.2941L39.2322 39.8307L40.4571 44.4619L30.7688 54.1502Z"
          fill="currentColor"
        />
        <path
          d="M65.8567 37.0722L56.0563 0H53.9896H51.9228H49.8561V59.9987H53.9896V48.8725L57.7865 45.0756L61.7321 59.9987L65.8567 59.9685L61.0554 41.8067L62.5739 40.2882L65.8567 37.0722ZM53.9896 43.0278V7.81694L61.3516 35.6658L53.9896 43.0278Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_273_151233">
          <rect width="91.6667" height="60" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  ),
}
