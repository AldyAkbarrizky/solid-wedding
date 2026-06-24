"use client";

import { useState } from "react";

type Attendance = "Hadir" | "Tidak Hadir";

interface Wish {
  id: number;
  name: string;
  attendance: Attendance;
  location: string;
  message: string;
}

const initialWishes: Wish[] = [
  {
    id: 1,
    name: "Andre Maulana",
    attendance: "Hadir",
    location: "Bandung",
    message:
      "Selamat ya Afdal dan Putri! Semoga menjadi keluarga yang harmonis selamanya. Sampai ketemu di hari H!",
  },
  {
    id: 2,
    name: "Reni",
    attendance: "Tidak Hadir",
    location: "Jakarta",
    message:
      "Happy Wedding Day Afdal temen smk kuuuuuiuu, semoga diberkati pernikahan kalian, maafkan gabisa dateng ❤️❤️❤️",
  },
  {
    id: 3,
    name: "Ziaaa",
    attendance: "Tidak Hadir",
    location: "Cimahi",
    message:
      "Afdalll barakallah selamatt yaaa sayanggggkuuu 😍 sakinah mawaddah warahmah aamiin.",
  },
  {
    id: 4,
    name: "Mpiww",
    attendance: "Hadir",
    location: "Bandung",
    message:
      "Selamat ya Afdal dan Putri! Semoga menjadi keluarga yang harmonis selamanya. Sampai ketemu di hari H!",
  },
];

function AttendanceBadge({ attendance }: { attendance: Attendance }) {
  const isPresent = attendance === "Hadir";

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 font-sans text-[12px] font-semibold leading-none ${
        isPresent
          ? "bg-[#D6F7E8] text-[#338762]"
          : "bg-[#E9E9E9] text-[#7A7776]"
      }`}
    >
      {attendance}
    </span>
  );
}

function LocationIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 14C8 14 12.5 9.9 12.5 5.9C12.5 3.42 10.49 1.5 8 1.5C5.51 1.5 3.5 3.42 3.5 5.9C3.5 9.9 8 14 8 14Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="8" cy="5.9" r="1.45" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function RSVPSection() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<Attendance>("Hadir");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<Wish[]>(initialWishes);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setWishes((current) => [
      {
        id: Date.now(),
        name: name.trim(),
        attendance,
        location: location.trim() || "Lokasi tidak dicantumkan",
        message: message.trim(),
      },
      ...current,
    ]);

    setName("");
    setAttendance("Hadir");
    setLocation("");
    setMessage("");
  };

  return (
    <section
      id="rsvp"
      className="bg-[#FBFBF9] px-6 py-12 font-sans text-[#5B5150] md:px-8 md:py-14 lg:flex lg:min-h-[100svh] lg:items-center lg:py-8"
    >
      <div className="mx-auto grid w-full max-w-[1310px] gap-10 lg:grid-cols-[0.95fr_1fr] lg:gap-[62px]">
        <form
          onSubmit={handleSubmit}
          className="self-start rounded-[22px] border border-[#E8C8C7] bg-[#FBFBF9] px-6 py-7 shadow-[0_18px_45px_rgba(74,14,14,0.04)] sm:px-8 md:px-9 md:py-8 xl:px-[42px] xl:py-9"
        >
          <p className="font-sans text-[16px] font-normal uppercase leading-[22px] tracking-[3px] text-[#A68E8C] md:text-[17px]">
            Wedding Wishes
          </p>

          <h2 className="mt-5 font-serif text-[34px] font-semibold leading-none tracking-normal text-[#4A0E0E] md:text-[42px]">
            Ucapan &amp; Doa
          </h2>

          <div className="mt-6 h-px w-[58px] bg-[#E8C8C7]" />

          <div className="mt-6 grid grid-cols-2 gap-4 md:gap-5">
            <label className="block">
              <span className="mb-2 block font-sans text-[12px] font-bold uppercase leading-[16px] tracking-[1px] text-[#565156]">
                Nama
              </span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Nama Kamu"
                className="h-[50px] w-full rounded-[12px] bg-[#F3F1F0] px-4 font-sans text-[15px] font-normal leading-[22px] text-[#4A0E0E] outline-none transition placeholder:text-[#C4C0C0] focus:ring-2 focus:ring-[#E8C8C7] md:h-[52px] md:px-5 md:text-[16px]"
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-sans text-[12px] font-bold uppercase leading-[16px] tracking-[1px] text-[#565156]">
                Kehadiran
              </span>
              <select
                value={attendance}
                onChange={(e) => setAttendance(e.target.value as Attendance)}
                className="h-[50px] w-full appearance-none rounded-[12px] bg-[#F3F1F0] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2714%27%20height%3D%278%27%20viewBox%3D%270%200%2014%208%27%20fill%3D%27none%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cpath%20d%3D%27M1%201L7%207L13%201%27%20stroke%3D%27%237A8191%27%20stroke-width%3D%272%27%20stroke-linecap%3D%27round%27%20stroke-linejoin%3D%27round%27/%3E%3C/svg%3E')] bg-[position:right_18px_center] bg-no-repeat px-4 pr-10 font-sans text-[15px] font-normal leading-[22px] text-[#6B6871] outline-none transition focus:ring-2 focus:ring-[#E8C8C7] md:h-[52px] md:bg-[position:right_22px_center] md:px-5 md:pr-12 md:text-[16px]"
              >
                <option>Hadir</option>
                <option>Tidak Hadir</option>
              </select>
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block font-sans text-[12px] font-bold uppercase leading-[16px] tracking-[1px] text-[#565156]">
              Lokasi
            </span>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Kota atau domisili"
              className="h-[50px] w-full rounded-[12px] bg-[#F3F1F0] px-5 font-sans text-[15px] font-normal leading-[22px] text-[#4A0E0E] outline-none transition placeholder:text-[#C4C0C0] focus:ring-2 focus:ring-[#E8C8C7] md:h-[52px] md:text-[16px]"
            />
          </label>

          <label className="mt-5 block">
            <span className="mb-2 block font-sans text-[12px] font-bold uppercase leading-[16px] tracking-[1px] text-[#565156]">
              Komentar atau Ucapan
            </span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Tulis ucapan atau doa untuk calon mempelai..."
              className="min-h-[92px] w-full resize-none rounded-[12px] bg-[#F3F1F0] px-5 py-3.5 font-sans text-[15px] font-normal leading-[24px] text-[#4A0E0E] outline-none transition placeholder:text-[#C4C0C0] focus:ring-2 focus:ring-[#E8C8C7] md:min-h-[96px] md:text-[16px]"
            />
          </label>

          <button
            type="submit"
            className="mt-6 h-[58px] w-full rounded-[12px] bg-[#5B0F0F] font-sans text-[15px] font-bold uppercase leading-[22px] tracking-[3px] text-white shadow-[0_14px_25px_rgba(91,15,15,0.22)] transition hover:bg-[#4A0E0E] active:translate-y-px md:text-[16px]"
          >
            Kirim Wish
          </button>
        </form>

        <div>
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-sans text-[18px] font-bold leading-[24px] text-[#565156]">
              List Ucapan
            </h3>
            <span className="rounded-full bg-[#F4EDE9] px-3 py-2 font-sans text-[12px] font-bold leading-none text-[#8D4327]">
              124 Kehadiran
            </span>
          </div>

          <div className="mt-5 grid gap-4">
            {wishes.slice(0, 4).map((wish) => (
              <article
                key={wish.id}
                className="rounded-[18px] bg-white px-5 py-4 shadow-[0_4px_18px_rgba(31,28,11,0.05)] md:px-6 md:py-[18px]"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="font-sans text-[16px] font-bold leading-[23px] text-[#4A0E0E]">
                    {wish.name}
                  </h4>
                  <AttendanceBadge attendance={wish.attendance} />
                </div>

                <p className="mt-1 flex items-center gap-1.5 font-sans text-[12px] font-medium leading-[18px] text-[#9B8E8A]">
                  <LocationIcon />
                  {wish.location}
                </p>

                <p className="mt-1.5 font-sans text-[15px] font-normal leading-[24px] text-[#6F6B75] md:text-[16px] md:leading-[25px]">
                  {wish.message}
                </p>
              </article>
            ))}
          </div>

          <nav
            aria-label="Navigasi halaman ucapan"
            className="mt-5 flex items-center justify-center gap-4 font-sans text-[15px] font-medium leading-[22px] text-[#5B0F0F] md:mt-6 md:gap-5 md:text-[16px] md:leading-[24px]"
          >
            <button type="button" className="inline-flex items-center gap-2">
              <span aria-hidden>‹</span>
              Previous
            </button>
            <button type="button">1</button>
            <button
              type="button"
              aria-current="page"
              className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-white shadow-[0_2px_10px_rgba(31,28,11,0.12)] md:h-10 md:w-10"
            >
              2
            </button>
            <button type="button">3</button>
            <span>...</span>
            <button type="button" className="inline-flex items-center gap-2">
              Next
              <span aria-hidden>›</span>
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}
