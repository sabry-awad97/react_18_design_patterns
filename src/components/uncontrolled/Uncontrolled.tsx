import { ChangeEvent, useState, FormEvent } from 'react';

const Uncontrolled = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleChangeFirstName = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setFirstName(value);
  };

  const handleChangeLastName = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setLastName(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`${firstName} ${lastName}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChangeFirstName} />
      <input type="text" onChange={handleChangeLastName} />
      <button>Submit</button>
    </form>
  );
};

export default Uncontrolled;
