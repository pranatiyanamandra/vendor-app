import Link from "next/link"
const Form = ({ type, post, setPost, submitting, handleSubmit, }) => {
  const renderFieldInForm = ()=>{
    const elements = []
    Object.keys(post).forEach((key) => {
      elements.push(<label key={key}>
        <span className="font-satoshi font-semibold text-base text-gray-700">
          Vendor {post[key].id}
        </span>
        <input
        value={post[key]['value']}
        onChange={(e)=>{setPost(prevState=>(
          {
            ...prevState,[key]:{
              ...prevState[key],
              value:e.target.value
            }
          }
        ))}}
          required={post[key].required}
          className="w-full flex rounded-lg mt-2 p-3 text-sm text-gray-500 outline-0"
          placeholder={`Write Vendor ${post[key].id}`}
        />
      </label>)
    })
    return elements

  }


  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-left">
        <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">{type} Vendor</span>
      </h1>
      <p className="mt-5 text-lg text-gray-600 sm:text-xl max-w-2xl text-left max-w-md">
        {type} and store vendors.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        {renderFieldInForm()}
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button 
          type="submit"
          className="px-5 py-1.5 text-sm bg-orange-500 rounded-full text-white"
          disabled={submitting}
          >
            {submitting ? `${type}...`:type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form