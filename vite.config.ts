import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

export default defineConfig({
  plugins: [
    monkey({
      entry: "src/index.ts",

      userscript: {
        name: "Weblio Mesugaki-ifyier",
        version: "1.0.0",
        description: "Weblio英和辞典の意味の読点をハートにするユーザースクリプト",
        match: ["https://ejje.weblio.jp/content/*", "https://thesaurus.weblio.jp/content/*"],
      },
    }),
  ],
});
