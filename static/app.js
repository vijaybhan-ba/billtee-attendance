/* Camera + fetch helpers shared by the check-in and enrollment pages. */
let _stream = null;

async function camStart(videoId) {
  const video = document.getElementById(videoId);
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    throw new Error("This browser has no camera access. Use fingerprint or manual check-in.");
  }
  _stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
  video.srcObject = _stream;
  await video.play();
}

function camStop() {
  if (_stream) { _stream.getTracks().forEach(t => t.stop()); _stream = null; }
}

function grabFrame(videoId) {
  const video = document.getElementById(videoId);
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth || 640;
  canvas.height = video.videoHeight || 480;
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/jpeg", 0.9);
}

async function postJSON(url, data) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

function showMsg(id, text, ok) {
  const el = document.getElementById(id);
  el.textContent = text;
  el.className = "msg " + (ok ? "ok" : "err");
}
