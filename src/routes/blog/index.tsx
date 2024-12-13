import {createFileRoute, useLoaderData} from '@tanstack/react-router'
import endpoint from '../../libs/axios'
import AppErrorComponent from '../../components/ui-blocks/AppErrorComponent'
import {AxiosResponse} from 'axios'
import {useEffect, useMemo} from 'react'
import useBlogStore from '../../store/useBlog.store'
import ListBlog from '../../components/pieces/ListBlog'

export const Route = createFileRoute('/blog/')({
    component: RouteComponent,
    loader: (): Promise<AxiosResponse<BlogObj[]>> => endpoint.get('/posts/'),
    errorComponent: AppErrorComponent,
    onError: (error) => error,
})

function RouteComponent() {
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
