import React from "react";
import ProfileCard from "./components/ProfileCard";

// User data
const users = [
  { id: 1, name: "Smit Sureja", image: "https://via.placeholder.com/300" },
  { id: 2, name: "John Doe", image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe" },
  { id: 3, name: "Jane Smith", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2" }
];

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      <header className="w-full bg-slate-800 px-6 py-4 flex justify-between items-center shadow-md">
        <div className="text-2xl font-bold text-sky-400">StoreSync</div>
        <div className="flex gap-4">
          <button className="px-4 py-2 rounded-md bg-sky-500 hover:bg-sky-400 text-slate-900 font-semibold">Login</button>
          <button className="px-4 py-2 rounded-md border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-slate-900 font-semibold">Signup</button>
        </div>
      </header>

      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Users</h1>
        <div className="flex flex-wrap justify-center gap-8">
          {users.map((user) => (
            <ProfileCard key={user.id} name={user.name} image={user.image} />
          ))}
        </div>
      </main>

      <footer className="w-full bg-slate-800 p-4 text-center text-slate-400">
        © 2026 StoreSync. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
