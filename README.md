# Attendance 2026-27

Python attendance system (Flask + OpenCV) for 8 employees with a
**3-days-in-office / 3-days-outside** rotation and **face-capture / fingerprint** check-in.

🔗 GitHub: https://github.com/YOUR-USERNAME/attendance-2026-27  ← *replace with your link (also editable in the app's Settings page)*

## Employees (year 2026-27)

| # | Name     | Team |
|---|----------|------|
| 1 | Ajit     | A    |
| 2 | Shyam    | A    |
| 3 | Nikhat   | A    |
| 4 | Nitish   | A    |
| 5 | Manish   | B    |
| 6 | Anshuman | B    |
| 7 | Sarad    | B    |
| 8 | Vijay    | B    |

## How the rotation works

A 6-day cycle starts on the **cycle start date** (default `2026-04-01`, changeable in Settings):

* Days 1–3 → Team A in **office**, Team B **outside**
* Days 4–6 → Team B in **office**, Team A **outside**

Every check-in is automatically stamped *Office* or *Outside* according to that
employee's duty for the day. Teams can be re-assigned per employee on the
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
* **Reports** – monthly grid (IN / OUT / absent) + **Excel (.xlsx) export**.
* **Settings** – your GitHub link and rotation start date.

## Push to your GitHub (new project)

1. On GitHub create a **new empty repository** named `attendance-2026-27`.
2. Then:

```bash
git remote add origin https://github.com/YOUR-USERNAME/attendance-2026-27.git
git branch -M main
git push -u origin main
```
