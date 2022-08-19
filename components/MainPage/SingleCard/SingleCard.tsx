/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import { useRouter } from "next/router"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import * as S from './styled'
import { isMobile } from 'react-device-detect';

export const SwiperCard = ({ categoryName, posts, last = false, search }: any) => {
    const router = useRouter()
    const [state, setState] = React.useState(false)

    const handleClick = (category: string, id: number) => {
        router.push(`/${category}/${id}`)
    }

    useEffect(() => setState(true), [])

    const handleSearch = (name: string, s: string) => {
        if (name && s) {
            const low = name.toLocaleLowerCase()
            const ser = s.toLocaleLowerCase()
            return low.startsWith(ser)
        }

        return true
    }

    if (state) {
        return (
            <S.WrapperSwiper>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={10}
                    slidesPerView={isMobile ? 1 : 3}
                    pagination={{ clickable: true }}
                >
                    {(
                        posts.map((item: any, index: number) => {
                            if (handleSearch(item.name, search) || search === "")
                                return (
                                    <S.SingleCard key={`item${Date.now()}${index}`}>
                                        {(item?.id && item?.imgs) && (
                                            <SwiperSlide key={`slide${Date.now()}${index * 2}`}>
                                                <S.ContainerCard onClick={() => handleClick(last ? item?.category : categoryName, item?.id)}>
                                                    <div className="card-text">
                                                        <p>{item?.name}</p>
                                                        {item?.caption && <span>{item?.caption}</span>}
                                                    </div>
                                                    <div className='blur-img'></div>
                                                    <img
                                                        src={item?.imgs ? item?.imgs[0] : ""}
                                                        className='img-card'
                                                        alt=""
                                                    />
                                                </S.ContainerCard>
                                            </SwiperSlide>
                                        )}
                                    </S.SingleCard>
                                )
                        })
                    )}
                </Swiper>
            </S.WrapperSwiper >
        )
    }

    return (
        <h1>Error</h1>
    )
}