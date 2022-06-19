export default {
  start: {
    background: '#76c758',
    text: 'Hercle, verpa placidus!, nuclear vexatum iacere!',
    actions: [
      {
        screen: 'end',
        text: 'Aonides, musa, et detrius.',
      },
      {
        scene: 'next',
        text: 'Fortis superbus scutum est.',
      }
    ],
  },
  next: {
    background: '#5c71c5',
    text: 'Hercle, verpa placidus!, nuclear vexatum iacere!',
    actions: [
      {
        scene: 'start',
        text: 'Cur orexis resistere?',
      },
      {
        screen: 'end',
        text: 'Sunt compateres locus gratis, bassus adelphises.',
      }
    ],
  },
};
