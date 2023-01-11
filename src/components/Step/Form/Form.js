import Step1 from "../Step1";
import Step2 from "../Step2";
import Step3 from "../Step3";

const Form = () => {
  return (
    <section className="form-container">
      <form >
        <Step1 />
        <Step2 />
        <Step3 />
      </form>
    </section>
  )
};

export default Form;