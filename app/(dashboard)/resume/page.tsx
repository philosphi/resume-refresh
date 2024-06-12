import { prisma } from '@/utils/db'
import { getUserByClerkId } from '@/utils/auth'
import CreateCard from '@/components/CreateCard'
import ResumeCard from '@/components/ResumeCard'
import Link from 'next/link'
const getResumes = async () => {
  const user = await getUserByClerkId()
  const resumes = await prisma.resume.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      updatedAt: 'desc',
    },
  })

  return resumes
}
const ResumeDashboard = async () => {
  const resumes = await getResumes()

  return (
    <div className="grid grid-cols-3 gap-4 p-6">
      <CreateCard />
      {resumes.map((resume) => (
        <Link key={resume.id} href={`/resume/${resume.id}`}>
          <ResumeCard resume={resume} />
        </Link>
      ))}
    </div>
  );
}

export default ResumeDashboard;

