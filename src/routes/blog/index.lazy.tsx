import {createLazyFileRoute, useLoaderData} from '@tanstack/react-router'
import AppErrorComponent from '../../components/ui-blocks/AppErrorComponent'
import {useEffect, useMemo} from 'react'
import useBlogStore from '../../store/useBlog.store'
import ListBlog from '../../components/pieces/ListBlog'
import {FaSpinner} from "react-icons/fa";
import usePage from "../../hooks/usePage";

export const Route = createLazyFileRoute('/blog/')({
    component: RouteComponent,
    errorComponent: AppErrorComponent,
    pendingComponent: ()=>{
        return <div className={"w-full h-[calc(100vh-70px)] flex justify-center items-center]"}>
            <FaSpinner className={"animate-spin m-auto"} />
        </div>
    }
})

function RouteComponent() {
    usePage()
    const data = useLoaderData({from: '/blog/'})
    const {blogs, addBlogs} = useBlogStore()

    useEffect(() => {
        if (Array.isArray(data.data) && blogs.size !== data.data.length) {
            addBlogs(data.data)
        }
    }, [data.data])

    const list = useMemo(() => {
        return [...blogs.values()]
    }, [blogs])

    return (
        <div className={'w-full min-h-[calc(100vh-70px)] '}>
            <div className={'w-[90%] m-auto'}>
                {list.map((blog) => (
                    <ListBlog blog={blog} key={blog.id}/>
                ))}
            </div>
        </div>
    )
}
