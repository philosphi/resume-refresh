import { UserButton } from '@clerk/nextjs'

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-screen w-screen relative">
      <aside className="absolute w-[200px] top-0 left-0 h-full border-r border-black/10">
        <div className="flex h-full flex-col gap-y-4">
          <div className="py-4" />
          <div data-orientation="horizontal" role="none" className="bg-gray-300 h-px w-full"></div>
          <a href="/resume" className="px-4">Resume</a>
          <a href="/settings" className="px-4">Settings</a>
          <div className="flex-1"></div>
          <div data-orientation="horizontal" role="none" className="bg-gray-300 h-px w-full"></div>
          <div className="px-4 pb-4">
            <UserButton />
          </div>
        </div>
      </aside>

      <div className="ml-[200px] h-full">
        <header className="h-[60px]">
          <h1 className="text-2xl font-bold p-6">Resumes</h1>
        </header>
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout