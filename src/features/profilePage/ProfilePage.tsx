import { ProfileTitle } from "./components/ProfileTitle"
import { ProfileTabs } from "./components/ProfileTabs"

export const ProfilePage = () => {
  return (
    <div className="flex flex-col max-w-mobile-content justify-start min-h-screen mx-8 relative">
        <ProfileTitle/>
        <div className="flex flex-col mt-4">
            <hr className='border-t-[.5px] border-black-300'/>
            <ProfileTabs/>
        </div>
    </div>
  )
}
