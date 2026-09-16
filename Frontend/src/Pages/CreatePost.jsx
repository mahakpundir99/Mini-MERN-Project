import axios from "axios"

const CreatePost = () => {
    const handleSubmit = async(e)=>{
            e.preventDefault()
            console.log(e.target)
            const formData = new FormData(e.target)

            axios.post("http://localhost:3000/upload", formData)
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
                alert("Something went wrong..");
                
            })
    }
  return (
    <div className="flex flex-col h-130 justify-center items-center gap-5 ">
      <h1 className="text-4xl uppercase font-bold">Create post</h1>
      <form onSubmit={handleSubmit}>
     <div className="flex flex-col gap-4 bg-gray-200 p-4 rounded-2xl items-center ">
         <input type="file" name="image" className="border-2 rounded-lg  p-4 border-gray-400"/>
      <input type="text" name="caption" placeholder="Enter Caption.." className="border-2 rounded-lg h-10 w-full p-4 border-gray-400"/>
      <button type="submit" className="bg-green-500 rounded-lg text-white h-10 w-30 hover:active:scale-90 ">Submit</button>
     </div>

      </form>
    </div>
  )
}

export default CreatePost
