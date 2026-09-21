# Billtee Attendance 2026-27 — My Plan & My Thoughts
### (My own explanation, in my own words — Vijay, owner)

This is my project. Below is why I made each part, what I can change, and how I prove it is my own effort.

---

## 1. Why I made this system

In my company (Billtee) we have 8 people and two offices — **Andheri** and **Ambadi**.
Register attendance on paper had these real problems that I saw with my own eyes:

1. **Anybody could mark anybody's attendance.** Once somebody marked *my* (Vijay's) attendance with a **female photo** from another place. That is cheating.
2. **Same person, two phones, same time.** I saw Vijay checked in at 11:37 from *Virar West* and again at 11:38 from another place with another face. Both cannot be true.
3. **I could not see who is present** unless I called every person.
4. **People lie about location** — they write "office" while sitting at home.
5. **Sunday and sick days** were creating confusion in salary counting.

So my plan was: *attendance must prove three things — WHO (face), WHERE (live GPS), and ONLY ONCE (one entry per person per day).*

---

## 2. My thinking behind every feature

| What the site does | MY reason (my thought) |
|---|---|
| 📸 **Face-capture attendance only** | A photo is proof of *who* stood there. I removed Manual & Fingerprint because they can be faked by another person. |
| 🔐 **Personal secret code** (Vijay 0000, Ajit 1111, Nikhat 9999…) | After the female-photo cheating I decided: to mark Vijay's attendance you must know Vijay's own code. Nobody else knows it → nobody else can use his name. |
| 📍 **Live GPS + area name** (e.g. "Outside – Virar West") | I never trust what a person types. The phone's GPS tells the truth. If he is inside office radius → "Office – Andheri/Ambadi", otherwise "Outside – <his real area>". |
| 🚫 **1 person = 1 attendance per day, on ALL phones** | Because I saw the 11:37 / 11:38 double entry. Now the second try shows red error "already enrolled today". |
| 🔒 **Admin PIN (only I know it)** | Wrong entries happen (someone cheated once). Only *I* can delete/fix a record, edit employees, change settings. Employees see a lock, not the PIN. |
| 🌐 **Live team list (all phones)** | I was refreshing 5 times and seeing nothing from other phones. Now every check-in appears on every phone's list automatically, with time + live location. |
| 🗓️ **Sunday = automatic holiday (H)** | In our company Sunday is off. The system marks it itself, so a person is never shown "absent" on Sunday. |
| 🏖️ **Leave with reason: 🤒 Sick / 📅 Planned / 🏖️ Casual** | A person gets fever or has a function at home. He taps one button with his code and the report writes **SL / PL / CL** itself — no calling me. |
| 🔁 **Rotation 3 days office / 3 days outside, teams A & B** | Our business rule: half the team in office, half outside, changing every 3 days. The site calculates today's duty automatically, but the *actual* GPS decides what is recorded. |
| 📊 **Reports: AND / AMB / OUT / SL / PL / CL / H + Excel CSV + backup** | For salary and management I need one-month proof in Excel, not paper. |
| 🌍 **Free hosting on my own GitHub Pages** | No server cost, works on any phone, link never dies. The GitHub account **vijaybhan-ba is MY account** — only I can change the site. |

---

## 3. What I can change any time (I am the admin)

With my Admin PIN I can change:
- Every employee's **secret code**, team (A/B) and main office (Andheri/Ambadi)
- The **Admin PIN** itself
- **Office GPS coordinates** and the **radius** (metres) that counts as "at office"
- **Rotation start date** (cycle)
- **Company name** and the live-sync topic
- **Delete** any wrong attendance/leave entry (✖) so the person can redo it

Employees can change **nothing** except their own check-in / leave with their own code.

---

## 4. Why this is MY effort — proof for anybody who asks

1. **The GitHub account is mine** (`github.com/vijaybhan-ba`). Only my login can push code. If I open my GitHub on my phone, my commits are there with dates.
2. **The history shows my real life, not a copied project.** The site changed step by step exactly when my real problems happened:
   - first simple attendance → then I saw the female-photo cheating → I added secret codes →
   - then I saw the double entry 11:37/11:38 → I added 1-person-1-entry →
   - then people asked for sick/planned/casual → I added SL/PL/CL.
   A copied project would not match *my* company's names, offices and incidents.
3. **I can change anything on the spot.** If someone doubts me, I open Admin, change a code or the radius live, and the site updates. A person who copied code cannot do that.
4. **All names are my team** — Ajit, Shyam, Nikhat, Nitish, Manish, Anshuman, Sarad, Vijay — and my offices Andheri & Ambadi. This data exists nowhere else.

---

## 5. If someone asks me, I answer like this

**Q: Did you copy this from somewhere?**
A: No. The account is mine, the history is mine, and every rule in it came from a real cheating/problem I saw in my own company. I can show the commit history and I can change any rule live in front of you.

**Q: How does attendance proof work?**
A: Three proofs in one tap — the camera shows WHO, the GPS shows WHERE, and the system allows only ONE entry per person per day on any phone.

**Q: What if the phone has no GPS or camera?**
A: Then attendance is not accepted as present — that is the point. Only live proof counts. Leave can still be taken with the secret code.

**Q: Where is the data?**
A: On each phone for reports + a live shared list for today + my Excel/backup downloads. No paid server; my GitHub Pages hosts the site free.

---

*Built for Billtee, year 2026-27. Owner & admin: Vijay.*
