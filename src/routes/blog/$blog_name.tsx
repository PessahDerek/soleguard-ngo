import {createFileRoute, useParams} from '@tanstack/react-router'
import {Image, Space, Text, Title} from "@mantine/core";
import useBlogStore from "../../store/useBlog.store";
import {useEffect, useMemo, useState} from "react";
import MoreReads from "../../components/pieces/MoreReads";
import {FaSpinner} from "react-icons/fa";
import dayjs from "dayjs";
import {BiCalendar} from "react-icons/bi";

export const Route = createFileRoute('/blog/$blog_name')({
    component: RouteComponent,
})

function RouteComponent() {
    const {blog_name} = useParams({from: "/blog/$blog_name"})
    const {blogs, getBlog} = useBlogStore()
    const [blog, setBlog] = useState<BlogObj | null | undefined>(undefined)

    useEffect(() => {
        if (!blog) {
            console.log("Blog: ", blog)
            getBlog(blog_name)
                .then(result => {
                    setBlog(result)
                })
        }
    }, [blog, blog_name])

    const showArticle = useMemo(() => {
        if (blog === undefined) {
            return <div className={"flex-1 flex h-full min-h-[calc(100vh-70px)]"}>
                <FaSpinner className={"animate-spin m-auto"}/>
            </div>
        }
        if (blog === null) {
            return (
                <div>
                    <Text>We could not find this blog</Text>
                </div>
            )
        }
        return (
            <div className={"flex-1"}>
                <Image src={blog.cover} alt={blog.title}
                       className={"w-full h-[40vmin] rounded-t-md object-cover"}/>
                <div className={'bg-white p-4'}>
                    <Title className={"text-primary"}>{blog.title}</Title>
                    <span className={'w-max flex gap-2'}>
                        <BiCalendar className={"m-auto"}/>
                        <i>{dayjs(blog.updated).format("ddd MM, YYYY")}</i>
                    </span>
                    <Space h={10} />
                    <div dangerouslySetInnerHTML={{__html: blog.content}}></div>
                </div>
            </div>
        )
    }, [blog])

    return (
        <div className={"w-full min-h-[calc(100vh-70px)]"}>
            <div className={"w-[90%] m-auto flex pt-5 flex-wrap gap-5"}>
                {showArticle}
                <MoreReads/>
            </div>
        </div>
    )
}
