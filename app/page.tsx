import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h2>Home Page</h2>

      <Link href={"/users"}>Users</Link>
    </div>
  )
}
