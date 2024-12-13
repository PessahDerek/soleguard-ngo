import {create} from "zustand/react";
import endpoint from "../libs/axios";
import {AxiosResponse} from "axios";


interface BlogStoreObj {
    blogs: Map<string | undefined, BlogObj>,
    addBlogs: (blogs: BlogObj[]) => void,
    getBlog: (blogName: string) => Promise<BlogObj | null>,
}

const useBlogStore = create<BlogStoreObj>((set, get) => ({
    blogs: new Map(),
    addBlogs: (blogs: BlogObj[]) => {
        const mapped = new Map(blogs.map(blog => [blog.title, blog]))
        set(prev => ({...prev, blogs: mapped}))
    },
    getBlog: async (blogName: string) => {
        console.log(`getBlog: ${blogName}`);
        return new Promise((resolve, reject) => {
            const foundLocally = get().blogs.get(blogName);
            if (!foundLocally) {
                endpoint.get(`/posts/?title=${blogName}`)
                    .then((result: AxiosResponse<BlogObj[]>) => {
                        const found: BlogObj | undefined = result.data[0]
                        if (found) {
                            set(prev => ({...prev, blogs: new Map(prev.blogs).set(blogName, found)}))
                            resolve(found);
                        } else {
                            resolve(null);
                        }

                    })
                    .catch(() => {

                    })
            } else {
                resolve(foundLocally);
            }
        })

    }
}))


export default useBlogStore;

