import { UserData } from '@/types/UserData'
import { ReactNode } from 'react'

export type DashboardShellProps = {
  user: UserData
  children: ReactNode
}
