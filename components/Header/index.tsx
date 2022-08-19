/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import * as S from './styled'
import Search from '../../public/images/search.svg'
import { useRouter } from 'next/router';

const LinksHeader = [
    { name: "Create Post", link: "/creating" },
    { name: "FAQ", link: "/faq" }
]

export const Header = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const select = useSelector((state: any) => state.search)

    const handleChangeSearch = (event: any) => {
        const value = event.target.value
        dispatch({ type: 'set', search: value })
    }

    return (
        <header>
            <S.HeaderContainer>
                <div id="icon-container">
                    <img src={"../images/album.png"} alt="Иконка альбома" />
                    <Link href={"/"} passHref><span id="icon-title-text">My Best Album</span></Link>
                </div>
                {router.asPath === "/" && (
                    <div id="search">
                        {/* <Search /> */}
                        <input type="text" value={select} placeholder='Search' onChange={handleChangeSearch} />
                    </div>
                )}
                <div id="links-container">
                    {
                        LinksHeader.map(({ name, link }: any) => {
                            return <Link key={`${name}${Date.now()}`} href={link} passHref>{name}</Link>
                        })
                    }
                </div>
            </S.HeaderContainer>
        </header>
    )
}
