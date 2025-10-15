import { useUser } from "./useUser";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <main className="p-3 rounded-2xl bg-bg-100 border">
      <p className="text-lg">
        {user.role === 'Learner'
          ? 'Learning React Hooks deeply 🧠'
          : 'Guiding others on their React journey ✨'}
      </p>
    </main>
  );
}
