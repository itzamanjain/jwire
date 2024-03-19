
import image1 from "../assets/teri.png";
import image2 from "../assets/oxfam.png";
import image3 from "../assets/EESL.png";
import image4 from "../assets/icic.png";
import image5 from "../assets/Villgro.png";
import image6 from "../assets/ceew.png";
import image7 from "../assets/iim.png";
import image8 from "../assets/iitb.png";





const About = () => {
  return (
    <>
    
    
    <section id="about"  className="bg-gray-100 w-full py-8 lg:py-16">
      
      <div className="container mx-auto">
       
       

        <div className="">
          {/* Left side text box */}
          <div className="mb-6 lg:mb-0 shadow-md p-6 rounded-lg bg-white">
            <h3 className="text-xl font-bold text-left">Overview</h3>
            <p className="lg:mt-3 text-base lg:text-lg text-gray-700 leading-6 lg:leading-10">
              J-WiRES is a community owned and JEEViKA promoted pvt ltd company
              incorporated in Jan 2020, situated at Dobhi, Gaya, Bihar. We are
              manufacturer, assembler, trader and system Integrator Company
              dealing in electrical, electronics and Solar product and projects.
              The aim of J-WiRES is to create solar ecosystem in Bihar and
              provide opportunity for livelihood to community women (SHG Didis)
              through individual s-mart (solar shop) at their own location and
              form a group enterprise (J-WiRES) to get solar project from
              government and private partner to provide cost effective solutions
              and assured service. We are also engaged in research project and
              energy need assessment DPR as well solar advance training till
              solar technician level. we have 341 solar shops in 5 districts
              (Gaya Nawada, Aurangabad, W Champaran and Bhojpur), 57 blocks of
              Bihar, through J-WiRES we are supplying solar, electrical and
              electronic product as well as e-services (Airtel payment bank CSP)
              . We are sole manufacturer of LED bulb with our own brand and also
              fulfill all government certification like MSME and BIS certificate
              for self blast LED lighting. We are in partnership with various
              institutions like TERI, IITB, EESL, CEEW, Villgro and many more.
            </p>
          </div>

          {/* Right side boxes */}
          <div className="grid grid-col-2 gap-6 lg:gap-10">
            {/* Box 1 */}
            <div className="mb-6 mt-5 lg:mb-0 shadow-md p-6 rounded-lg bg-white">
              <h3 className="text-xl font-bold text-left">Our Mission</h3>
              <p className="text-base lg:text-lg text-gray-700 leading-6">
                Our mission at J-WiRES is to create a sustainable solar
                ecosystem in Bihar that empowers community women and provides
                affordable and reliable solar solutions to public and private
                partners. We aim to promote energy efficiency, reduce carbon
                footprint and contribute towards developing rural communities in
                Bihar and control climate change
              </p>
            </div>

            {/* Box 2 */}
            <div className="mb-6 lg:mb-0 shadow-md p-6 rounded-lg bg-white">
              <h3 className="text-xl font-bold text-left">Our Vision</h3>
              <p className="text-base lg:text-lg text-gray-700 leading-6">
                Our vision is to become a leading solar enterprise in Bihar,
                known for our commitment to sustainability and social impact. We
                aim to expand our reach to more districts and communities and to
                continue offering advanced solar training and research projects.
                We aspire to create a model that can be replicated in other
                parts of India and to contribute towards India’s goal of
                achieving a clean energy future.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Our Values Section */}
              <div className="shadow-md p-6 rounded-lg bg-white">
                <h3 className="text-2xl font-bold mb-4">Project Partners</h3>
                <div className="grid grid-cols-3 gap-2">
                  <a href="https://www.teriin.org/" target="_blank" rel="noreferrer">
                    <img src={image1} alt="" className="w-32 h-auto" />
                  </a>
                  <a href="https://www.oxfamindia.org/">
                    <img src={image2} alt="" className="w-32 h-auto" />
                  </a>
                  <a href="https://eeslindia.org/en/home/#">
                    <img src={image3} alt="" className="w-16 h-16" />
                  </a>
                  <a href="https://icicifoundation.org/">
                    <img src={image4} alt="" className="w-32 h-auto" />
                  </a>
                  <a href="https://www.villgro.org/">
                    <img src={image5} alt="" className="w-32 h-auto" />
                  </a>
                  <a href="https://www.ceew.in/">
                    <img src={image6} alt="" className="w-32 h-auto" />
                  </a>
                </div>
              </div>

              {/* Our Partners Section */}
              <div className="shadow-md p-6  rounded-lg bg-white">
                <h3 className="text-2xl font-bold mb-4">Knowledge Partners</h3>
                <div className="grid grid-cols-2  gap-3 ">
                  <a href="https://iimbg.ac.in/">
                    <img
                      src={image7}
                      alt=""
                      className="lg:w-48 md:w-32 h-auto"
                    />
                  </a>
                  <a href="https://www.iitb.ac.in/">
                    <img src={image8} alt="" className="w-24" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
