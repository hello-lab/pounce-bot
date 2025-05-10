
# 📬 Discord Pounce  Bot

A simple Discord bot that relays direct messages from users to specified admin users when a round is active. It uses `discord.js` and `simple-json-db` for lightweight state storage.

---

## 📦 Features

* Relays DMs from users to two admin users when a "round" is started.
* Allows admin users to start/stop the message relay round via commands.
* Maintains a simple message log stored in a local JSON database.
* Ignores bot messages and messages containing a specific flag.

---

## 📜 Requirements

* Node.js `v18+`
* A Discord bot token

---

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/hello-lab/pounce-bot
   cd pounce-bot
   ```

2. **Install dependencies**

   ```bash
   npm install discord.js simple-json-db
   ```

3. **Set up your bot token**
   Replace the placeholder string in the code:

   ```javascript
   client.login("YOUR_BOT_TOKEN_HERE");
   ```

---

## 📖 Usage

### ✅ Commands (via any Discord server message)

* `start` — starts the message collection round.
* `stop` — stops the message collection round.
* `send` — sends the current log content to the admin.

> **Note:** Only allowed for users with these IDs:

* `658666010890600448`
* `634643358362370061`

---

### 📬 Direct Messages

When the round is active:

* Any DM sent to the bot (unless containing `--not-for-ai--`) will be forwarded to both admin users.
* The sender will receive a confirmation message.

If the round isn’t active:

* The sender will be informed that the round hasn't started yet.

---

## 📁 File Structure

```
.
├── storage.json        # Simple JSON DB for storing state
├── index.js            # Main bot script
└── README.md           # This file
```

---

## 🔒 Permissions

When adding your bot to a server, you’ll need to use a URL like:

```
https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=150528&scope=bot
```

---

## 📃 License

MIT License — free to use and modify.

---

## 📌 Notes

* Ensure your bot token is kept secure and **never pushed to public repositories**.
* Modify the allowed admin IDs in the code to suit your needs.

---

Want me to generate a `.gitignore` or sample `package.json` too? 👌
