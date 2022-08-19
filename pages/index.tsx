import type { NextPage } from 'next'
import { MainPage } from '../components/MainPage/MainPage'
import { GetServerSideProps } from 'next';

const Home: NextPage = ({ store }: any) => {
  return <MainPage store={store} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:4000/albums", {
    mode: 'cors',
    method: "get",
    headers: {
      'Content-Type': 'application/json'
    },
  })

  const album = await res.json()
  if (!album.data?.categoris) return { notFound: true };

  return {
    props: {
      store: album.data.categoris
    }
  }
}

export default Home
