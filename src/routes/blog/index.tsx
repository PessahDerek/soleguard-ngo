import {createFileRoute} from '@tanstack/react-router'
import {AxiosResponse} from "axios";
import endpoint from "../../libs/axios";

export const Route = createFileRoute('/blog/')({
    loader: (): Promise<AxiosResponse<BlogObj[]>> => endpoint.get('/posts/'),
})
