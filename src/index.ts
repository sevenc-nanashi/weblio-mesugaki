import { main as ejjeMain } from "./ejje.ts";
import { main as thesaurusMain } from "./thesaurus.ts";

if (location.hostname.startsWith("ejje.")) {
  ejjeMain();
} else if (location.hostname.startsWith("thesaurus.")) {
  thesaurusMain();
}
