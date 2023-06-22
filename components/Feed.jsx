'use client';
import { useState, useMemo, useEffect } from 'react'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import VendorCardList from './VendorCardList';


const Feed = () => {
  const [posts, setPosts] = useState([])
  const { data: session } = useSession();
  const router = useRouter();

  const handleEdit = (post) => {
    router.push(`/update-vendor?id=${post._id}`)
  }
  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this prompt?");
    if (hasConfirmed) {
      try {
        await fetch(`/api/vendor/${post._id.toString()}`,
          {
            method: 'DELETE',
          })

        const filteredPosts = posts.filter((p) => p._id !== post._id);
        setPosts(filteredPosts)
      } catch (error) {
        console.log(error)
      }
    }
  }

  const fetchPosts = async () => {
    const response = await fetch(`/api/users/${session?.user.id}/vendors`)
    const data = await response.json();
    setPosts(data);
  }

  useEffect(() => {
    if (session?.user.id){ 
      console.log("called")
      fetchPosts()};
  }, [session?.user.id]);


  return (
    <section className="mt-16 mx-auto w-full max-w-xl flex justify-center items-center flex-col gap-2">
      <VendorCardList
        data={posts}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </section>
  )
}




export default Feed