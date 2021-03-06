/* eslint-disable max-len */
export const appContent = {
  underwater: {
    title: () => "Hi! I'm Łukasz",
    startGame: () => 'Start the game',
    letsMeet: () => "Let's meet",
    clickDrop: () => 'Click the drop :)',
    game: {
      new: () => 'New game',
      over: () => 'Game over',
      pause: () => 'Pause',
      restart: () => 'Restart',
      start: () => 'Start',
      backToIntro: () => 'Back to intro',
      resume: () => 'Resume',
      score: (value: string) => `Your score: ${value}`,
      ranking: (value: string) => `Rank: ${value}/100`,
      tooWeak: () => 'Too weak :(',
      windowResized: {
        title: () => 'Window has been resized',
        descriptionGame: () =>
          'Your window has been resized. If you want to play, game has to be restarted.',
        descriptionLanding: () =>
          'Your window has been resized. Drops will be reset.',
      },
    },
  },
  surface: {
    sections: {
      stack: {
        title: () => 'Stack',
        commercialExp: () => 'Commercial',
        nonCommercialExp: () => 'Non-commercial',
        other: () => 'Other',
        tools: () => 'Tools',
        services: () => 'Services',
      },
      experience: {
        title: () => 'Experience',
        trainings: () => 'Trainings',
        other: () => 'Other',
      },
      about: {
        title: () => 'About',
        section1: () =>
          'Hi, Łukasz here. Just a few words about me. I am the fullstack web developer, project leader and team leader. Apart from my stack, I have experience in working as an expert for future clients, making recruitments, developing the frontend department and its processes.',
        section2: () =>
          'Privately, I am a husband and father of one. Me, my family and our dog love to travel by camper (especially to do windsurfing, wakeboarding or just go for a walk in the mountains). Music (listening to, but also creating with my wife) is also a huge part of my life.',
      },
      main: {
        title: () => 'Main',
      },
    },
  },
  shared: {
    ok: () => 'Ok',
    back: () => 'Back',
    loading: () => 'Loading',
    goDown: () => 'Go down',
    goUp: () => 'Go up',
    contact: () => 'Contact',
    privacyPolicy: () => 'Privacy policy',
    cancel: () => 'Cancel',
    emailLabel: () => 'Your e-mail',
    send: () => 'Send',
    content: () => 'Content',
    required: () => 'Required',
    invalidFormat: () => 'Invalid format',
    smthWrong: () => 'Something went wrong',
    emailSent: () => 'Email successfully sent',
  },
};

/* eslint-enable */
