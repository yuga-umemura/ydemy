import { Path } from "@/lib/constants/path";
import { redirect } from "next/navigation";

export default function Courses() {
  redirect(Path.courses);
}
