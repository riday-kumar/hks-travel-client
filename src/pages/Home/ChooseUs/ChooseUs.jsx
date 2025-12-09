const facts = [
  { title: "Bus Operators", value: "100+" },
  { title: "District Covered", value: "60+" },
  { title: "Daily Tickets", value: "100K+" },
  { title: "Happy Customers", value: "6M+" },
];

const ChooseUs = () => {
  return (
    <div className="py-16">
      <h2 className="text-4xl font-bold text-center mb-10">Why Choose Us</h2>

      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-10">
        <div className="grid grid-cols-1 sm:grid-cols-4 text-center">
          {facts.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center relative"
            >
              {/* Title */}
              <p className="text-lg font-semibold text-gray-800">
                {item.title}
              </p>

              {/* Value */}
              <p className="text-3xl font-bold text-red-600 mt-2">
                {item.value}
              </p>

              {/* Divider – show except last item */}
              {index !== facts.length - 1 && (
                <span className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-px bg-gray-300"></span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
