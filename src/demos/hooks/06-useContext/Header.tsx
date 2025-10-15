import Button from '../../../components/Button';
import { useUser } from './useUser';

export default function Header() {
  const { user, updateRole } = useUser();

  return (
    <header className="flex justify-between items-center py-2 px-4 bg-bg-200 rounded-2xl">
      <h1 className="font-medium">
        Welcome, {user.name} ({user.role})
      </h1>
      <Button
        onClick={() =>
          updateRole(user.role === 'Learner' ? 'Mentor' : 'Learner')
        }
      >
        Toggle Role
      </Button>
    </header>
  );
}
