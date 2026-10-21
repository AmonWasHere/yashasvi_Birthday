/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT ME
 *  Change the name, the letter, the notes — this is your scrapbook.
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  /** Shown in big type in the hero, the letter, the footer and the tab title. */
  recipient: 'Yashasvi',
  /** A line that runs under the name. */
  relationship: 'my friend, my chosen family',
  year: '2026',
  issue: 'A birthday scrapbook',
};

export const letter = {
  greeting: 'Dear Yashasvi,',
  paragraphs: [
    'There is a particular kind of luck in finding someone who feels like a book you have read a hundred times and still dog-ear on purpose. You are that for me: the worn page, the margin note, the line I keep coming back to.',
    'So I made you a small corner of the internet. Part commonplace book, part cabinet of curiosities, entirely yours. There are poets here who say it better than I can, a fictional apothecary with a sharp tongue, two girls who share a name and a heartbeat, and a stage where nobody sings quietly.',
    'Happy birthday. May this year be gentle with you. May you be a little reckless with your joy. And may you always, always know where home is.',
  ],
  closing: 'I love you more than the last page of a good book.',
  signature: 'your friend',
  envelope: {
    to: ['the birthday girl', 'somewhere warm'],
    from: 'me, with cake',
    postmark: ['BIRTHDAY POST', '21 OCT', '2026'],
  },
};

export type Quote = {
  author: string;
  source: string;
  text: string;
  note: string;
  label: string;
  portrait: string;
  portraitAlt: string;
};

export const quotes: Quote[] = [
  {
    label: 'dog-eared, no. 01',
    text: 'I took a deep breath and listened to the old brag of my heart. I am, I am, I am.',
    author: 'Sylvia Plath',
    source: 'The Bell Jar',
    note: 'for every morning you have to remind yourself that you are still here — and still yours.',
    portrait: '/art/plath-book.webp',
    portraitAlt: 'A black-and-white portrait of Sylvia Plath.',
  },
  {
    label: 'dog-eared, no. 02',
    text: 'My courage always rises at every attempt to intimidate me.',
    author: 'Jane Austen',
    source: 'Pride and Prejudice',
    note: 'for every room that tries to make you smaller. It never works.',
    portrait: '/art/austen-book.webp',
    portraitAlt: 'A portrait of Jane Austen.',
  },
  {
    label: 'dog-eared, no. 03',
    text: 'The mystery of human existence lies not in just staying alive, but in finding something to live for.',
    author: 'Fyodor Dostoevsky',
    source: 'The Brothers Karamazov',
    note: 'you have always known how to make a life, not just a living.',
    portrait: '/art/dostoevsky-book.webp',
    portraitAlt: 'A portrait of Fyodor Dostoevsky by Vasily Perov.',
  },
];

export const apothecary = {
  kicker: '02 — the apothecary',
  reference: 'after The Apothecary Diaries',
  titleLead: 'Mao Mao’s',
  titleAccent: 'garden.',
  paragraphs: [
    'For the friend who can diagnose a bad day from a single text and prescribe tea, sunshine, or one very specific episode. The Apothecary Diaries taught us that the sharpest girl in the room is usually the one taking notes.',
    'Consider this your prescription for the year ahead: equal parts mischief and rest, a daily dose of curiosity, and someone who notices when the colour goes out of your face.',
  ],
  note: 'The poison is in the dose. The cure is in the noticing.',
  noteAttribution: '— the apothecary’s house rule',
  rx: {
    title: 'Rx',
    forLine: 'for: the birthday girl',
    body: 'One (1) year of soft mornings.',
    directions: 'Take with tea. Refills unlimited. No known side effects except occasionally bursting into song.',
    sig: '∞ refills',
  },
  bottles: [
    { label: 'joy', amount: '20 ml' },
    { label: 'nerve', amount: '10 ml' },
    { label: 'rest', amount: '∞' },
    { label: 'mischief', amount: 'as needed' },
  ],
  seal: '薬',
};

export const nana = {
  kicker: '03 — the zine',
  reference: 'after Nana · Ai Yazawa',
  title: 'NANA',
  sublineLead: 'two girls, same name,',
  sublineAccent: 'one ridiculous heart.',
  paragraphs: [
    'For the girl who is equal parts strawberry and safety pin. Nana taught us that growing up is messy, love is loud, and the right person will still pick you at the end of the show.',
    'Two girls, same name, one ridiculous heart. I would share a strawberry with you at 2 a.m. and call it a personality. I would follow you to Tokyo. I would even let you have the last fry.',
  ],
  rules: ['Text back.', 'Share the fries.', 'Never disappear.', 'If the world ends, bring snacks.'],
  ticket: {
    top: 'NANA — LIVE AT 707',
    line: 'ADMIT TWO',
    bottom: 'No encore. Only encores.',
  },
  setlist: {
    title: 'the 707 sessions',
    side: 'side A',
    tracks: ['Rose', 'Glamorous Sky', 'Kuroi Namida', 'Endless Story'],
  },
  strawberryNote: 'two strawberries, split down the middle',
  punkNote: 'PUNK IS A LOVE LANGUAGE',
  keyTag: '707',
};

export const stage = {
  kicker: '04 — the stage',
  reference: 'after Alien Stage',
  titleLead: 'Sing',
  titleAccent: 'anyway.',
  tagline: 'for every kid who kept singing in a room full of aliens',
  paragraphs: [
    'Alien Stage is about being watched and singing anyway. Whatever this year puts on your stage, I hope you keep choosing your own voice — even when it shakes.',
    'I’ll be in the front row with the worst sign you have ever seen. I’ll cheer so loud the aliens get nervous.',
  ],
  cta: 'cue the lights',
  ctaOn: 'lights down',
  litLine: 'the whole universe is watching. let it.',
  round: 'ROUND ∞',
  setlist: {
    title: 'tonight’s setlist',
    tracks: ['My Clematis', 'Cure', 'Ruler of My Heart', 'Black Sorrow', 'Encore: Happy Birthday'],
  },
  frontRow: 'front row, forever',
};

export const wish = {
  kicker: '05 — the wish',
  titleLead: 'Make a',
  titleAccent: 'wish.',
  intro: 'Light the candles. Take a breath. Ask for the outrageous thing.',
  blow: 'blow out the candles',
  relight: 'light them again',
  wished:
    'Wish received. The universe has been notified. (It’s a little scared of you.)',
  signoff:
    'Here’s to another year of you — the whole loud, tender, impossible thing.',
  signature: 'with all my love, your friend',
};
