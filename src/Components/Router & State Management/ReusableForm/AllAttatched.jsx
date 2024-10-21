import ReusableForm from "./Components/Router & State Management/ReusableForm/ReusableForm";

const AllAttatched = () => {
  const handleSingUpSubmit = (data) => {
    console.log("sign up data", data);
  };

  const handleUpdateProfile = (data) => {
    console.log("update profile", data);
  };
  return (
    <div>
      <ReusableForm FormTitle={"sign up"}></ReusableForm>

      <ReusableForm
        FormTitle={"profile update"}
        submitBtnText="Update"
      ></ReusableForm>
    </div>
  );
};

export default AllAttatched;
