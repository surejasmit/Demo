import React from "react";

function ProfileCard({ image, name, role }) {
  return (
    <div className="
      w-72 bg-gradient-to-br from-slate-800 to-slate-900
      rounded-2xl border border-slate-700
      shadow-lg hover:shadow-xl
      transition-all duration-300 hover:-translate-y-1
    ">
      {/* Avatar */}
      <div className="flex justify-center -mt-12">
        <img
          src={image}
          alt={name}
          className="
            w-28 h-28 rounded-full object-cover
            border-4 border-sky-500 bg-slate-900
          "
        />
      </div>

      {/* Content */}
      <div className="pt-6 pb-6 text-center px-4">
        <h3 className="text-lg font-semibold text-white">
          {name}
        </h3>

        {role && (
          <p className="text-sm text-slate-400 mt-1">
            {role}
          </p>
        )}

        {/* Action */}
        <button
          className="
            mt-4 px-4 py-2 rounded-lg
            bg-sky-500 text-slate-900 font-medium
            hover:bg-sky-400 transition
          "
        >
          View Profile
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
