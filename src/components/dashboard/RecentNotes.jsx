import { useEffect, useState } from "react";

import { getNotes } from "../../appwrite/notes";

import { getCurrentUser } from "../../appwrite/auth";
function RecentNotes() {
  const [notes, setNotes] = useState([]);

useEffect(() => {

  async function loadNotes() {

    const user = await getCurrentUser();

    if (!user) return;

    const response = await getNotes(user.$id);

    setNotes(response.rows.slice(0, 3));

  }

  loadNotes();

}, []);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-4 text-2xl font-bold text-white">
        📝 Recent Notes
      </h2>

      <div className="space-y-3">
        
       {notes.length === 0 ? (

  <div className="rounded-lg bg-slate-800 p-4 text-slate-400">
    No Notes Yet
  </div>

) : (

  notes.map((note) => (

    <div
      key={note.$id}
      className="rounded-lg bg-slate-800 p-4 transition hover:bg-slate-700"
    >
      <h3 className="font-semibold text-white">
        {note.title}
      </h3>

      <p className="mt-1 text-sm text-slate-400 line-clamp-2">
        {note.content}
      </p>

    </div>

  ))

)} 
      </div>
    </div>
  );
}

export default RecentNotes;