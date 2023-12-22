import Container from "../../../Components/Shared/Container/Container";
import "./WhoBanifit.css";
const WhoBanifit = () => {
  return (
    <div className=" ">
      <Container>
        <div className="">
          <h3 className="text-xl font-semibold text-center">Who Benefits</h3>
          <h3 className="text-4xl font-bold text-center">Our Website</h3>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 justify-between items-center py-20">
            <div>
              <img
                src="https://i.ibb.co/myW5qD7/515-removebg-preview.png"
                className="w-full mx-auto text-center"
                alt=""
              />
            </div>
            <div className="col-span-2 p-8 space-y-5">
              <div>
                <h3 className="text-xl font-semibold mb-2">Developers</h3>
                <p className="text-gray-600">
                  As a developer-friendly platform, our website offers a suite
                  of tools and resources to streamline your development process.
                  Stay organized, collaborate efficiently, and enhance
                  productivity in your coding projects.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Corporate Professionals
                </h3>
                <p className="text-gray-600">
                  Elevate collaboration and productivity within your corporate
                  environment. Our platform provides features tailored to meet
                  the needs of professionals working in a corporate setting,
                  helping you manage tasks and projects effectively.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Bankers</h3>
                <p className="text-gray-600">
                  Explore secure and efficient solutions designed specifically
                  for the banking industry. Our platform ensures that bankers
                  can manage tasks, deadlines, and priorities with ease,
                  fostering a more organized workflow.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Custom Audience</h3>
                <p className="text-gray-600">
                  Whether you're a professional in another industry or an
                  individual with specific needs, our website is designed to be
                  adaptable. Customize your experience to suit your unique
                  requirements and benefit from our versatile platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhoBanifit;
