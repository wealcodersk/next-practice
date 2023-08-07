export default async function getUserPosts(userId: String) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

  if (!res.ok) throw new Error("Fail to fetch data")
  
  return res.json()
}
