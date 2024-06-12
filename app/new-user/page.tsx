import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/utils/db";
import { redirect } from "next/navigation";

const createNewUser = async () => {
  const user = await currentUser();
  const match = await prisma.user.findUnique({
    where: {
      clerkId: user.id as string,
    },
  });

  if (!match) {
    console.log("Creating new user")
    await prisma.user.create({
      data: {
        clerkId: user.id as string,
        email: user.primaryEmailAddress.emailAddress,
      },
    });
  }

  redirect("/resume");
}

export default async function NewUser() {
  await createNewUser();
  return <div>...loading</div>;
}