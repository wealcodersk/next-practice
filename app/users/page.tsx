import { Metadata } from "next"
import getAllUsers from "@/lib/getAllUsers"
import Link from "next/link"

export const metadata : Metadata = {
  title: 'Users',
}

export default async function UserPage() {
  const usersData : Promise<User[]> = getAllUsers()
  const users = await usersData

  const content = (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
        <br />
        {
          users.map(user=> {
            return(
              <>
                <p>
                  <Link href={`/users/${user.id}`}>{user.name}</Link>
                </p>
              </>
            )
          })
        }
      </h2>
    </section>
  )
  return content
}
