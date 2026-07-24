# SB — asynchronousBallMovement

A minimal real-time multiplayer demo built with **p5.js** / **p5.play** and a **Firebase
Realtime Database**. A single red ball's position (`x`, `y`) lives in Firebase under
`ball/position`. Pressing an arrow key **writes** a new position to the database; a Firebase
listener **reads** that value back and moves the ball. Because every client both writes and
reads the same node, the ball's movement is mirrored across all connected clients in real
time.

## How it works

- **Write** — arrow-key input calls `writePosition()`, which `set()`s new `x`/`y` on
  `ball/position`.
- **Read** — the `ballPosition.on("value", ...)` listener updates the local sprite whenever
  the database value changes (including changes made by other clients).

## Libraries

- [p5.js](https://p5js.org/) — canvas and input
- [p5.play](https://molleindustria.github.io/p5.play/) — the ball sprite (`p5.play.js` bundled)
- [Firebase](https://firebase.google.com/) (App + Realtime Database) — position sync

## Controls

- **Left Arrow** — move the ball left
- **Right Arrow** — move the ball right
- **Up Arrow** — move the ball up
- **Down Arrow** — move the ball down

## How to run

This demo needs a **Firebase Realtime Database of your own** — the committed config only
contains placeholders.

1. Create a project at <https://console.firebase.google.com> and enable **Realtime Database**.
2. Open `index.html` and replace the placeholders in `firebaseConfig`
   (`YOUR_FIREBASE_API_KEY`, `https://YOUR_PROJECT.firebaseio.com`, etc.) with your own
   project's values.
3. Serve the folder over a local web server (e.g. `python3 -m http.server`) and open it in
   two or more browser tabs/devices — move the ball in one and watch it move in the others.

## Security

The original Firebase credentials were removed and replaced with placeholders. Please read
[SECURITY-NOTE.md](SECURITY-NOTE.md) before running — and remember to lock down your
Realtime Database security rules.
