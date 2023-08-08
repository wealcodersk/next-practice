import getFormattedDate from "@/lib/getFormattedData"
import Link from "next/link"

type Props = {
  post: BlogPost
}

export default function ListItem({post}: Props) {
  const {id, title, date} = post
  const formattedData = getFormattedDate(date)
  return (
    <li className="mt-4 text-2xl text-white/90">
      <Link className="underline hover:text-white" href={`/posts/${id}`}>{title}</Link>
      <br />
      <p className="text-sm mt-1">{formattedData}</p>
    </li>
  )
}
