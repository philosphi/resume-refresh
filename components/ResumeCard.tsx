const ResumeCard = ( resume ) => {
  const date = new Date(resume.updatedAt).toDateString()
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5">{date}</div>
      <div className="px-4 py-5">resume</div>
      <div className="px-4 py-4">mood</div>
    </div>
  )
}

export default ResumeCard
