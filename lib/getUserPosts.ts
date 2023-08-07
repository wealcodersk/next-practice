export default async function getUserPosts(userId: String) {
  // const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {cache: 'no-store'});
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {next: {revalidate: 60}});

  if (!res.ok) return undefined
  
  return res.json()
}