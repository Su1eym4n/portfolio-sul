const Post = ({ position, tech, description }) => {
  return (
    <div className="bg-gradient-to-r from-slate-500/70 to-slate-500/50 w-72 rounded-md my-1">
      <div className="text-md">{position}</div>
      <div className="text-xs">
        {description}
      </div>
      <div className="grid grid-cols-3 items-center px-1">
        {tech.map((item, key) => (
          <div key={key} className=''>
            <span className="text-xs font-semibold inline-block py-1 px-2 my-1 uppercase h-6 w-20 rounded text-white last:mr-0 mr-1 bg-orange-400">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Post