import { ChangeEvent, useState, FormEvent } from 'react';

const Uncontrolled = () => {
  const [values, setValues] = useState({ firstName: '', lastName: '' });

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`${values.firstName} ${values.lastName}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" onChange={handleChange} />
      <input type="text" name="lastName" onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
};

export default Uncontrolled;
