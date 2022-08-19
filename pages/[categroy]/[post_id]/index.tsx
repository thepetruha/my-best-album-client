/* eslint-disable @next/next/no-img-element */
import { GetServerSideProps, NextPage } from 'next';
import * as S from '../../../components/SinglePost/styled'
import { useRouter } from 'next/router';
import Delete from '../../../public/images/delete.svg'

const SinglePost: NextPage = ({ post = [], category = "" }: any) => {
    const router = useRouter()
    const { id, name, caption = null, description = null, imgs }: any = post[0] || post

    const handleDeletePost = async (categroy: string, post_id: number) => {
        try {
            const res = await fetch(`http://localhost:4000/albums/${categroy}/${post_id}`, {
                mode: 'cors',
                method: "delete",
                headers: {
                    'Content-Type': 'application/json'
                },
            })

            const { status } = await res.json()
            if (status === "ok") {
                router.push('/')
                return
            }

            throw new Error("SERVER ERR DELETE POST")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <S.MainSinglePost category={category}>
            <div id="wrapper-container-post">
                <div id="text-single-post">
                    {caption && <h2>{caption}</h2>}
                    <div id="header-single-post">
                        <h1>{name}</h1>
                        <span onClick={() => handleDeletePost(category, id)}>
                            <Delete />
                        </span>
                    </div>
                    {description && <p>{description}</p>}
                </div>
                <div id="grid-img">
                    {imgs.map((src: any, i: any) => {
                        return (
                            <S.WrapperImgs key={`img:${Date.now() * i}`}>
                                <div className='wrapper-imgs'>
                                    <img src={src} alt={''} className="img-grid" width={"100%"} />
                                </div>
                            </S.WrapperImgs>
                        )
                    })}
                </div>
            </div>
        </S.MainSinglePost>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { post_id, categroy }: any = context.params;
    if (!post_id || !categroy) return { notFound: true };

    const res = await fetch(`http://localhost:4000/albums/${categroy}/${post_id}`, {
        mode: 'cors',
        method: "get",
        headers: {
            'Content-Type': 'application/json'
        },
    })

    const post = await res.json()

    return {
        props: {
            post: post.data || [],
            category: categroy,
        }
    }
}

export default SinglePost;