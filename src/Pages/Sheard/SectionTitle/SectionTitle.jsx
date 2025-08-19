

const SectionTitle = ({heading, subHeading}) => {
      return (
            <div className="md:w-3/12 mb-24 mt-10 mx-auto text-xl">
                  <p className="text-amber-600 py-2 text-center">{subHeading}</p>
                  <hr className="" />
                  <h3 className="uppercase py-4 text-center border-y-4">{heading}</h3>
            </div>
      );
};

export default SectionTitle;