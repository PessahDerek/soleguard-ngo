import {Button, Card, Image, Text, Title} from "@mantine/core";
import {Link, Outlet} from "@tanstack/react-router";
import {IoIosMore} from "react-icons/io";


export default function ListBlog({blog}: { blog: BlogObj }) {


    return (
        <Card className={"w-full max-w-[300px] cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all"}>
            <Card.Section>
                <Image className={"w-full h-[20vh] object-center"} src={blog.cover} alt={blog.title}/>
            </Card.Section>
            <Card.Section p={10} className={"grid gap-2"}>
                <Title className={"text-[16px]"}>{blog.title}</Title>
                <Text className={"line-clamp-4 text-[12px]"} dangerouslySetInnerHTML={{__html: blog.content}}></Text>
                <Link to={"/blog/$blog_name"} params={{blog_name: blog.title}}>
                    <Button rightSection={<IoIosMore/>} variant={'light'}>
                        Read more
                    </Button>
                </Link>
            </Card.Section>
        </Card>
    )
}

