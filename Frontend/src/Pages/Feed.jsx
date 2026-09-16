import { useState, useEffect} from "react"
import axios from "axios"


const Feed = () => {
    const[posts, setposts] = useState([])
     
    useEffect(()=>{
        axios.get("http://localhost:3000/upload")
        .then((res)=>{
           
            setposts(res.data.post)
        })
    }, [])

  return (
    <>
    <div className="flex flex-col items-center mb-8 gap-2 ">
        <h1 className="uppercase font-bold text-3xl mb-4">Your Feed</h1>
    <div className=" grid md:grid-cols-3 xl:grid-cols-4 gap-12  ">
        
     
        {
            posts.length > 0 ? (
                
                posts.map((posts)=>{
                    return(
                         <div key={posts._id} className="w-70 bg-gray-200 flex flex-col gap-1 font-semibold mb-4 text-lg p-4 rounded-2xl  ">
            <img className="object-cover rounded-lg w-full h-full" src={posts.image} alt="" />
            <p>{posts.caption}</p>
        </div> 
                    )
                         
                })
            ) : (<h1>No posts uploaded..</h1>)

        }
    </div>
    </div>
    </>
  )
}

export default Feed
