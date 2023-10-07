import { ChangeEvent, FormEvent, useState } from 'react';

const Controlled = () => {
  const [values, setValues] = useState({
    firstName: 'Sabry',
    lastName: 'Awad',
  });

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
      <input type="text" defaultValue="Hello React" />
      <input
        type="text"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default Controlled;
