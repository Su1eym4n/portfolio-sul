import { AiOutlineLink } from 'react-icons/ai'

const Post = ({ position, tech, description, color, company }) => {
  return (
    <div className="bg-gradient-to-r from-slate-500/70 to-slate-500/50 w-72 rounded-md my-1 border border-slate-400">
      <div className="text-base font-semibold">{position}</div>

      <div className="text-base font-normal hover:text-green-400 hover:cursor-pointer">{company}</div>
      <div className="text-xs text-left mx-2 px-1 bg-[#162D44] rounded-md">
        {description}
      </div>
      <div className="grid grid-cols-3 items-center px-1">
        {tech.map((item, key) => (
          <div key={key} className=''>
            <span className={"text-xs font-semibold inline-block py-1 px-2 my-1 uppercase h-6 w-20 rounded text-white last:mr-0 mr-1 " + color[key]}>
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Post