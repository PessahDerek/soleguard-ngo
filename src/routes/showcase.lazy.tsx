import {createLazyFileRoute} from '@tanstack/react-router'
import usePage from '../hooks/usePage'
import {useQuery} from '@tanstack/react-query'
import endpoint from '../libs/axios'
import {Image, Text, Title} from '@mantine/core'
import dayjs from 'dayjs'

export const Route = createLazyFileRoute('/showcase')({
    component: RouteComponent,
})

function RouteComponent() {
    usePage()
    const {data, isFetching} = useQuery({
        queryKey: ['showcase'],
        queryFn: (): Promise<ShowCaseObj[]> =>
            new Promise((resolve, reject) => {
                endpoint
                    .get('/showcase')
                    .then((res) => resolve(res.data))
                    .catch((err) => reject(err))
            }),
        gcTime: 1000 * 60 * 60 * 24 * 2,
    })

    return (
        <div className={'w-full min-h-[calc(100vh-70px)] space-y-2 p-2'}>
            <Title order={2} className={'w-[90%] m-auto text-primary-300'}>
                See us in action
            </Title>
            <div className={'w-full'}>
                {data?.map((show, i) => (
                    <div key={i} className={"space-y-4"}>
                        <div className={'w-[90%] m-auto'}>
                            <Title order={4}>{dayjs(show.date).format('MMM DD YYYY')}</Title>
                            <Title order={6}>
                                {show.county}, {show.town}
                            </Title>
                            <Text>{show.description}</Text>
                        </div>
                        <div className={"w-full columns-2 md:columns-5 gap-2 space-y-2 "}>
                            {show.photos.map(photo => <Image
                                key={photo.id}
                                src={photo.image}
                                alt={show.date}
                                className={"w-full h-full"}
                                fetchPriority={"low"}
                                loading={"lazy"}
                            />)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
