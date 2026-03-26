# Inventory Tracer 📦🔍

A lightweight, purely client-side web application designed for rapid inventory tracking and asset management. It leverages device cameras to scan physical barcodes/QR codes, maps them to specific physical locations, and aggregates the data for easy export.

## 🚀 Key Features

- **Real-Time Camera Scanning:** Integrated with `html5-qrcode` to provide instant, browser-based QR and barcode scanning without requiring native app installation.
- **Offline-First Data Persistence:** Utilizes browser `localStorage` to securely save scanned inventory sessions, preventing data loss during accidental page reloads or network drops.
- **Client-Side CSV Export:** Programmatically aggregates the scanned MAC addresses/Serial numbers and their corresponding locations, exporting them directly to a `.csv` file for external database or spreadsheet integration.
- **Dynamic Theming:** Includes a custom UI engine supporting multiple themes (Light/Dark/Accessible) for various warehouse lighting conditions.

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Scanning Engine:** [html5-qrcode](https://github.com/mebjas/html5-qrcode)
- **Architecture:** Client-side only (No backend required)

## 📦 Usage

Since this is a purely client-side application, no server installation is required. 

1. Clone the repository:
   ```bash
   git clone [https://github.com/hasanaliduruk/inventory-tracer.git](https://github.com/hasanaliduruk/inventory-tracer.git)
   ```
2. Open `index.html` directly in any modern web browser.
3. Grant camera permissions when prompted.
4. Input the location tag, scan the hardware serial/MAC barcode, and click "Save & Next".
5. Click "Download CSV" to extract your session data.

## 🔒 Privacy & Data
All data processing and storage occur strictly on the client side. No inventory data is transmitted to or stored on any external servers.

---
*Developed by [Hasan Ali Duruk](https://github.com/hasanaliduruk).*
