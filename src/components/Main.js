import StepProgress from "./Step/StepProgress";
import Form from "./Step/Form/Form";

const Main = () => {
  return (
    <main className="site-main">
      <div className="main-container">
        <StepProgress />
        <Form />
      </div>
    </main>
  )
};

export default Main;