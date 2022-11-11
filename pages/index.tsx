import styles from '../styles/Home.module.css'
import Link from "next/link";

type HomeProps = {
  user: number
}

export default function Home({ user }: HomeProps) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Home Page
        </h1>

        <p className={styles.description}>
          <Link href={`/user/${user}`}>
            User page
          </Link>
        </p>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      user: new Date().getTime(),
    },
  }
}