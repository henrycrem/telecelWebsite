import Image from "next/image";

const SecondSection = () => {
  return (
    React.createElement("div", null,
      React.createElement("section", { className: "flex flex-col py-20 items-center justify-center bg-[#28282B]" },
        React.createElement("div", { className: "text-center flex flex-col items-center justify-center pb-20" },
          React.createElement(Image, {
            src: "/images/logo/logo.svg",
            alt: "",
            width: 100,
            height: 100,
            className: "w-60 h-60 mx-auto"
          }),

          React.createElement("div", {
            className: "text-6xl flex justify-center md:text-6xl text-white md:px-20 pb-20 w-2/3"
          }, "Try the #1 software in project and product management"),

          React.createElement("div", { className: "text-xl bg-white p-6 rounded-lg w-40 items-center justify-center flex" }, "Get started")
        ),

        React.createElement("div", { className: "hidden md:flex pt-40 space-x-40 border-t" },
          React.createElement("div", null,
            React.createElement(Image, {
              src: "/images/logo/logo.svg",
              alt: "Picture of the author",
              width: 50,
              height: 50
            })
          ),

          React.createElement("div", { className: "flex-col space-y-6 flex" },
            React.createElement("div", { className: "text-xl text-gray-200 pb-10" }, "XYZ Dynamic"),

            React.createElement("div", { className: "text-gray-200" }, "Home"),
            React.createElement("div", { className: "text-gray-200" }, "Product"),
            React.createElement("div", { className: "text-gray-200" }, "What's New"),
            React.createElement("div", { className: "text-gray-200" }, "Pricing"),
            React.createElement("div", { className: "text-gray-200" }, "Premium")
          ),

          React.createElement("div", { className: "flex-col space-y-6 flex" },
            React.createElement("div", { className: "text-xl text-gray-200 pb-10" }, "About Us"),

            React.createElement("div", { className: "text-gray-200" }, "Company"),
            React.createElement("div", { className: "text-gray-200" }, "Leadership"),
            React.createElement("div", { className: "text-gray-200" }, "Customers"),

            React.createElement("div", { className: "text-gray-200" }, "Diversity")
          ),

          React.createElement("div", { className: "flex-col space-y-6 flex" },
            React.createElement("div", { className: "text-xl text-gray-200 pb-10" }, "Workflow Solutions"),

            React.createElement("div", { className: "text-gray-200" }, "Project Management"),
            React.createElement("div", { className: "text-gray-200" }, "Goal Management"),
            React.createElement("div", { className: "text-gray-200" }, "Increase Productivity"),
            React.createElement("div", { className: "text-gray-200" }, "Work Management"),
            React.createElement("div", { className: "text-gray-200" }, "Project Planning"),

            React.createElement("div", { className: "text-gray-200" }, "To Do Lists")
          ),

          React.createElement("div", { className: "flex-col space-y-6 flex" },
            React.createElement("div", { className: "text-xl text-gray-200 pb-10" }, "Resources"),

            React.createElement("div", { className: "text-gray-200" }, "Help Center"),
            React.createElement("div", { className: "text-gray-200" }, "Forum"),
            React.createElement("div", { className: "text-gray-200" }, "Support"),

            React.createElement("div", { className: "text-gray-200" }, "App Directory"),
            React.createElement("div", { className: "text-gray-200" }, "Developers & API")
          ),

          React.createElement("div", { className: "flex-col space-y-6 flex" },
            React.createElement("div", { className: "text-xl text-gray-200 pb-10" }, "Learn"),

            React.createElement("div", { className: "text-gray-200" }, "11 Leadership Styles"),

            React.createElement("div", { className: "text-gray-200" }, "What are OKRs?"),
            React.createElement("div", { className: "text-gray-200" }, "SMART GOALS")
          )
        )
      )
    )
  );
};

export default SecondSection;
