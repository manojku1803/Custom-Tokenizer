# 🔡 Custom Tokenizer

A simple **character-level tokenizer** built in JavaScript that converts text into token IDs and decodes them back into text.  
Includes special tokens as `<START>` and `<END>` for marking sequence boundaries.

---

## ✨ Features
- Encodes text into token IDs.
- Decodes token IDs back into text.
- Includes special tokens:
  - `<START>` → Marks the beginning of a sequence.
  - `<END>` → Marks the end of a sequence.

---

## 📂 How It Works
The tokenizer works at the **character level**:

1. **Vocabulary Building**  
   Scans the input text and assigns each unique character a unique integer ID.

2. **Encoding**  
   Converts the text into an array of token IDs (adds `<START>` at the beginning and `<END>` at the end).

3. **Decoding**  
   Converts token IDs back into a string (ignoring `<START>` and `<END>` tokens).

---

## 🚀 Installation & Run

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/manojku1803/Custom-Tokenizer.git
```

### 2️⃣ Navigate into the Folder
```bash
cd Custom-Tokenizer
```

### 3️⃣ Run the Script
```bash
node tokenizer.js
```
