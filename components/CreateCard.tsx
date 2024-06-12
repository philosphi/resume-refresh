'use client'

import { createNewResume } from '@/utils/api'
import { useRouter } from 'next/navigation'

const CreateCard = () => {
  const router = useRouter()

  const handleOnClick = async () => { 
    const data = await createNewResume()
    router.push('/resume/' + data.id)
  }

  return (
    <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5" onClick={handleOnClick}>
        <img src="/images/plus.svg" alt="plus" className="w-12 h-12 mx-auto" />
        <span>Create a new resume</span>
      </div>
    </div>
  )
}

export default CreateCard