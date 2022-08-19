import { MainSinglePost } from '../../components/SinglePost/styled';
import Delete from '../../public/images/close.svg'
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

enum TypeInput {
    shortDesc = 0,
    title = 1,
    description = 2,
    selecte = 3,
}

const Creating: NextPage = ({ categoris }: any) => {
    const router = useRouter()
    const [images, setImages] = React.useState(["", "", "", ""]);
    const [publish, setPublish] = React.useState(false)
    const [title, setTitle] = React.useState("")
    const [shortDesc, setShortDesc] = React.useState("")
    const [desctiption, setDescription] = React.useState("")
    const [select, setSelect] = React.useState(categoris[0])

    useEffect(() => {
        if (title !== "" && shortDesc !== "" && desctiption !== "") {
            setPublish(true);
        }
    }, [title, shortDesc, desctiption])

    useEffect(() => {
        let i = 0
        images.forEach((item) => item !== null && ++i)
        if (i !== 0 && title !== "") setPublish(true)
        if (i === 0 && title === "" && shortDesc === "" && desctiption === "") {
            setPublish(false)
        }
    }, [images, title])

    const handleChangeFile = (event: any, index: number) => {
        const file = event.target.files;
        if (typeof file === 'object') {
            const arr = images;
            arr[index] = file[0]
            setImages([...arr])
        }
    }

    const hadnleDeleteImg = (index: number) => {
        const arr = images
        arr[index] = ""
        setImages([...arr])
    }

    const renderImg = (imgs: Array<any>) => {
        return imgs.map((img, i) => {
            if (img === "") {
                return (
                    <label key={`img:ip${i}`} htmlFor={`input:img${i}`}>
                        <div key={`img:ip${i}`} className="add-img-wrapper">
                            <div className='add-img-gird'>
                                <span>+</span>
                                <input
                                    type={"file"}
                                    accept="image/*"
                                    id={`input:img${i}`}
                                    onChange={(event) => handleChangeFile(event, i)}
                                />
                            </div>
                        </div>
                    </label>
                )
            }

            const url = img !== String ? URL.createObjectURL(img) : ''
            return (
                <div key={`img:ip${i}`} className="add-img-wrapper">
                    <span onClick={() => hadnleDeleteImg(i)}><Delete /></span>
                    <img src={url} alt="" />
                </div>
            )
        })
    }

    const handleChagneText = (event: any, type: TypeInput) => {
        const value = event.target.value;

        switch (type) {
            case 0:
                setShortDesc(value)
                break;
            case 1:
                setTitle(value)
                break;
            case 2:
                setDescription(value)
                break;
            case 3:
                setTitle("")
                setSelect(value)
                break;
        }
    }

    const handlePublishPost = async () => {
        const imgs: any = []
        images.forEach((item) => {
            const url = typeof item !== 'string' ? URL.createObjectURL(item) : null
            if (url !== null) {
                imgs.push(url)
            }
        })

        const data = select === categoris[0] ? (
            JSON.stringify({
                categoryName: select,
                post: {
                    id: Date.now(),
                    name: title,
                    imgs: imgs,
                }
            })
        ) : (
            JSON.stringify({
                categoryName: select,
                post: {
                    id: Date.now(),
                    name: title,
                    imgs: imgs,
                    description: desctiption,
                    caption: shortDesc
                }
            })
        )

        const res = await fetch(`http://localhost:4000/albums/create`, {
            mode: 'cors',
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        })

        const { status } = await res.json()
        if (status === "ok") {
            router.push('/')
        }
    }

    return (
        <MainSinglePost category={"Images"}>
            <div id="wrapper-container-post">
                <select value={select} onChange={(e) => handleChagneText(e, TypeInput.selecte)}>
                    {categoris.map((i: any) => {
                        return <option key={`${i}${Date.now()}`} value={i}>{i}</option>
                    })}
                </select>
                <>
                    {select === categoris[0] &&
                        (<input
                            type="text"
                            value={title}
                            id="title-inp"
                            placeholder={"Title"}
                            onChange={(e) => handleChagneText(e, TypeInput.title)}
                        />)
                    }
                    <p>Images</p>
                    <div id="grid-img">
                        {renderImg(images)}
                    </div>
                </>
                {select !== categoris[0] && (
                    <div id="text-single-post">
                        <input
                            type="text"
                            value={shortDesc}
                            placeholder={"Short Description"}
                            onChange={(e) => handleChagneText(e, TypeInput.shortDesc)}
                            id="short-desc-inp"
                        />
                        <input
                            type="text"
                            value={title}
                            id="title-inp"
                            placeholder={"Title"}
                            onChange={(e) => handleChagneText(e, TypeInput.title)}
                        />
                        <textarea
                            id="desc-inp"
                            value={desctiption}
                            placeholder={"Description..."}
                            onChange={(e) => handleChagneText(e, TypeInput.description)}
                        ></textarea>
                    </div>
                )}
                {publish && <button onClick={handlePublishPost}>Publish</button>}
            </div>
        </MainSinglePost>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch(`http://localhost:4000/albums/categoris`, {
        mode: 'cors',
        method: "get",
        headers: {
            'Content-Type': 'application/json'
        },
    })

    const categoris = await res.json()
    if (categoris.data.length === 0) return { notFound: true };

    return {
        props: {
            categoris: categoris.data,
        }
    }
};
export default Creating;
