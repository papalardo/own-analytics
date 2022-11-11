import styles from '../../styles/Home.module.css'
import {useRouter} from "next/router";
import Link from "next/link";
import {AnalyticsPageViewConfig} from "../../packages/analytics/components/page-view-config";

export default function UserProfilePage() {
  const router = useRouter();
  const { user } = router.query;

  return (
    <>
      {user && (
        <AnalyticsPageViewConfig
          pageViewType={'PAGE_VIEW_PROFILE'}
          targetId={user as string}
        />
      )}
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome Profile
          </h1>

          <div className={styles.description}>
            <pre>{JSON.stringify(router.query, null, 2)}</pre>
            <Link href={`/`}>Home page</Link>
          </div>
        </main>
      </div>
    </>
  );
}
