'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { GoalSetup } from '@/components/goalscheck/goal-setup'
import { GoalsList } from '@/components/goalscheck/goals-list'
import { useLanguage } from '@/lib/language-context'
import { useDevTime } from '@/lib/dev-time-context'
import { Button } from '@/components/ui/button'

interface Goal {
  id: string;
  title: string;
  deadline: string;
  progress: number;
}

export default function GoalsCheckHome() {
  // ... rest of the code remains the same ...
} 