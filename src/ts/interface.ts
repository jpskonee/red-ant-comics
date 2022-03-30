export interface ImageCardProps  {
    alt: string,
    id: string,
    title: string,
    thumbnail : {
        path: string,
        extension: string
    },
    changeFavHandLer : (id: string) => void
}



export interface singlePageProps { 
    thumbnail: {path: string, extension : string},
    title: string,
}


export interface FavPanelProps {
    id: string,
    title: string,
    deleteFav: (id: string) => void
}


export interface MarvelDataProps {
  marvelData: ImageCardProps[]
}
