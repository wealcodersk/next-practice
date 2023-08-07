import Image from "next/image";

export default function ProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
      className="border-4 border-slate-500 drop-shadow-xl shadow-black rounded-xl mx-auto mt-8"
        width={200}
        height={200}
        priority
        src="/assets/images/profile-pic.png"
        alt="Profile Image"
      ></Image>
    </section>
  );
}
