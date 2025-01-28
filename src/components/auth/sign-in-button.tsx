import { signIn } from "@/auth";

export default function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/shop" });
      }}
    >
      <button type="submit">Signin with Google</button>
    </form>
  );
}
