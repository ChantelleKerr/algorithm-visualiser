const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-primary font-extrabold text-4xl pt-20 text-center bg-red w-full">
        COMPUTER SCIENCE CONCEPTS
      </h1>
      <span className="flex justify-center font-extrabold text-xl text-center text-red w-full bg-primary">
        IN PROGRESS!
      </span>
      <p className="text-primary font-thin text-center w-2/3 mt-8">
        Dive into the world of Computer Science with interactive visualisations
        that bring classroom concepts to life. From sorting algorithms to binary
        trees, these tools make it easier to grasp and master even the most
        challenging ideas! Turning theory into clarity.
      </p>
    </div>
  );
};

export default Header;
