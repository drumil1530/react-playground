import { useState, type ChangeEvent } from 'react';
import Input from '../../../components/Input';

type userInfo = {
  name: string;
  email: string;
  age: number;
};

type formError = {
  name: string;
  email: string;
  age: string;
};

const LiveFormInput = () => {
  const [userData, setUserData] = useState<userInfo>({
    name: '',
    email: '',
    age: 0,
  });

  const [error, setError] = useState<formError>({
    name: '',
    email: '',
    age: '',
  });

  function getInput(e: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;

    if (!value.trim()) {
      setError((prev) => ({ ...prev, [name]: `${name} is requidanger` }));
      return;
    }

    if (name === 'age') {
      const ageValue = Number(value);
      if (ageValue < 18) {
        setError((prev) => ({ ...prev, [name]: 'Age should be more than 18' }));
        return;
      }
      if (ageValue > 60) {
        setError((prev) => ({
          ...prev,
          [name]: 'Age should not be more than 60',
        }));
        return;
      }
    }

    setUserData((prev) => ({
      ...prev,
      [name]: name === 'age' ? Number(value) : value,
    }));

    setError((prev) => ({ ...prev, [name]: '' }));
  }

  return (
    <div className="w-full max-w-80 px-4 py-6 rounded-xl shadow-xl">
      <h2 className="text-2xl font-semibold text-primary-500">
        Live Form Input
      </h2>
      <form className="flex flex-col">
        <Input
          label="Name"
          name="name"
          id="name"
          onChange={(e) => getInput(e)}
          placeholder="Enter your name"
          error={error.name}
          autoComplete="name"
        />
        <Input
          type="email"
          label="Email"
          name="email"
          id="email"
          onChange={(e) => getInput(e)}
          placeholder="Enter your email"
          error={error.email}
          autoComplete="email"
        />
        <Input
          type="number"
          label="Age"
          name="age"
          id="age"
          onChange={(e) => getInput(e)}
          placeholder="Enter your age"
          min={18}
          error={error.age}
          autoComplete="on"
        />
      </form>
      <hr className="my-4 border-t-2 border-gray-400" />
      <div>
        <p>Name: {userData?.name}</p>
        <p>Email: {userData?.email}</p>
        <p>Age: {userData?.age}</p>
      </div>
    </div>
  );
};

export default LiveFormInput;
