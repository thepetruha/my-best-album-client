import React, { useEffect } from 'react'
import * as S from './styled'
import AddAlmub from '../../public/images/plus.svg'
import { SwiperCard } from './SingleCard/SingleCard';
import { useRouter } from 'next/router';
import { isMobile } from 'react-device-detect';
import { useSelector } from 'react-redux';

export const MainPage = ({ store }: { store: Array<any> }) => {
    const router = useRouter();
    const [state, setState] = React.useState(false)
    const select = useSelector((state: any) => state.search)

    useEffect(() => setState(true), [])

    const handlerAddingLink = () => router.push("/creating")

    const renderLastPost = () => {
        const arr: Array<any> = []
        store.forEach(row => {
            const len = row.posts.length;
            arr.push({
                category: row.name,
                ...row.posts[len - 1]
            })
        })

        return (
            <div className="wrapper-category">
                <SwiperCard
                    categoryName={arr[0].category}
                    posts={arr}
                    last={true}
                    search={select}
                />
            </div>
        )
    }

    if (state) {
        return (
            <S.MainPage>
                {!isMobile && (
                    <S.TitleMainPage>
                        <h1>Albums</h1>
                        <span onClick={handlerAddingLink}><AddAlmub /></span>
                    </S.TitleMainPage>
                )}
                <div className="wrapper-category">
                    <h2>Last Addeds</h2>
                    {store.length > 0 && renderLastPost()}
                </div>
                {store.reverse().map(({ name, posts }: any, i: number) => {
                    return (
                        <div key={`${name}${Date.now()}`} className="wrapper-category">
                            <h2>{name}</h2>
                            <SwiperCard categoryName={name} posts={posts.reverse()} search={select} />
                        </div>
                    )
                })}
            </S.MainPage>
        )
    }

    return <span>Error</span>
}