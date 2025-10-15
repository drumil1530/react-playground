import { useUser } from "./useUser";

export default function Footer() {
  const { user } = useUser();

  return (
    <footer className="text-sm text-center text-neutral-500">
      Current User: {user.name} | Role: {user.role}
    </footer>
  );
}
