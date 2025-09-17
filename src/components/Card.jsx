import React from "react";

const Card = ({name, price}) => {
  return (
    <>
      <div className="group bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2">
        <div
          className="w-full h-56 bg-center bg-cover"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOUL3ShV-3f5eNA6UHJFE2OSFyRJ3kvq7IzozdyV0jCmXyj9oxzVWf-z3rfIcymeuYEfyXUeByTsVsN9_LI-5s0g16LbJeJGKgqYg9Pf_iGdQcugGRLX-DK_cUJYdiai4RQNXtsgFZX2CtXlrlSdLo4otupMKGm39FcFrYb3n1ozdqQVijIaMPXO7F7YeqHC3q6_1jc3lNlOqcQOzdBarjk2oVHsHqh3c_6ITYfU_aRNQfMj3bn58FKEkaww1EHe934rIrYgvqtAUv")',
          }}
        ></div>
        <div className="p-4 space-y-2">
          <h3 className="text-gray-800 text-lg font-semibold truncate group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-lg font-bold text-gray-900">{price}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
