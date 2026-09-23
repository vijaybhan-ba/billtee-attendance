# Billtee Attendance 2026-27

Python attendance system (Flask + OpenCV) for 8 employees with a
**3-days-in-office / 3-days-outside** rotation and **face-capture / fingerprint** check-in.
The company name is configurable in **Settings**, so the same project works for any company.

🔗 GitHub: https://github.com/vijaybhan-ba/billtee-attendance  ← *replace with your link (also editable in the app's Settings page)*

## Employees (year 2026-27)

| # | Name     | Team | Office location |
|---|----------|------|-----------------|
| 1 | Ajit     | A    | Andheri         |
| 2 | Shyam    | A    | Andheri         |
| 3 | Nikhat   | A    | Andheri         |
| 4 | Nitish   | A    | Andheri         |
| 5 | Manish   | B    | Ambadi          |
| 6 | Anshuman | B    | Ambadi          |
| 7 | Sarad    | B    | Ambadi          |
| 8 | Vijay    | B    | Ambadi          |

## How the rotation works

A 6-day cycle starts on the **cycle start date** (default `2026-04-01`, changeable in Settings):

* Days 1–3 → Team A in **office**, Team B **outside**
* Days 4–6 → Team B in **office**, Team A **outside**

Every check-in is automatically stamped *Office (Andheri/Ambadi)* or *Outside*
according to that employee's duty for the day. Team A's office is **Andheri**,
Team B's office is **Ambadi** — editable per employee on the Employees page. Teams can be re-assigned per employee on the
**Employees** page.

## Check-in methods

1. **Face capture** – browser webcam; OpenCV verifies a face is present and stores
   the photo as proof (`captures/`). Reference faces are enrolled on the Employees page (`faces/`).
2. **Fingerprint** – each employee has a fingerprint code (default `1001`–`1008`);
   this is the hook-up point for a real fingerprint scanner.
3. **Manual** – fallback when no device is available.

## Run it

```bash
pip install -r requirements.txt
python app.py            # http://localhost:5000
```

## Pages

* **Dashboard** – today's duty roster (Office/Outside) and who has checked in.
* **Check-In** – face capture / fingerprint / manual marking.
* **Employees** – teams, fingerprint codes, face enrollment.
* **Reports** – monthly grid (IN / OUT / absent) + **Excel (.xlsx) export**
  (1 month or **2 months**, one sheet per month) + **2-month backup** as JSON,
  with every backup kept on disk in `backups/` and re-downloadable from the page.
* **Settings** – your GitHub link and rotation start date.

## Push to your GitHub (new project)

1. On GitHub create a **new empty repository** (suggested: `billtee-attendance`,
   or for another company e.g. `smart-attendance-2026-27`, `hybrid-attendance-pro`).
2. Then:

```bash
git remote add origin https://github.com/vijaybhan-ba/billtee-attendance.git
git branch -M main
git push -u origin main
```


## Permanent public site (GitHub Pages) — everyone can use it

1. Create the repository `billtee-attendance` on GitHub.
2. Upload `index.html` (Add file → Upload files → drag it in → Commit).
3. Repository **Settings → Pages** → Source: *Deploy from a branch* → `main` / `/ (root)` → Save.
4. Your permanent site is live at `https://vijaybhan-ba.github.io/billtee-attendance/` —
   every employee opens the same link on their phone; each device keeps its own data.


## v2 features (live site)

* **Auto location with live photo** — check-in captures the live photo *and* the GPS
  position; inside the office radius it records **Office – Andheri/Ambadi**, otherwise
  **Outside – <area>** (e.g. "Outside – Virar") via OpenStreetMap reverse geocoding.
* **Sundays = automatic holiday** (H in reports, not counted absent).
* **🏖️ Leave** option for requested holidays (LV in reports).
* Office GPS coordinates + radius editable in **Settings** (paste exact coordinates
  from Google Maps for perfect detection).


## v4 security & sync (live site)

* **Personal secret codes** — every check-in (photo / fingerprint / manual / leave)
  needs the employee's own code (Vijay 0000, Ajit 1111, Shyam 2222, Nikhat 9999,
  Nitish 3333, Manish 4444, Anshuman 5555, Sarad 6666). Nobody can mark someone
  else's attendance.
* **Admin PIN (default 7777)** — 🔒 Admin button. Only admin can edit Employees /
  Settings and delete wrong records (✖ on today's list).
* **Live team feed** — Dashboard shows today's check-ins from ALL phones
  (sync via a private ntfy.sh topic, editable in Settings).


## v5 anti-fraud rules (live site)

* **Face-capture only** — Manual & Fingerprint removed.
* **1 person = 1 attendance/day, across ALL phones** — a second check-in for the
  same person (same or another phone) is refused with "already enrolled today".
  Only the admin's delete (✖) re-allows it.
* **PIN never displayed** — lock screens no longer print the admin PIN; employee
  secret codes are masked (👁 to reveal, admin only).
* Live team list now also appears on the Check-In screen and refreshes every 30 s.


## v6 leave types

Leave is a one-tap choice: 🤒 Sick (SL) · 📅 Planned (PL) · 🏖️ Casual (CL).
The chosen one-word code appears in records, the live feed, reports and CSV
automatically. Taking leave also locks that person's attendance for the day
(1 person = 1 entry/day).


## v7 shared monthly register + cancel planned leave

* Fixed live feed (ntfy `poll=1`) — phones now actually see each other instantly.
* **Shared register** `data/attendance.json` on the site: every phone loads the
  full month, so Reports show 30/31 days for everybody (present/leave/absent).
* The admin phone publishes the register automatically when a GitHub data token
  is pasted in Settings (fine-grained PAT, repo billtee-attendance,
  Contents read/write). Without it: Reports → 🔄 Sync + 📥 Import employee backup.
* **❌ Cancel Planned Leave**: employee with his code (or admin ✖) cancels a PL;
  the cancel propagates to every phone and the person can check in again.
* One person = one entry/day enforced against local + live feed + register.


## v8 fixes (23 Sep 2026)

* Andheri office GPS corrected to the real office (plus code 4V63+MRJ =
  19.1117, 72.8546), radius 300 m — being inside now reads "Office – Andheri".
* Planned leave has a **calendar**: pick any future date; shows in reports and in
  a "Planned leaves (today & future)" list with a Cancel button.
* Cancel planned leave works across phones (finds the leave in the live feed /
  register and cancels it for everyone).
* Live list can never hang ("Loading…" fixed with a 6 s timeout).
* Admin: ➕ Add employee (auto 4-digit code), 🧹 Close past & start fresh
  (downloads backup first). Present/absent changes remain admin-only; employees
  can only take/cancel their own planned leave with their code.


## v9 (23 Sep 2026)

* Ambadi office GPS fixed to Manjula Complex, Ambadi Naka, Wada–Bhiwandi Rd
  (19.4733, 73.0876). Both office coordinates auto-update on every phone.
* Dashboard: Team column removed; outside duty shows "Outside – Andheri/Ambadi".
* No ✖ next to photos; admin removes wrong entries via the
  "🗑 Remove today's entry" select under the entries table.


## v10

* The live feed now also fills the Dashboard status table and the Check-In
  entries list, so a person who checked in on another phone immediately shows
  PRESENT everywhere (and is saved locally for reports).
