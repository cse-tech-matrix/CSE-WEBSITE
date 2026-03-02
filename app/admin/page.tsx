"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Users,
  Plus,
  Trash2,
  Edit3,
  Save,
  X,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import PageTransition from "@/components/layout/PageTransition";
import GlassCard from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

interface EventItem {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string;
}

interface MemberItem {
  id: string;
  name: string;
  role: string;
  year: string;
}

const initialEvents: EventItem[] = [
  { id: "1", title: "SYNECTICS'25", date: "Mar 2025", description: "National Level Technical Symposium", category: "symposium" },
  { id: "2", title: "Investiture Ceremony", date: "Mar 2025", description: "New student leaders investiture", category: "ceremony" },
];

const initialMembers: MemberItem[] = [
  { id: "1", name: "Mr. G. Mohana Prasath", role: "Secretary", year: "IV Year" },
  { id: "2", name: "Mr. C. Udhay Karthik", role: "Treasurer", year: "IV Year" },
];

type Tab = "events" | "members";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<Tab>("events");
  const [events, setEvents] = useState<EventItem[]>(initialEvents);
  const [members, setMembers] = useState<MemberItem[]>(initialMembers);
  const [editing, setEditing] = useState<string | null>(null);
  const [showAdd, setShowAdd] = useState(false);

  // New event form
  const [newEvent, setNewEvent] = useState({ title: "", date: "", description: "", category: "symposium" });
  const [newMember, setNewMember] = useState({ name: "", role: "", year: "" });

  const addEvent = () => {
    if (!newEvent.title) return;
    setEvents([...events, { ...newEvent, id: Date.now().toString() }]);
    setNewEvent({ title: "", date: "", description: "", category: "symposium" });
    setShowAdd(false);
  };

  const addMember = () => {
    if (!newMember.name) return;
    setMembers([...members, { ...newMember, id: Date.now().toString() }]);
    setNewMember({ name: "", role: "", year: "" });
    setShowAdd(false);
  };

  const deleteEvent = (id: string) => setEvents(events.filter((e) => e.id !== id));
  const deleteMember = (id: string) => setMembers(members.filter((m) => m.id !== id));

  return (
    <>
      <Navbar />
      <PageTransition>
        <main className="relative z-10 pt-24 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent-purple shadow-lg shadow-primary/20">
                <LayoutDashboard className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-sm text-slate-400">
                  Manage events and team members
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-8">
              {[
                { key: "events" as Tab, icon: Calendar, label: "Events" },
                { key: "members" as Tab, icon: Users, label: "Members" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => { setActiveTab(tab.key); setShowAdd(false); }}
                  className={cn(
                    "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
                    activeTab === tab.key
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "glass text-slate-400 hover:text-white"
                  )}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}

              <button
                onClick={() => setShowAdd(!showAdd)}
                className="ml-auto flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-green-500/20 transition-shadow"
              >
                <Plus className="w-4 h-4" />
                Add New
              </button>
            </div>

            {/* Add Form */}
            <AnimatePresence>
              {showAdd && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-8 overflow-hidden"
                >
                  <div className="glass rounded-2xl p-6 border border-green-500/20">
                    <h3 className="text-lg font-bold text-white mb-4">
                      Add New {activeTab === "events" ? "Event" : "Member"}
                    </h3>

                    {activeTab === "events" ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          placeholder="Event Title"
                          value={newEvent.title}
                          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                          className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                        <input
                          placeholder="Date (e.g., Mar 2025)"
                          value={newEvent.date}
                          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                          className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                        <input
                          placeholder="Description"
                          value={newEvent.description}
                          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                          className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 md:col-span-2"
                        />
                        <select
                          value={newEvent.category}
                          onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
                          className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
                        >
                          <option value="symposium">Symposium</option>
                          <option value="celebration">Celebration</option>
                          <option value="ceremony">Ceremony</option>
                          <option value="workshop">Workshop</option>
                          <option value="competition">Competition</option>
                        </select>
                        <button
                          onClick={addEvent}
                          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium hover:shadow-lg transition-shadow"
                        >
                          <Save className="w-4 h-4" /> Save Event
                        </button>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input
                          placeholder="Full Name"
                          value={newMember.name}
                          onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                          className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                        <input
                          placeholder="Role"
                          value={newMember.role}
                          onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                          className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                        <input
                          placeholder="Year (e.g., III Year)"
                          value={newMember.year}
                          onChange={(e) => setNewMember({ ...newMember, year: e.target.value })}
                          className="px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                        <button
                          onClick={addMember}
                          className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium hover:shadow-lg transition-shadow md:col-start-3"
                        >
                          <Save className="w-4 h-4" /> Save Member
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Content */}
            <AnimatePresence mode="wait">
              {activeTab === "events" ? (
                <motion.div
                  key="events"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  {events.map((event, i) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="glass rounded-xl p-5 flex items-center justify-between gap-4 hover:border-primary/20 transition-colors group"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-white font-semibold truncate">
                            {event.title}
                          </h3>
                          <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-medium">
                            {event.category}
                          </span>
                        </div>
                        <p className="text-sm text-slate-400 truncate">
                          {event.date} &middot; {event.description}
                        </p>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <button
                          onClick={() => deleteEvent(event.id)}
                          className="p-2 rounded-lg hover:bg-red-500/10 text-slate-500 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                  {events.length === 0 && (
                    <div className="text-center py-16 text-slate-500">
                      No events yet. Click &quot;Add New&quot; to create one.
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="members"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  {members.map((member, i) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="glass rounded-xl p-5 flex items-center justify-between gap-4 hover:border-primary/20 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-semibold truncate">
                          {member.name}
                        </h3>
                        <p className="text-sm text-slate-400">
                          {member.role} &middot; {member.year}
                        </p>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <button
                          onClick={() => deleteMember(member.id)}
                          className="p-2 rounded-lg hover:bg-red-500/10 text-slate-500 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                  {members.length === 0 && (
                    <div className="text-center py-16 text-slate-500">
                      No members yet. Click &quot;Add New&quot; to add one.
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </PageTransition>
    </>
  );
}
