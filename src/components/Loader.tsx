const SkeletonLoader = () => {
  return (
    <div className="animate-pulse space-y-4">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="bg-gray-400 rounded-lg h-16 w-full mb-4"
        ></div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
