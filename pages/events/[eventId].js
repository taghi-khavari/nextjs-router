import { useRouter } from "next/router";

export default function SingleEvent(props) {
  const router = useRouter();
  console.log("router in single event is: ", router);
  const { eventId } = router.query;
  return <div>I'm the single event with id: {eventId}</div>;
}
