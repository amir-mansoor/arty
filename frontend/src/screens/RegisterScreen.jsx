import { useRegisterMutation } from "../slices/userApiSlice";
const RegisterScreen = () => {
  const [register] = useRegisterMutation();

  const handleForm = async (e) => {
    e.preventDefault();

    const res = await register({
      name: "asdcasdc",
      email: "casdascd",
      password: "asdcasdc",
    }).unwrap();
  };

  return (
    <div className="mt-4">
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div>
          <label htmlFor="avatar">Avatar</label>
          <input type="file" id="avatar" />
          <button className="btn-small">Select File</button>
        </div>

        <div>
          <button className="btn-small">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterScreen;
