import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../ModeToggle";
const Nav = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between my-3">
      <ModeToggle />
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  );
};

export default Nav;
