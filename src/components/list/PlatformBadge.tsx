import React from 'react'

export type Platform = 'ios' | 'android' | 'web'

const PLATFORM_LABEL: Record<Platform, string> = {
  ios: 'iOS',
  android: 'Android',
  web: 'Web',
}

const PLATFORM_CLASS: Record<Platform, string> = {
  ios: 'bg-ink text-white',
  android: 'bg-[#3DDC84] text-ink',
  web: 'bg-turquoise text-white',
}

interface PlatformBadgeProps {
  platform: Platform
}

const PlatformBadge: React.FC<PlatformBadgeProps> = ({ platform }) => (
  <span
    className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${PLATFORM_CLASS[platform]}`}
  >
    {PLATFORM_LABEL[platform]}
  </span>
)

export default PlatformBadge
