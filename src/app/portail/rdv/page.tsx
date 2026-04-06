"use client";

import { useState } from "react";
import { CalendarCheck, Plus, Clock, MapPin, ChevronRight, X } from "lucide-react";

const rdvList = [
  {
    id: 1,
    date: "Jeu. 10 avr. 2025",
    time: "14h30",
    type: "Révision 10 000 km + pose pneus",
    garage: "Moto Service Paris – 12e",
    moto: "Yamaha MT-07",
    status: "confirmé",
    upcoming: true,
  },
];

const pastRdv = [
  {
    id: 2,
    date: "Mer. 12 fév. 2025",
    time: "10h00",
    type: "Révision 7 500 km",
    garage: "Moto Service Paris – 12e",
    moto: "Yamaha MT-07",
    status: "terminé",
    upcoming: false,
  },
  {
    id: 3,
    date: "Lun. 4 nov. 2024",
    time: "09h30",
    type: "Remplacement plaquettes de frein",
    garage: "Moto Service Paris – 12e",
    moto: "Yamaha MT-07",
    status: "terminé",
    upcoming: false,
  },
  {
    id: 4,
    date: "Mar. 3 sept. 2024",
    time: "14h00",
    type: "Diagnostic électronique",
    garage: "Moto Service Paris – 12e",
    moto: "Yamaha MT-07",
    status: "terminé",
    upcoming: false,
  },
];

const interventionTypes = [
  "Révision standard",
  "Révision complète",
  "Pose de pneus",
  "Remplacement de freins",
  "Diagnostic",
  "Vidange huile",
  "Autre",
];

const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00",
  "14:00", "14:30", "15:00", "15:30", "16:00",
];

export default function RdvPage() {
  const [showForm, setShowForm] = useState(false);
  const [selectedType, setSelectedType] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  return (
    <div className="p-6 lg:p-8 max-w-4xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Mes rendez-vous</h1>
          <p className="text-slate-500 mt-1">Gérez vos interventions passées et à venir.</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors"
        >
          <Plus className="w-4 h-4" />
          Nouveau RDV
        </button>
      </div>

      {/* Upcoming */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-3">
          À venir
        </h2>
        {rdvList.map((rdv) => (
          <div key={rdv.id} className="bg-white border border-orange-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CalendarCheck className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-slate-900">{rdv.date}</span>
                    <span className="text-slate-400">·</span>
                    <span className="font-semibold text-slate-700 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {rdv.time}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 font-medium mb-1">{rdv.type}</p>
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {rdv.garage}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">{rdv.moto}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span className="text-xs bg-green-100 text-green-700 font-semibold px-2.5 py-1 rounded-full">
                  Confirmé ✓
                </span>
                <button className="text-xs text-red-400 hover:text-red-600 transition-colors">
                  Annuler
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Past */}
      <div>
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-3">
          Historique des rendez-vous
        </h2>
        <div className="space-y-3">
          {pastRdv.map((rdv) => (
            <div key={rdv.id} className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-slate-300 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CalendarCheck className="w-5 h-5 text-slate-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="font-semibold text-slate-700 text-sm">{rdv.date}</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-sm text-slate-500">{rdv.time}</span>
                  </div>
                  <p className="text-sm text-slate-600">{rdv.type}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{rdv.moto}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs bg-slate-100 text-slate-500 font-medium px-2.5 py-1 rounded-full">
                    Terminé
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: nouveau RDV */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg">
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h2 className="font-bold text-slate-900 text-lg">Prendre un rendez-vous</h2>
              <button onClick={() => setShowForm(false)} className="p-1.5 text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              {/* Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Type d'intervention
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {interventionTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`py-2 px-3 rounded-xl text-sm font-medium border transition-colors text-left ${
                        selectedType === type
                          ? "bg-orange-50 border-orange-300 text-orange-700"
                          : "border-slate-200 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Date souhaitée
                </label>
                <input
                  type="date"
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              {/* Créneau */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Créneau disponible
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-2 rounded-xl text-xs font-semibold border transition-colors ${
                        selectedSlot === slot
                          ? "bg-slate-900 border-slate-900 text-white"
                          : "border-slate-200 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Note */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  Note (optionnel)
                </label>
                <textarea
                  placeholder="Précisez votre demande..."
                  rows={3}
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 resize-none"
                />
              </div>
            </div>

            <div className="p-6 pt-0 flex gap-3">
              <button
                onClick={() => setShowForm(false)}
                className="flex-1 border border-slate-200 text-slate-700 font-semibold py-3 rounded-xl text-sm hover:bg-slate-50 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-xl text-sm transition-colors"
              >
                Confirmer le RDV
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
