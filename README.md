# @untools/port-gen

Generate a random but consistent port number from a project name.

## 🚀 Features

- Generates the same port number for the same project name.
- Ensures ports fall within a valid range (defaults to `3000-9999`).
- Works as a **library** and **CLI tool**.
- Lightweight and dependency-free.

---

## 📦 Installation

### Install via npm

```sh
npm install @untools/port-gen
```

### Install globally (for CLI use)

```sh
npm install -g @untools/port-gen
```

## 🔧 Usage

### As a Library

```javascript
import { generatePortFromName } from "@untools/port-gen";

const port = generatePortFromName("my-awesome-project");
console.log(port); // Outputs a consistent port number
```

#### Custom Port Range

```javascript
const port = generatePortFromName("my-app", 4000, 5000);
console.log(port); // Port within 4000-5000
```

### As a CLI Tool

Once installed globally, run:

```sh
port-gen my-project
```

Example output:

```
Port for "my-project": 4821
```

## 🛠 API Reference

**generatePortFromName(name: string, minPort = 3000, maxPort = 9999): number**

- **name** (string) - Project name to generate a port from.
- **minPort** (number) - Minimum port (default: 3000).
- **maxPort** (number) - Maximum port (default: 9999).

Returns a **consistent** port number within the specified range.

## 📜 License

MIT © Miracle Onyenma
