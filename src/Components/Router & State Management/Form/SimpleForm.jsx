const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="text" name="email" />
        <br />
        <input type="password" name="password" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
