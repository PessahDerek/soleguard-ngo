declare interface BlogObj {
    id: number;
    title: string;
    content: string;
    cover: string;
    updated: string;
}

declare interface ShowCaseImg {
    id: number;
    image: string;
    campaign: number;
}

declare interface ShowCaseObj {
    date: string;
    county: string;
    town: string;
    description: string;
    photos: Array<ShowCaseImg>
}