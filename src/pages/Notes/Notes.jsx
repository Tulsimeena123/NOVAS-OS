import { useEffect, useState } from "react";
import { Search, Plus, Trash2, FileText, Loader2 } from "lucide-react";

import Navbar from "../../components/layout/Navbar";

import {
  createNote,
  getNotes,
  deleteNote,
} from "../../appwrite/notes";

import { getCurrentUser } from "../../appwrite/auth";

function Notes() {
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  async function loadNotes(userId) {
    try {
      const response = await getNotes(userId);
      setNotes(response.rows || []);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCreateNote() {
    if (!title.trim() || !content.trim()) {
      alert("Please fill in both title and content");
      return;
    }

    try {
      setLoading(true);
      await createNote(title.trim(), content.trim(), user.$id);
      setTitle("");
      setContent("");
      await loadNotes(user.$id);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleDeleteNote(id) {
    try {
      setDeletingId(id);
      await deleteNote(id);
      await loadNotes(user.$id);
    } catch (error) {
      alert(error.message);
    } finally {
      setDeletingId(null);
    }
  }

  useEffect(() => {
    async function fetchUser() {
      const currentUser = await getCurrentUser();
      if (currentUser) {
        setUser(currentUser);
        await loadNotes(currentUser.$id);
      }
    }
    fetchUser();
  }, []);

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white flex items-center gap-3">
              <FileText className="w-8 h-8 text-purple-500" /> My Notes
            </h1>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              Organize your thoughts, ideas, and tasks all in one place.
            </p>
          </div>

          <button
            onClick={handleCreateNote}
            disabled={loading}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-medium text-white shadow-lg shadow-purple-600/20 transition hover:bg-purple-500 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Saving...</span>
              </>
            ) : (
              <>
                <Plus className="w-5 h-5" />
                <span>Save Note</span>
              </>
            )}
          </button>
        </div>

        {/* Note Editor Box */}
        <div className="mb-10 rounded-2xl border border-slate-800 bg-slate-900/80 backdrop-blur-sm p-6 sm:p-8 shadow-xl">
          <h2 className="text-lg font-semibold text-slate-200 mb-4">Create New Note</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Note Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3.5 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            />

            <textarea
              rows="5"
              placeholder="Write your note here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3.5 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 resize-y"
            />
          </div>
        </div>

        {/* Search Bar & Counter */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search notes by title or content..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-900/80 pl-11 pr-4 py-3 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
            />
          </div>
          <div className="text-sm text-slate-400 font-medium">
            Total Notes: <span className="text-purple-400 font-semibold">{filteredNotes.length}</span>
          </div>
        </div>

        {/* Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.length === 0 ? (
            <div className="col-span-full rounded-2xl border border-dashed border-slate-800 bg-slate-900/40 p-12 text-center flex flex-col items-center justify-center min-h-[220px]">
              <FileText className="w-12 h-12 text-slate-600 mb-3" />
              <h2 className="text-xl font-semibold text-slate-300">
                {search ? "No matching notes found" : "No notes yet"}
              </h2>
              <p className="mt-1 text-sm text-slate-500 max-w-xs">
                {search
                  ? "Try searching for a different keyword or clear your filter."
                  : "Type a title and content above to create your first note."}
              </p>
            </div>
          ) : (
            filteredNotes.map((note) => (
              <div
                key={note.$id}
                className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-200 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/5"
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-100 line-clamp-2 leading-snug">
                    {note.title}
                  </h3>

                  <p className="mt-3 text-slate-300 text-sm whitespace-pre-wrap leading-relaxed line-clamp-6">
                    {note.content}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">
                    {new Date(note.$createdAt).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>

                  <button
                    onClick={() => handleDeleteNote(note.$id)}
                    disabled={deletingId === note.$id}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-400 hover:bg-red-500/20 hover:text-red-300 transition active:scale-95 cursor-pointer disabled:opacity-50"
                  >
                    {deletingId === note.$id ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Trash2 className="w-3.5 h-3.5" />
                    )}
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default Notes;