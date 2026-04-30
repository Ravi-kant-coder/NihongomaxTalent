const Footer = () => {
  return (
    <>
      <section className="py-20 bg-gray-900 text-white text-center flex justify-between items-baseline px-50 ">
        <div className="flex flex-col items-baseline">
          <h2 className="text-xl font-semibold mb-6">Nihongomax Talent</h2>
          <div className="flex flex-col items-baseline gap-4">
            <button className=" cursor-pointer">Home</button>

            <button className=" cursor-pointer">About Us</button>

            <button className=" cursor-pointer">Contact Us</button>

            <button className=" cursor-pointer">FAQs</button>

            <button className=" cursor-pointer">Blogs</button>
          </div>
        </div>
        <div className="flex flex-col items-baseline">
          <h2 className="text-xl font-semibold mb-6">For Employers</h2>
          <div className="flex flex-col items-baseline gap-4">
            <button className=" cursor-pointer">Register</button>

            <button className=" cursor-pointer">Prices</button>

            <button className=" cursor-pointer">User Guide</button>
            <button className=" cursor-pointer">採用教育費</button>
          </div>
        </div>
        <div className="flex flex-col items-baseline">
          <h2 className="text-xl font-semibold mb-6">Legals</h2>
          <div className="flex flex-col items-baseline gap-4">
            <button className=" cursor-pointer">Terms of use</button>

            <button className=" cursor-pointer">Privacy Policy</button>
          </div>
        </div>
        <div className="flex flex-col items-baseline">
          <h2 className="text-xl font-semibold mb-6">Contact Us</h2>
          <div className="flex flex-col items-baseline gap-4">
            <button className="cursor-pointer">
              1-7-20 Global Hiring Dept.
            </button>

            <button className="cursor-pointer">Tokyo, Japan</button>

            <button className=" cursor-pointer">
              info@nihongomaxtalent.com
            </button>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center pb-10 bg-gray-900">
        <p className="text-gray-300">
          Copyright @ 2026 Owned and Operated by Nihongomax Talent Pvt. Ltd. All
          rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
