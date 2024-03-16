import { Link } from "react-router-dom"
import { dateConverter } from "../Date/date";

interface BlogProps {
    author: string,
    title: string,
    content: string,
    publishedDate: string,
    authorId:string

}
export function BlogCompo({
    author,
    title,
    content,
    publishedDate,
    authorId
}: BlogProps) {
    const date = dateConverter(publishedDate);
    return <div className="mx-12 mt-12 ">
        <div className="flex my-2">
            <Link to={`/user/${authorId}`}>
            <Avatar name={author} />
            </Link>
            

            <div className="px-2 font-normal">{author}</div>
            <div className="flex justify-center flex-col pr-1">
                <div className="h-1 w-1 rounded-full bg-slate-400"></div>
            </div>
            <div className="text-slate-500 font-light">{date}</div>
        </div>

        <div className="font-bold text-xl">{title}</div>
        <div className="text-slate-700">{content.length > 125 ? content.slice(0, 125) + "..." : content}</div>
        <div className="py-8 pl-2 text-sm text-slate-400">{`${Math.ceil(content.length / 250)} min read`}</div>
        <div className="h-0.5 bg-slate-200"></div>
    </div>
}
export function Avatar({ name }: { name: string }) {
    return <div className=" flex justify center flex-col relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-sm text-gray-600 dark:text-gray-300">{name[0]}</span>
    </div>
}