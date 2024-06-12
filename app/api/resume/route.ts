import { getUserByClerkId } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { NextResponse } from "next/server"

export const POST = async (req, res) => {
  const user = await getUserByClerkId()
  const resume = await prisma.resume.create({
    data: {
      userId: user.id,
      data: {}
    },
  })

  return NextResponse.json({ data: resume })
}