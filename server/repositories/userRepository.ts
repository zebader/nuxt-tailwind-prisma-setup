import prisma from "@/prisma/client";

export async function getUserByEmail(email: string): Promise<any> {
  return await prisma.user.findUnique({
    where: { email: email },
    select: { id: true, username: true },
  });
}

export async function createUser(data: any): Promise<any> {
  const user = await prisma.user.create({
    data: {
      username: data.username,
      name: data.name,
      email: data.email,
      password: data.password,
    },
  });

  return user;
}
