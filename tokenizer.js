class CustomTokenizer {
  constructor() {
    this.charToToken = { "<START>": 0, "<END>": 1 };
    this.tokenToChar = { 0: "<START>", 1: "<END>" };
  }

  buildVocab(text) {
    let uniqueChars = [...new Set(text.split(""))];
    let index = 2;
    for (let char of uniqueChars) {
      if (!this.charToToken[char]) {
        this.charToToken[char] = index;
        this.tokenToChar[index] = char;
        index++;
      }
    }
  }

  encode(text) {
    let tokens = [this.charToToken["<START>"]];
    tokens.push(
      ...text.split("").map(char => this.charToToken[char])
    );
    tokens.push(this.charToToken["<END>"]);
    return tokens;
  }

  decode(tokens) {
    let filtered = tokens.filter(
      t => t !== this.charToToken["<START>"] && t !== this.charToToken["<END>"]
    );
    return filtered.map(token => this.tokenToChar[token]).join("");
  }
}


let tokenizer = new CustomTokenizer();
let prompt = "The quick brown fox jumps over the lazy dog!";
tokenizer.buildVocab(prompt);

let encoded = tokenizer.encode(prompt);
console.log("Vocab:", JSON.stringify(tokenizer.charToToken));
console.log("Encoded:", encoded);
console.log("Decoded:", tokenizer.decode(encoded));
