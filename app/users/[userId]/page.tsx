import getUser from "@/lib/getUser"
import getUserPosts from "@/lib/getUserPosts"
import { Suspense } from "react"
import UserPosts from "./components/UserPosts"
import { Metadata } from "next"
import getAllUsers from "@/lib/getAllUsers"

type Params = {
  params: {
    userId: String,
  }
}

export async function generateMetadata({ params: { userId } }: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId)
  const user = await userData

  return {
    title: `${user.name}`,
    description: `This is the page of ${user.name}`
  }
}

export default async function userPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId)
  const userPostData: Promise<Post[]> = getUserPosts(userId)

  // const [user, userPosts] = await Promise.all([userData, userPostData])

  const user = await userData
  return (
    <>
      <h2>{user.name}</h2>
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostData} />
      </Suspense>
    </>
  )
}

export async function generateStaticParams() {
  const usersData : Promise<User[]> = getAllUsers()
  const users = await usersData;

  return users.map(user => ({
    userId: user.id.toString()
  }))
}
