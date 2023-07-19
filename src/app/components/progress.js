"use client";
import { useRouter } from "next/navigation";
import ProgressBar from "@badrap/bar-of-progress";

export default function Progress({ childern }) {
  const router = useRouter();

  const progress = new ProgressBar({
    size: 4,
    color: "#FE595E",
    className: "z-50",
    delay: 100,
  });

  router.events.on("routeChanageStart", progress.start);
  router.events.on("routeChanageComplete", progress.finish);
  router.events.on("routeChanageError", progress.finish);

  return <div>{childern}</div>;
}
