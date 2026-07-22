import { redirect } from "next/navigation";

export default function GiveRedirectPage() {
  redirect("/?give=1");
}
