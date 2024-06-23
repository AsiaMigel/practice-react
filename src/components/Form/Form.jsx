const Form = ({submit}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
      submit({
        user: e.target.elements.user.value,
        phone: e.target.elements.phone.value,
      });
       
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="user" />
      <input type="text" name="phone" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
