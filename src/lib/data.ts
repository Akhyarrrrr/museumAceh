export interface CollectionItem {
  slug: string;
  seed: string;
  title: string;
  cat: string;
  era: string;
  desc: string[];
}

export const collectionItems: CollectionItem[] = [
  {
    slug: "rencong",
    seed: "col-rencong",
    title: "Rencong",
    cat: "Artifacts",
    era: "Aceh Sultanate",
    desc: [
      "The rencong is the traditional Acehnese dagger, worn as part of everyday dress rather than as a weapon alone. Its gently curved blade and hilt of gold, ivory or horn embody the Acehnese principle that dignity and readiness walk together.",
      "To the people of Aceh the rencong is more than an object — it is a symbol of identity and resistance. During the Aceh War it became an emblem of the struggle, and it remains present in ceremonies of honor to this day.",
    ],
  },
  {
    slug: "hikayat-aceh-manuscript",
    seed: "col-naskah",
    title: "Hikayat Aceh Manuscript",
    cat: "Manuscripts",
    era: "17th century",
    desc: [
      "The Hikayat Aceh chronicles the rise of the Aceh Sultanate and the deeds of its rulers in courtly Malay prose. Manuscripts like this one were copied by hand and passed between scholars across the Islamic world.",
      "Our copy preserves the illumination traditions of the royal court and remains a primary source for historians studying statecraft, trade and literature of the era.",
    ],
  },
  {
    slug: "dirham-dirang",
    seed: "col-koin",
    title: "Dirham Dirang",
    cat: "Numismatics",
    era: "1514–1528",
    desc: [
      "These small gold and tin coins were minted under Sultan Ali Mughayat Syah, founder of the Aceh Sultanate. Inscribed in Arabic script, the dirham dirang circulated through the busy ports of the Malacca Strait.",
      "Each coin is evidence that early modern Aceh ran its own monetary economy at the crossroads of Asian and Middle Eastern trade.",
    ],
  },
  {
    slug: "pinto-khoe",
    seed: "col-pintu",
    title: "Pinto Khoe Gate",
    cat: "Heritage",
    era: "19th century",
    desc: [
      "The Pinto Khoe gate once marked the entrance to the residence of a noble family in Banda Aceh. Its carved motifs blend Acehnese, Chinese and Islamic influences — a quiet record of the coast's cosmopolitan past.",
      "Recovered and conserved by the museum, the gate now stands as an introduction to the craft vocabulary used throughout the region's historic houses.",
    ],
  },
  {
    slug: "portrait-cut-nyak-dhien",
    seed: "col-lukisan",
    title: "Portrait of Cut Nyak Dhien",
    cat: "Fine Arts",
    era: "1945",
    desc: [
      "Cut Nyak Dhien led guerrilla resistance against Dutch forces after her husband Teuku Umar fell in battle. Exiled to Sumedang after her capture, she never returned to Aceh.",
      "Painted in the revolutionary period, this portrait honors her as National Heroine and mother of the nation's longest war of resistance.",
    ],
  },
  {
    slug: "ceremonial-headdress",
    seed: "col-topi",
    title: "Ceremonial Headdress",
    cat: "Artifacts",
    era: "18th century",
    desc: [
      "Worn by nobility during weddings and court ceremonies, ceremonial headdresses combined imported textiles with locally worked gold thread.",
      "The piece displays the meukeutop tradition of Acehnese dress, where headwear signals rank, region and occasion at a glance.",
    ],
  },
];

export interface Article {
  slug: string;
  seed: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  body: string[];
}

export const articles: Article[] = [
  {
    slug: "restoring-the-cakra-donya-bell",
    seed: "news-restorasi",
    category: "Conservation",
    title: "Restoring the Cakra Donya Bell",
    excerpt:
      "A behind-the-scenes look at the months-long conservation process of Aceh's most famous artifact.",
    date: "Aug 18, 2026",
    body: [
      "Said to be a gift from Admiral Zheng He to the Sultan of Pasai in the fifteenth century, the Cakra Donya bell has hung at the heart of Acehnese memory for six hundred years. When corrosion began threatening its engraved inscriptions, our conservation team knew the work could not wait.",
      "Over nine months, specialists removed corrosive deposits layer by layer, stabilized the bronze surface and documented every mark on the bell's surface in high resolution. The inscriptions — including what may be the oldest written record connected to the archipelago's maritime history — are now legible again.",
      "The bell returned to public display this month. Visitors can see it in the Main Pavilion, alongside the full documentation of the restoration process.",
    ],
  },
  {
    slug: "new-digital-archive-goes-live",
    seed: "news-arsip",
    category: "Archive",
    title: "New Digital Archive Goes Live",
    excerpt:
      "Thousands of photographs and documents are now searchable online.",
    date: "Aug 09, 2026",
    body: [
      "After two years of scanning and cataloguing, the museum's colonial-era photograph collection and administrative documents are now available through a public online archive.",
      "The first release covers more than twelve thousand items: studio portraits from the 1910s, plantation records, postcards of Banda Aceh's old waterfront and family albums donated by residents.",
      "Researchers anywhere in the world can now browse the collection freely. A second release covering audio recordings of oral histories is planned for next year.",
    ],
  },
  {
    slug: "record-school-visits-this-semester",
    seed: "news-kunjungan",
    category: "Community",
    title: "Record School Visits This Semester",
    excerpt:
      "Over five thousand students joined guided history programs in six months.",
    date: "Jul 28, 2026",
    body: [
      "This semester marked the busiest education season in the museum's recent history: more than five thousand students from sixty schools across Aceh joined guided programs.",
      "The programs combine gallery tours with hands-on workshops — batik stamping, calligraphy and mini-excavations in the museum garden — designed together with local teachers.",
      "School bookings for the coming semester open next month. Priority goes to schools from districts affected by the 2004 tsunami, as part of our education access commitment.",
    ],
  },
  {
    slug: "remembering-2004-new-oral-history-project",
    seed: "news-tsunami",
    category: "Archive",
    title: "Remembering 2004: New Oral History Project",
    excerpt:
      "Collecting survivor testimonies before they fade from living memory.",
    date: "Jul 15, 2026",
    body: [
      "Two decades after the Indian Ocean tsunami, the museum has begun recording long-form interviews with survivors, volunteers and aid workers who lived through December 26, 2004.",
      "The project aims to document not only loss but recovery — how families rebuilt, how neighborhoods organized, and how a generation remembers.",
      "Recordings will be preserved in the archive and excerpts will appear in the permanent exhibition's memorial room. Participation remains open; contact our collections team to take part.",
    ],
  },
  {
    slug: "gallery-4-reopens-after-renovation",
    seed: "news-renovasi",
    category: "Press",
    title: "Gallery 4 Reopens After Renovation",
    excerpt: "The maritime wing returns with double the exhibition space.",
    date: "Jun 30, 2026",
    body: [
      "Gallery 4, home of the maritime trade collection, reopened this month after eight months of renovation. The wing now occupies twice its previous floor area.",
      "New displays follow a cargo route through the Malacca Strait: Ming ceramics recovered from shipwrecks, navigation instruments and the famous Cakra Donya inscription rubbings.",
      "Interactive screens let visitors trace historical shipping lanes and inspect artifacts up close through macro photography.",
    ],
  },
  {
    slug: "museum-aceh-wins-national-heritage-award",
    seed: "news-penghargaan",
    category: "Press",
    title: "Museum Aceh Wins National Heritage Award",
    excerpt: "Recognized for community engagement and digital innovation.",
    date: "Jun 12, 2026",
    body: [
      "The Directorate General of Culture awarded Museum Aceh the National Heritage Award in the community engagement category, citing its oral history program and free digital archive.",
      "The jury highlighted the museum's work with tsunami survivor communities and school partnerships reaching remote districts.",
      "We share this recognition with the volunteers, teachers and families who built these programs with us over the past decade.",
    ],
  },
];
