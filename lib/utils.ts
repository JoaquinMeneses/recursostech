import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { BadgeType } from '@/components/badge/badge'

import { isThisWeekButNotToday, isToday } from './date-utils'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const getBadgeType = (createdAt: Date, updatedAt: Date) => {
	if (isToday(createdAt)) {
		return BadgeType.new
	}

	if (isThisWeekButNotToday(updatedAt)) {
		return BadgeType.updated
	}

	return BadgeType.none
}