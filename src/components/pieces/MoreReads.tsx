import {Button, Card, Image, Text, Title} from "@mantine/core";
import useBlogStore from "../../store/useBlog.store";
import {Link, useParams} from "@tanstack/react-router";
import {useMemo} from "react";


export default function MoreReads() {
    const {blog_name} = useParams({from: "/blog/$blog_name"});
    const {blogs} = useBlogStore()
    const list = useMemo(()=>{
        console.log("Got: ", blog_name)
        return [...blogs.values()].filter(f => f.title !== blog_name)
    }, [])
    return (
        <div className={"w-[200px] h-[90%] sticky top-[70px]"}>
            <div className={"p-4 bg-primary text-white"}>
                <Title className={"text-white"} order={4}>More reads</Title>
                <div className={"w-full grid gap-2"}>
                    {list.map(blog => (
                        <Card key={blog.id} >
                            <Card.Section>
                                <Image src={blog.cover} />
                            </Card.Section>
                            <div className={"p-2"}>
                                <Title order={5}>{blog.title}</Title>
                                <Text className={"line-clamp-2"} dangerouslySetInnerHTML={{__html: blog.content}}></Text>
                                <Link >
                                    <Button variant={'light'}>
                                        Read more
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

