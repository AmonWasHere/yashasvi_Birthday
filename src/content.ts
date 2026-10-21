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
    'Things haven’t been good to you lately. Yes, I know. Some days have been heavy, some just felt off, and you’ve had to carry a lot of it quietly.',
    'But I know you well enough to know that you’ll get through this — and you’ll probably make something out of it, too. Not because you have to be resilient all the time, but because that’s how you roll: you take all those fragmented parts and mould them into something whole and entirely yours.',
    'So here’s your birthday wish. I hope this year brings a little more gentleness into your life. I hope it lets you step away from the hectic pace of things and indulge in what you need, without any obligations attached. You can want whatever you want. I hope this birthday reminds you of that — and brings some fun along with it.',
  ],
  closing: 'With warmest regards,',
  signature: 'Amon',
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
  ],
  stageLine: 'The stage is yours.',
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
  signature: 'Yours sincerely, Amon',
};
