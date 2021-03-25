import { useRouter } from "next/router";

export default function GeneralEventsPage() {
  const router = useRouter();
  console.log("router in general routes are: ", router);
  const slug = router.query?.slug;
  return <div>I'm the general page {slug}</div>;
}
