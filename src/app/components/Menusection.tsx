

export default function MenuSection({ title = '', icon = null , link = ''}: { title: any; icon?: any; link:any }){
    return(
        <a href={link}>
          <div className="flex -mt-2 items-center">
          {icon && <img src={icon} className="ml-2" alt={title} />}
          <h1 className="ml-3 font-serif text-lg">{title}</h1>
          <img src="/rectangle.png" className="-mt-1 ml-auto mr-4" />
          <hr className="h-4 font-bold mt-6" />
        </div>
        </a>
    )
}