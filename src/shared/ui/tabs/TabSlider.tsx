"use client"
import { Tab } from "./Tab"
import TabIcon from "@/shared/assets/images/tab-image-men.png"
import TabIconCollections1 from "@/shared/assets/images/collections-image-small-diana.png"
import TabIconCollections2 from "@/shared/assets/images/collections-image-small-alika.png"
import { StaticImageData } from "next/image"

type TabVariant = 'clothes' | 'collections'

type TabItem = {
  title: string
  icon: StaticImageData
  description?: string
  isActive?: boolean
}

type TabData = {
  [key in TabVariant]: TabItem[]
}

export const TabSlider = ({ variant }: { variant: TabVariant }) => {
  const tabData: TabData = {
    clothes: [
      {
        title: 'Популярные',
        description: '',
        icon: TabIcon,
      },
      {
        title: 'Только что купили',
        description: '',
        icon: TabIcon,
      },
      {
        title: 'Только что купили',
        description: '',
        icon: TabIcon,
      }
    ],
    collections: [
      {
        title: 'Диана Пожарская',
        description: '@alikaa_101',
        icon: TabIconCollections1,
        isActive: true
      },
      {
        title: 'Алика Вегас',
        description: '@alikaa_101',
        icon: TabIconCollections2,
        isActive: false
      },
      {
        title: 'Диана Пожарская',
        description: '@alikaa_101',
        icon: TabIconCollections1,
        isActive: false
      }
    ],
  }

  return (
    <div className="flex flex-row items-center justify-start overflow-x-scroll gap-4 w-full">
        {tabData[variant].map((tabItem: TabItem, index) => (
            <Tab key={`${tabItem.title}-${index}`} title={tabItem.title} description={tabItem.description} icon={tabItem.icon} isActive={tabItem.isActive} onClick={() => ('')}/>
        ))}
    </div>
  )
}