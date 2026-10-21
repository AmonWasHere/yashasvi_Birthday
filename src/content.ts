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
  reference: 'notes from the apothecary’s shelf',
  titleLead: 'Mao Mao’s',
  titleAccent: 'garden.',
  paragraphs: [
    'So here is your prescription for the year: equal parts mischief and rest, one daily dose of curiosity, and someone who notices when the colour goes out of your face. Refills unlimited. Side effects may include singing in the kitchen and an inconvenient amount of hope. May your cabinet always be stocked with people who know what you need before you do — and may you never be too stubborn to ask.',
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
  sublineLead: 'two girls, two names,',
  sublineAccent: 'one ridiculous heart.',
  paragraphs: [
    'Hey, birthday girl. I’m not going to get all sentimental about it, so here it is: you’re one of the few people I’d split a strawberry with at 2 a.m. and still want to talk to in the morning. You’re loud when you need to be, soft when you think no one’s looking, and you never make me explain myself. That’s rarer than a good punk show.',
    'Happy birthday. Wear the ridiculous thing. Sing too loud. Take the last fry — I’ll pretend I didn’t want it anyway. And when the year gets heavy, call me. I’ll bring the strawberries, sit on the floor, and stay until the room feels bigger. Two girls, two names, one ridiculous heart. Obviously, that’s us.',
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
    'Alien Stage can keep its judges, its scoreboard, and its hungry little audience. You were never singing for them. Whatever this year puts on your stage — a villain, a plot twist, a long silence — pick up the mic and sing anyway. Even when your voice shakes. Especially then.',
    'Round ∞. The stage is yours. I’ll be in the front row with the worst sign you have ever seen, cheering so loud the aliens get nervous. And if the lights go out before the last note, I’ll start the song for you. Happy birthday, Yashasvi. Sing anyway.',
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
