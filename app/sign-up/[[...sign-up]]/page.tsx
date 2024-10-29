import { SignUp } from "@clerk/nextjs";

export default function page() {
  return <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />;
}
