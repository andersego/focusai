'use client'

import { LanguageSwitcher } from "./language-switcher"
import { UserMenu } from "./user-menu"

export function TopNav() {
  return (
    <div className="w-full flex justify-end items-center gap-4 p-4 bg-white/50 backdrop-blur-sm">
      <LanguageSwitcher />
      <UserMenu />
    </div>
  )
} 