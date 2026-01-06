import React from "react";

function ProfileCard({ image, name }) {
  return (
    <div className="w-64 bg-slate-800 rounded-xl shadow-lg border border-slate-700 overflow-hidden hover:scale-105 transition duration-300">
      <div className="flex justify-center pt-6">
        <img src={image} alt={name} className="w-28 h-28 rounded-full object-cover border-4 border-sky-400" />
      </div>
      <div className="py-6 text-center">
        <h3 className="text-lg font-semibold text-slate-100">{name}</h3>
      </div>
    </div>
  );
}

export default ProfileCard;
