import { auth } from "@/auth";
import SignInButton from "@/components/auth/sign-in-button";
import SignOutButton from "@/components/auth/sign-out-button";
import ThemeSwitcher from "@/components/global/theme-switcher";

const Home = async () => {
  const session = await auth();

  return (
    <>
      <ThemeSwitcher />

      {session?.user?.image && (
        <img src={session.user.image} alt="User Avatar" />
      )}

      <SignInButton />
      <SignOutButton />
    </>
  );
};

export default Home;
