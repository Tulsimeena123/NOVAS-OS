import { useEffect, useState } from "react";
import { Search } from "lucide-react";

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

  async function loadNotes(userId) {

    try {

      const response = await getNotes(userId);

      setNotes(response.rows);

    } catch (error) {

      console.log(error);

    }

  }
    async function handleCreateNote() {

    if (!title || !content) {

      alert("Please fill all fields");

      return;

    }

    try {

      setLoading(true);

      await createNote(
        title,
        content,
        user.$id
      );

      setTitle("");

      setContent("");

      await loadNotes(user.$id);

    } catch (error) {

      alert(error.message);

    } finally {

      setLoading(false);

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

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 px-8 py-10">

        <div className="mx-auto max-w-7xl">
                  <div className="mb-10 flex items-center justify-between">

            <div>

              <h1 className="text-5xl font-bold text-white">
                My Notes
              </h1>

              <p className="mt-2 text-slate-400">
                Organize everything in one place.
              </p>

            </div>

            <button
              onClick={handleCreateNote}
              disabled={loading}
              className="rounded-xl bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700 disabled:opacity-50"
            >
              {loading ? "Saving..." : "+ Save Note"}
            </button>

          </div>

          <div className="mb-8 grid gap-4">

            <input
              type="text"
              placeholder="Note Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-900 p-4 text-white outline-none focus:border-purple-500"
            />

            <textarea
              rows="5"
              placeholder="Write your note..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="rounded-xl border border-slate-700 bg-slate-900 p-4 text-white outline-none focus:border-purple-500"
            />

          </div>

          <div className="relative mb-10">

            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search Notes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 py-4 pl-12 pr-4 text-white outline-none focus:border-purple-500"
            />

          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                      {filteredNotes.length === 0 ? (

              <div className="col-span-full rounded-2xl border border-slate-700 bg-slate-900 p-10 text-center">

                <h2 className="text-2xl font-bold text-white">
                  No Notes Found 📄
                </h2>

                <p className="mt-2 text-slate-400">
                  Create your first note to get started.
                </p>

              </div>

            ) : (

              filteredNotes.map((note) => (

                <div
                  key={note.$id}
                  className="rounded-2xl border border-slate-700 bg-slate-900 p-6 transition hover:border-purple-500 hover:-translate-y-1"
                >

                  <h2 className="text-2xl font-bold text-white">
                    {note.title}
                  </h2>

                  <p className="mt-4 whitespace-pre-wrap text-slate-400">
                    {note.content}
                  </p>

                  <div className="mt-6 flex items-center justify-between">

                    <span className="text-sm text-slate-500">
                      {new Date(note.$createdAt).toLocaleDateString()}
                    </span>

                    <button
                      onClick={async () => {

                        await deleteNote(note.$id);

                        await loadNotes(user.$id);

                      }}
                      className="rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))

            )}

          </div>

        </div>

      </div>

    </>

  );

}

export default Notes;