import Posts from "./components/Posts";
import ProfilePic from "./components/ProfilePic";

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <ProfilePic />
      <p className="mt-12 mb-12 text-3xl text-center text-white">
        Hello and welcome 👋
        <span className="whitespace-nowrap">I am <span className="font-bold">Jahid</span></span>
      </p>
      <Posts />
    </main>
  )
}
