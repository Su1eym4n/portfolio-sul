import { AiOutlineLink } from 'react-icons/ai'

const Post = ({ position, tech, description, color, company }) => {
  return (
    <div className="bg-gradient-to-r bg-[#132231] rounded-md my-1 border h-80 shadow-sm border-gray-500/60">
      <div className="text-base font-semibold">{position}</div>

      <div className="text-base font-normal ">{company}</div>
      <div className="text-xs text-left mx-2 px-1 bg-[#0F2030] rounded-md h-44">
        {description}
      </div>
      <div className="flex flex-wrap px-1">
        {tech.map((item, key) => (
          <div key={key}>
            <span className={"text-xs font-semibold uppercase border rounded-sm px-1 mx-1 py-1 hover:border-emerald-400"}>
              {item}
            </span>
          </div>
        ))}
      </div>
      <div className='text-sm my-4 py-1 border w-20 mx-2 rounded-xl content-center flex hover:text-emerald-400 hover:border-emerald-400 hover:cursor-pointer'>
          <div className='mx-2'>Visit</div>
          <AiOutlineLink/>
      </div>
    </div>
  )
}

export default Post