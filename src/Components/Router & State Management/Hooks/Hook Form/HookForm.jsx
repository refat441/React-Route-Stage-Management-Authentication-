const HookForm = () => {
  const emailState = useInputState("this is Hook");

  const handleSubmit = (e) => {
    console.log("form data", emailState.value);
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" name="name" />
        <br />
        <input {...emailState} type="email" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default HookForm;
