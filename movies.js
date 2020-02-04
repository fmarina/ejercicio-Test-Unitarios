var movies = [
  {
    img: "https://image.tmdb.org/t/p/w185/t66eAg7xBLGoSSoA8JtJtX3NKs1.jpg ",
    rating: "8.6",
    title: "Victoria",
    year: "2015",
    tags: [
      {
        name: "Crime"
      },
      {
        name: "Drama"
      },
      {
        name: "Thriller"
      }
    ],
    description:
      "Victoria, a young Spanish woman, dances through the Berlin scene with abandon. She meets four mates outside a club who introduce themselves as Sonne, Boxer, Blinker and Fu\u00c3\u009f. They quickly get chatting. Sonne and\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg ",
    rating: "8.4",
    title: "Whiplash",
    year: "2014",
    tags: [
      {
        name: "Music"
      },
      {
        name: "Drama"
      }
    ],
    description:
      "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg ",
    rating: "8.3",
    title: "Interstellar",
    year: "2014",
    tags: [
      {
        name: "Drama"
      },
      {
        name: "Science Fiction"
      }
    ],
    description:
      "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/3TpMBcAYH4cxCw5WoRacWodMTCG.jpg ",
    rating: "8.2",
    title: "Paperman",
    year: "2012",
    tags: [
      {
        name: "Animation"
      },
      {
        name: "Romance"
      },
      {
        name: "Family"
      }
    ],
    description:
      "An urban office worker finds that paper airplanes are instrumental in meeting a girl in ways he never expected."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/A2rxR8g3y6kcjIoR2fcwtq9eppc.jpg ",
    rating: "8.2",
    title: "Presto",
    year: "2008",
    tags: [
      {
        name: "Animation"
      },
      {
        name: "Family"
      }
    ],
    description:
      "Dignity. Poise. Mystery. We expect nothing less from the great turn-of-the-century magician, Presto. But when Presto neglects to feed his rabbit one too many times, the magician finds he isn't the only one with\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg ",
    rating: "8.2",
    title: "The Shawshank Redemption",
    year: "1994",
    tags: [
      {
        name: "Crime"
      },
      {
        name: "Drama"
      }
    ],
    description:
      "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/d4KNaTrltq6bpkFS01pYtyXa09m.jpg ",
    rating: "8.1",
    title: "The Godfather",
    year: "1972",
    tags: [
      {
        name: "Crime"
      },
      {
        name: "Drama"
      }
    ],
    description:
      "The story spans the years from 1945 to 1955 and chronicles the fictional Italian-American Corleone crime family. When organized crime family patriarch Vito Corleone barely survives an attempt on his life, his youngest\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/qJ9ouIj4wN24asvKTUSAcJnSfrT.jpg ",
    rating: "8.1",
    title: "Feast",
    year: "2014",
    tags: [
      {
        name: "Romance"
      },
      {
        name: "Comedy"
      },
      {
        name: "Animation"
      },
      {
        name: "Drama"
      },
      {
        name: "Family"
      }
    ],
    description:
      "This Oscar-winning animated short film tells the story of one man's love life is seen through the eyes of his best friend and dog, Winston, and revealed bite by bite through the meals they share."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg ",
    rating: "8.1",
    title: "Guardians of the Galaxy",
    year: "2014",
    tags: [
      {
        name: "Adventure"
      },
      {
        name: "Fantasy"
      },
      {
        name: "Science Fiction"
      }
    ],
    description:
      "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/4mFsNQwbD0F237Tx7gAPotd0nbJ.jpg ",
    rating: "8.1",
    title: "The Intouchables",
    year: "2011",
    tags: [
      {
        name: "Comedy"
      },
      {
        name: "Drama"
      }
    ],
    description:
      "A true story of two men who should never have met - a quadriplegic aristocrat who was injured in a paragliding accident and a young man from the projects."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/aAmfIX3TT40zUHGcCKrlOZRKC7u.jpg ",
    rating: "8.1",
    title: "Inside Out",
    year: "2015",
    tags: [
      {
        name: "Animation"
      },
      {
        name: "Comedy"
      },
      {
        name: "Family"
      }
    ],
    description:
      "Growing up can be a bumpy road, and it's no exception for Riley, who is uprooted from her Midwest life when her father starts a new job in San Francisco. Like all of us, Riley is guided by her emotions - Joy, Fear\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg ",
    rating: "8.1",
    title: "Spirited Away",
    year: "2001",
    tags: [
      {
        name: "Fantasy"
      },
      {
        name: "Adventure"
      },
      {
        name: "Animation"
      },
      {
        name: "Family"
      }
    ],
    description:
      "Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/qcL1YfkCxfhsdO6sDDJ0PpzMF9n.jpg ",
    rating: "8.1",
    title: "12 Angry Men",
    year: "1957",
    tags: [
      {
        name: "Drama"
      }
    ],
    description:
      "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/uvNv23Arf2ZYtimiStSB2c1DAEX.jpg ",
    rating: "8.0",
    title: "Song of the Sea",
    year: "2014",
    tags: [
      {
        name: "Animation"
      },
      {
        name: "Family"
      },
      {
        name: "Fantasy"
      }
    ],
    description:
      "The story of the last Seal Child\u00e2\u0080\u0099s journey home. After their mother\u00e2\u0080\u0099s disappearance, Ben and Saoirse are sent to live with Granny in the city. When they resolve to return to their home by the sea, their journey\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/f7DImXDebOs148U4uPjI61iDvaK.jpg ",
    rating: "8.0",
    title: "Life Is Beautiful",
    year: "1997",
    tags: [
      {
        name: "Comedy"
      },
      {
        name: "Drama"
      }
    ],
    description:
      "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/noUp0XOqIcmgefRnRZa1nhtRvWO.jpg ",
    rating: "8.0",
    title: "The Imitation Game",
    year: "2014",
    tags: [
      {
        name: "Drama"
      },
      {
        name: "History"
      },
      {
        name: "Thriller"
      },
      {
        name: "War"
      }
    ],
    description:
      "Based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against time by Turing and his brilliant team of code-breakers at Britain's top-secret Government Code and\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/xorl6YfchMckGye7K4DM80VXDQQ.jpg ",
    rating: "8.0",
    title: "Witness for the Prosecution",
    year: "1957",
    tags: [
      {
        name: "Crime"
      },
      {
        name: "Drama"
      },
      {
        name: "Mystery"
      }
    ],
    description:
      "When Leonard Vole is arrested for the sensational murder of a rich, middle-aged widow, the famous Sir Wilfrid Robarts agrees to appear on his behalf. Sir Wilfrid, recovering from a near-fatal heart attack, is *supposed\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/tHbMIIF51rguMNSastqoQwR0sBs.jpg ",
    rating: "8.0",
    title: "The Godfather: Part II",
    year: "1974",
    tags: [
      {
        name: "Crime"
      },
      {
        name: "Drama"
      }
    ],
    description:
      "The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/lQy2QVcacuH55k37K9Ox0gw3YpZ.jpg ",
    rating: "8.0",
    title: "Doctor Who: The Day of the Doctor",
    year: "2013",
    tags: [
      {
        name: "Science Fiction"
      },
      {
        name: "Adventure"
      }
    ],
    description:
      "In 2013, something terrible is awakening in London's National Gallery; in 1562, a murderous plot is afoot in Elizabethan England; and somewhere in space an ancient battle reaches its devastating conclusion. All\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/gdiLTof3rbPDAmPaCf4g6op46bj.jpg ",
    rating: "8.0",
    title: "Gone Girl",
    year: "2014",
    tags: [
      {
        name: "Mystery"
      },
      {
        name: "Thriller"
      },
      {
        name: "Drama"
      }
    ],
    description:
      "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/fhr4sGNA69XaoaqymNaUFHolIPI.jpg ",
    rating: "8.0",
    title: "The Kid",
    year: "1921",
    tags: [
      {
        name: "Comedy"
      },
      {
        name: "Drama"
      }
    ],
    description:
      "Considered one of Charlie Chaplin's best films, The Kid also made a star of little Jackie Coogan, who plays a boy cared for by The Tramp when he's abandoned by his mother, Edna. Later, Edna has a change of heart\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/5hqbJSmtAimbaP3XcYshCixuUtk.jpg ",
    rating: "8.0",
    title: "Seven Samurai",
    year: "1954",
    tags: [
      {
        name: "Action"
      },
      {
        name: "Drama"
      }
    ],
    description:
      "A veteran samurai, who has fallen on hard times, answers a village's request for protection from bandits. He gathers 6 other samurai to help him, and they teach the townspeople how to defend themselves, and they\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/gzlJkVfWV5VEG5xK25cvFGJgkDz.jpg ",
    rating: "8.0",
    title: "Princess Mononoke",
    year: "1997",
    tags: [
      {
        name: "Adventure"
      },
      {
        name: "Fantasy"
      },
      {
        name: "Animation"
      }
    ],
    description:
      "Ashitaka, a prince of the disappearing Ainu tribe, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/rDMxjCYEVnvLC4nsBpB6wjL0LDy.jpg ",
    rating: "8.0",
    title: "Wolf Children",
    year: "2012",
    tags: [
      {
        name: "Animation"
      },
      {
        name: "Drama"
      },
      {
        name: "Fantasy"
      },
      {
        name: "Family"
      }
    ],
    description:
      "Hana, a nineteen-year-old college student, falls in love with a man only for him to reveal his secret; he is a Wolf Man. Eventually the couple bear two children together; a son and daughter they name Ame and Yuki\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/oFwzvRgfxJc0FUr2mwYTi10dk3G.jpg ",
    rating: "8.0",
    title: "Sunset Boulevard",
    year: "1950",
    tags: [
      {
        name: "Drama"
      },
      {
        name: "Romance"
      }
    ],
    description:
      "A hack screenwriter writes a screenplay for a former silent-film star who has faded into Hollywood obscurity."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/yRXTVpDRBA3983C3HjoY0SO4dV6.jpg ",
    rating: "8.0",
    title: "Band of Brothers",
    year: "2001",
    tags: [
      {
        name: "Action"
      },
      {
        name: "Drama"
      },
      {
        name: "War"
      }
    ],
    description:
      "Drawn from interviews with survivors of Easy Company, as well as their journals and letters, Band of Brothers chronicles the experiences of these men from paratrooper training in Georgia through the end of the war.\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/bwVhmPpydv8P7mWfrmL3XVw0MV5.jpg ",
    rating: "8.0",
    title: "Grave of the Fireflies",
    year: "1988",
    tags: [
      {
        name: "Animation"
      },
      {
        name: "Drama"
      },
      {
        name: "Family"
      },
      {
        name: "War"
      }
    ],
    description:
      "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/X7S1RtotXOZNV7OlgCfh5VKZSB.jpg ",
    rating: "8.0",
    title: "Straight Outta Compton",
    year: "2015",
    tags: [
      {
        name: "Drama"
      },
      {
        name: "Music"
      }
    ],
    description:
      "In 1987, five young men, using brutally honest rhymes and hardcore beats, put their frustration and anger about life in the most dangerous place in America into the most powerful weapon they had: their music. Taking\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/5M5bg79OV96Vb4O0fDjX5clxASG.jpg ",
    rating: "8.0",
    title: "Partly Cloudy",
    year: "2009",
    tags: [
      {
        name: "Animation"
      },
      {
        name: "Adventure"
      },
      {
        name: "Comedy"
      },
      {
        name: "Family"
      },
      {
        name: "Fantasy"
      }
    ],
    description:
      "Everyone knows that the stork delivers babies, but where do the storks get the babies from? The answer lies up in the stratosphere, where cloud people sculpt babies from clouds and bring them to life. Gus, a lonely\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/sc6XLX6J714LDkVV3Ys3clgypQS.jpg ",
    rating: "8.0",
    title: "The Fault in Our Stars",
    year: "2014",
    tags: [
      {
        name: "Romance"
      },
      {
        name: "Drama"
      }
    ],
    description:
      "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a patient named Augustus Waters suddenly\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/h64Zd7aWWGL1ctsU3W4i2rQOwTk.jpg ",
    rating: "8.0",
    title: "Vincent",
    year: "1982",
    tags: [
      {
        name: "Animation"
      },
      {
        name: "Drama"
      },
      {
        name: "Fantasy"
      }
    ],
    description:
      "Young Vincent Malloy dreams of being just like Vincent Price and loses himself in macabre daydreams which annoys his mother."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/m4ZCx2Iwr418IGPxRfoKnpumz9X.jpg ",
    rating: "7.9",
    title: "Modern Times",
    year: "1936",
    tags: [
      {
        name: "Drama"
      },
      {
        name: "Comedy"
      }
    ],
    description:
      "The Tramp struggles to live in modern industrial society with the help of a young homeless woman."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg ",
    rating: "7.9",
    title: "The Dark Knight",
    year: "2008",
    tags: [
      {
        name: "Action"
      },
      {
        name: "Crime"
      },
      {
        name: "Drama"
      },
      {
        name: "Thriller"
      }
    ],
    description:
      "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/oAPCsQiWV6YUd0Gt62BOwb8aSth.jpg ",
    rating: "7.9",
    title: "The Way He Looks",
    year: "2014",
    tags: [
      {
        name: "Drama"
      },
      {
        name: "Romance"
      }
    ],
    description:
      "Leonardo is a blind teenager searching for independence. His everyday life, the relationship with his best friend, Giovana, and the way he sees the world change completely with the arrival of Gabriel."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/oJWzpGCLIj3uYa0ux19T2WwzTOf.jpg ",
    rating: "7.9",
    title: "Kung Fury",
    year: "2015",
    tags: [
      {
        name: "Action"
      },
      {
        name: "Comedy"
      },
      {
        name: "Fantasy"
      },
      {
        name: "Science Fiction"
      }
    ],
    description:
      "During an unfortunate series of events, a friend of Kung Fury is assassinated by the most dangerous kung fu master criminal of all time, Adolf Hitler, a.k.a Kung F\u00c3\u00bchrer. Kung Fury decides to travel back in time\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/rbx0k8IYSrBx9YhG7q3ZbVprAEx.jpg ",
    rating: "7.9",
    title: "City Lights",
    year: "1931",
    tags: [
      {
        name: "Comedy"
      },
      {
        name: "Drama"
      },
      {
        name: "Romance"
      }
    ],
    description:
      "City Lights is the first silent film that Charlie Chaplin directed after he established himself with sound accompanied films. The film is about a penniless man who falls in love with a flower girl. The film was\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/rclZsJn4lfWY8AchAcanz63LWpd.jpg ",
    rating: "7.9",
    title: "On the Waterfront",
    year: "1954",
    tags: [
      {
        name: "Crime"
      },
      {
        name: "Drama"
      }
    ],
    description:
      "Terry Malloy dreams about being a prize fighter, while tending his pigeons and running errands at the docks for Johnny Friendly, the corrupt boss of the dockers union. Terry witnesses a murder by two of Johnny's\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/iMarB2ior30OAXjPa7QIdeyUfM1.jpg ",
    rating: "7.9",
    title: "Howl's Moving Castle",
    year: "2004",
    tags: [
      {
        name: "Fantasy"
      },
      {
        name: "Animation"
      },
      {
        name: "Adventure"
      }
    ],
    description:
      "When Sophie, a shy young woman, is cursed with an old body by a spiteful witch, her only chance of breaking the spell lies with a self-indulgent yet insecure young wizard and his companions in his legged, walking\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/l43KgZb2ICqLcYE5YDgwLWxlzIx.jpg ",
    rating: "7.9",
    title: "Fear City: A Family-Style Comedy",
    year: "1994",
    tags: [
      {
        name: "Comedy"
      }
    ],
    description:
      "A second-class horror movie has to be shown at Cannes Film Festival, but, before each screening, the projectionist is killed by a mysterious fellow, with hammer and sickle, just as it happens in the film to be shown."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/wAgdJRx4uZ0u4uzu34NOMvtjLAR.jpg ",
    rating: "7.9",
    title: "The Wolf of Wall Street",
    year: "2013",
    tags: [
      {
        name: "Crime"
      },
      {
        name: "Drama"
      },
      {
        name: "Comedy"
      }
    ],
    description:
      "A New York stockbroker refuses to cooperate in a large securities fraud case involving corruption on Wall Street, corporate banking world and mob infiltration. Based on Jordan Belfort's autobiography."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/nX5XotM9yprCKarRH4fzOq1VM1J.jpg ",
    rating: "7.9",
    title: "The Grand Budapest Hotel",
    year: "2014",
    tags: [
      {
        name: "Comedy"
      },
      {
        name: "Drama"
      }
    ],
    description:
      "The Grand Budapest Hotel tells of a legendary concierge at a famous European hotel between the wars and his friendship with a young employee who becomes his trusted prot\u00c3\u00a9g\u00c3\u00a9. The story involves the theft and recovery\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/ws3M1O9YM8pyGkTbpQjxOxjae1K.jpg ",
    rating: "7.9",
    title: "A Chinese Odyssey Part One: Pandora's Box",
    year: "1994",
    tags: [
      {
        name: "Fantasy"
      },
      {
        name: "Adventure"
      }
    ],
    description:
      "Fantasy adventure about the arrival of Buddhism in China. When the Goddess of Happiness tosses the Longevity Monk and his disciples out of heaven (because the Monkey King tried to attain immortality), the Monkey\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/811DjJTon9gD6hZ8nCjSitaIXFQ.jpg ",
    rating: "7.9",
    title: "Fight Club",
    year: "1999",
    tags: [
      {
        name: "Drama"
      }
    ],
    description:
      'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until\u2026'
  },
  {
    img: "https://image.tmdb.org/t/p/w185/sEUG3qjxwHjxkzuO7plrRHhOZUH.jpg ",
    rating: "7.9",
    title: "Incendies",
    year: "2010",
    tags: [
      {
        name: "Drama"
      },
      {
        name: "War"
      },
      {
        name: "Mystery"
      }
    ],
    description:
      "A mother's last wishes send twins Jeanne and Simon on a journey to Middle East in search of their tangled roots. Adapted from Wajdi Mouawad's acclaimed play, Incendies tells the powerful and moving tale of two young\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/yPisjyLweCl1tbgwgtzBCNCBle.jpg ",
    rating: "7.9",
    title: "Schindler's List",
    year: "1993",
    tags: [
      {
        name: "Drama"
      },
      {
        name: "History"
      },
      {
        name: "War"
      }
    ],
    description:
      "Told from the perspective of businessman Oskar Schindler who saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory. Schindler\u00e2\u0080\u0099s List is based on a true story, illustrated in\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/z4ROnCrL77ZMzT0MsNXY5j25wS2.jpg ",
    rating: "7.9",
    title: "Forrest Gump",
    year: "1994",
    tags: [
      {
        name: "Comedy"
      },
      {
        name: "Drama"
      },
      {
        name: "Romance"
      }
    ],
    description:
      "A man with a low IQ has accomplished great things in his life and been present during significant historic events - in each case, far exceeding what anyone imagined he could do. Yet, despite all the things he has\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/dM2w364MScsjFf8pfMbaWUcWrR.jpg ",
    rating: "7.9",
    title: "Pulp Fiction",
    year: "1994",
    tags: [
      {
        name: "Thriller"
      },
      {
        name: "Crime"
      }
    ],
    description:
      "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/py4pMp6QlKUjjzCk8icZ2GrYw3Z.jpg ",
    rating: "7.9",
    title: "La luna",
    year: "2011",
    tags: [
      {
        name: "Animation"
      },
      {
        name: "Comedy"
      },
      {
        name: "Family"
      },
      {
        name: "Fantasy"
      }
    ],
    description:
      "A young boy comes of age in the most peculiar of circumstances. Tonight is the very first time his Papa and Grandpa are taking him to work. In an old wooden boat they row far out to sea, and with no land in sight\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/gUex3Twn97Jp8F27Op1r7OnMTFt.jpg ",
    rating: "7.9",
    title: "The Fall",
    year: "2006",
    tags: [
      {
        name: "Adventure"
      },
      {
        name: "Fantasy"
      },
      {
        name: "Drama"
      }
    ],
    description:
      "In a hospital on the outskirts of 1920s Los Angeles, an injured stuntman begins to tell a fellow patient, a little girl with a broken arm, a fantastic story about 5 mythical heroes. Thanks to his fractured state\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/fsoTLnUXEUTNuVCBxAJMY0HPPd.jpg ",
    rating: "7.9",
    title: "Her",
    year: "2013",
    tags: [
      {
        name: "Drama"
      },
      {
        name: "Science Fiction"
      },
      {
        name: "Romance"
      }
    ],
    description:
      "In the not so distant future, Theodore, a lonely writer purchases a newly developed operating system designed to meet the user's every needs. To Theordore's surprise, a romantic relationship develops between him\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/ckDwlkT8V71rQxqmxFgzS91rjlR.jpg ",
    rating: "7.9",
    title: "Goodfellas",
    year: "1990",
    tags: [
      {
        name: "Drama"
      },
      {
        name: "Crime"
      }
    ],
    description:
      "Henry Hill is a small time gangster, who takes part in a robbery with Jimmy Conway and Tommy De Vito, two other gangsters who have set their sights a bit higher. His two partners kill off everyone else involved\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/xV7FKNqOwnO3aJSiRM8WCrwdRS8.jpg ",
    rating: "7.9",
    title: "The Pacific",
    year: "2010",
    tags: [
      {
        name: "War"
      },
      {
        name: "Drama"
      },
      {
        name: "Action"
      },
      {
        name: "Adventure"
      },
      {
        name: "History"
      }
    ],
    description:
      'A 10-part mini-series from the creators of "Band of Brothers" telling the intertwined stories of three Marines during America\'s battle with the Japanese in the Pacific during World War II.'
  },
  {
    img: "https://image.tmdb.org/t/p/w185/tpoaLlY0ZdVGDLToVwkGdWxLHRe.jpg ",
    rating: "7.9",
    title: "Mommy",
    year: "2014",
    tags: [
      {
        name: "Drama"
      }
    ],
    description:
      "A peculiar neighbor offers hope to a recent widow who is struggling to raise a teenager who is unpredictable and, sometimes, violent."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/1yqWnnRtbixqolHARRH4KymNBhj.jpg ",
    rating: "7.9",
    title: "Geri's Game",
    year: "1997",
    tags: [
      {
        name: "Animation"
      },
      {
        name: "Family"
      }
    ],
    description:
      "An aging codger named Geri plays a daylong game of chess in the park against himself. Somehow, he begins losing to his livelier opponent. But just when the game's nearly over, Geri manages to turn the tables."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/lRjOR4uclMQijUav4OjeZprlehu.jpg ",
    rating: "7.9",
    title: "How to Train Your Dragon 2",
    year: "2014",
    tags: [
      {
        name: "Fantasy"
      },
      {
        name: "Action"
      },
      {
        name: "Adventure"
      },
      {
        name: "Animation"
      },
      {
        name: "Comedy"
      },
      {
        name: "Family"
      }
    ],
    description:
      "The thrilling second chapter of the epic How To Train Your Dragon trilogy brings back the fantastical world of Hiccup and Toothless five years later. While Astrid, Snotlout and the rest of the gang are challenging\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/2i0OOjvi7CqNQA6ZtYJtL65P9oZ.jpg ",
    rating: "7.9",
    title: "My Neighbor Totoro",
    year: "1988",
    tags: [
      {
        name: "Fantasy"
      },
      {
        name: "Animation"
      },
      {
        name: "Family"
      }
    ],
    description:
      "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/tdvyi9asDeOF65MwTqNNMoAhqP4.jpg ",
    rating: "7.9",
    title: "BURN\u00e2\u0080\u00a2E",
    year: "2008",
    tags: [
      {
        name: "Animation"
      },
      {
        name: "Family"
      }
    ],
    description:
      "What lengths will a robot undergo to do his job? BURN\u00e2\u0080\u00a2E is a dedicated hard working robot who finds himself locked out of his ship. BURN\u00e2\u0080\u00a2E quickly learns that completing a simple task can often be a very difficult\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/3zQvuSAUdC3mrx9vnSEpkFX0968.jpg ",
    rating: "7.9",
    title: "Big Hero 6",
    year: "2014",
    tags: [
      {
        name: "Adventure"
      },
      {
        name: "Family"
      },
      {
        name: "Animation"
      },
      {
        name: "Action"
      },
      {
        name: "Comedy"
      }
    ],
    description:
      "The special bond that develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/kb3X943WMIJYVg4SOAyK0pmWL5D.jpg ",
    rating: "7.9",
    title: "12 Years a Slave",
    year: "2013",
    tags: [
      {
        name: "Drama"
      },
      {
        name: "History"
      }
    ],
    description:
      "In the pre-Civil War United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery. Facing cruelty as well as unexpected kindnesses Solomon struggles not only to stay\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/fIf4nLpWHK8BsbH76fPgMbLSjuU.jpg ",
    rating: "4.9",
    title: "The Normal Heart",
    year: "2014",
    tags: [
      {
        name: "Drama"
      }
    ],
    description:
      "The story of the onset of the HIV-AIDS crisis in New York City in the early 1980s, taking an unflinching look at the nation's sexual politics as gay activists and their allies in the medical community fight to expose\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/3yJUlOtVa09CYJocwBU8eAryja0.jpg ",
    rating: "4.9",
    title: "The Green Mile",
    year: "1999",
    tags: [
      {
        name: "Fantasy"
      },
      {
        name: "Drama"
      },
      {
        name: "Crime"
      }
    ],
    description:
      "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cellblock's head guard, Paul Edgecomb, recognizes Coffey\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/6u1fYtxG5eqjhtCPDx04pJphQRW.jpg ",
    rating: "4.9",
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: "1980",
    tags: [
      {
        name: "Adventure"
      },
      {
        name: "Action"
      },
      {
        name: "Science Fiction"
      }
    ],
    description:
      "The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/fYzpM9GmpBlIC893fNjoWCwE24H.jpg ",
    rating: "4.9",
    title: "Star Wars: Episode VII - The Force Awakens",
    year: "2015",
    tags: [
      {
        name: "Action"
      },
      {
        name: "Adventure"
      },
      {
        name: "Science Fiction"
      },
      {
        name: "Fantasy"
      }
    ],
    description:
      "A continuation of the saga created by George Lucas, set thirty years after Star Wars: Episode VI \u00e2\u0080\u0093 Return of the Jedi."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/oN0Ry08rfTOniGkyTc2XjUm2Cnl.jpg ",
    rating: "4.9",
    title: "The Blue Umbrella",
    year: "2013",
    tags: [
      {
        name: "Animation"
      },
      {
        name: "Romance"
      }
    ],
    description:
      "It is just another evening commute until the rain starts to fall, and the city comes alive to the sound of dripping rain pipes, whistling awnings and gurgling gutters."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/z9hLdjaqQBADwBj90pULE9zgh3t.jpg ",
    rating: "4.9",
    title: "Rashomon",
    year: "1950",
    tags: [
      {
        name: "Crime"
      },
      {
        name: "Drama"
      },
      {
        name: "Mystery"
      }
    ],
    description:
      "In ancient Japan a crime take place as told from three different travelers who have experienced the crime: a man being killed and his wife being raped. Which if any of the stories is true? A Akira Kurosawa film\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/2Sns5oMb356JNdBHgBETjIpRYy9.jpg ",
    rating: "4.9",
    title: "One Flew Over the Cuckoo's Nest",
    year: "1975",
    tags: [
      {
        name: "Drama"
      }
    ],
    description:
      "While serving time for insanity at a state mental hospital, implacable rabble-rouser Randle Patrick McMurphy inspires his fellow patients to rebel against the authoritarian rule of head nurse Mildred Ratched."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/z2mUzEqDi7DtA1E4mYzVjbzXnqE.jpg ",
    rating: "4.8",
    title: "The Secret in Their Eyes",
    year: "2009",
    tags: [
      {
        name: "Crime"
      },
      {
        name: "Drama"
      },
      {
        name: "Mystery"
      },
      {
        name: "Romance"
      }
    ],
    description:
      "A retired legal counselor writes a novel hoping to find closure for one of his past unresolved homicide cases and for his unreciprocated love with his superior - both of which still haunt him decades later."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/fXepRAYOx1qC3wju7XdDGx60775.jpg ",
    rating: "4.8",
    title: "American History X",
    year: "1998",
    tags: [
      {
        name: "Drama"
      }
    ],
    description:
      "Derek Vineyard is paroled after serving 3 years in prison for killing two thugs who tried to break into/steal his truck. Through his brother, Danny Vineyard's narration, we learn that before going to prison, Derek\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/4jspr8hLLuju59bCnMiefzRW4p0.jpg ",
    rating: "4.8",
    title: "The Theory of Everything",
    year: "2014",
    tags: [
      {
        name: "Drama"
      },
      {
        name: "Romance"
      }
    ],
    description:
      "A look at the relationship between the famous physicist Stephen Hawking and his wife."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/jgJoRWltoS17nD5MAQ1yK2Ztefw.jpg ",
    rating: "4.8",
    title: "The Usual Suspects",
    year: "1995",
    tags: [
      {
        name: "Drama"
      },
      {
        name: "Crime"
      },
      {
        name: "Thriller"
      }
    ],
    description:
      "Following a truck hijack in New York, five conmen are arrested and brought together for questioning. As none of them is guilty, they plan a revenge operation against the police. The operation goes well, but then\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/y2rl0OkMfZHpBaQYPfSJmLMOxwp.jpg ",
    rating: "4.8",
    title: "Nausica\u00c3\u00a4 of the Valley of the Wind",
    year: "1984",
    tags: [
      {
        name: "Adventure"
      },
      {
        name: "Fantasy"
      },
      {
        name: "Animation"
      },
      {
        name: "Action"
      },
      {
        name: "Science Fiction"
      }
    ],
    description:
      "Nausica\u00c3\u00a4, a gentle young princess, has an empathetic bond with the giant mutated insects that evolved in the wake of the destruction of the ecosystem. Traveling by cumbersome flying ship, on the backs of giant birds\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/gE8S02QUOhVnAmYu4tcrBlMTujz.jpg ",
    rating: "4.8",
    title: "Leon: The Professional",
    year: "1994",
    tags: [
      {
        name: "Crime"
      },
      {
        name: "Drama"
      },
      {
        name: "Thriller"
      }
    ],
    description:
      'Leon, the top hit man in New York, has earned a rep as an effective "cleaner". But when his next-door neighbors are wiped out by a loose-cannon DEA agent, he becomes the unwilling custodian of 12-year-old Mathilda.\u2026'
  },
  {
    img: "https://image.tmdb.org/t/p/w185/8nrQKQjD6z0SJouKHQapXzmjFc6.jpg ",
    rating: "4.8",
    title: "The Apartment",
    year: "1960",
    tags: [
      {
        name: "Comedy"
      },
      {
        name: "Drama"
      },
      {
        name: "Romance"
      }
    ],
    description:
      "Bud Baxter is a minor clerk in a huge New York insurance company, until he discovers a quick way to climb the corporate ladder. He lends out his apartment to the executives as a place to take their mistresses. Although\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/pOvTNdPmYsHXSFWSud9VIgRhLpL.jpg ",
    rating: "4.8",
    title: "Who Am I - No System is Safe",
    year: "2014",
    tags: [
      {
        name: "Thriller"
      }
    ],
    description:
      "Benjamin, a young German computer whiz, is invited to join a subversive hacker group that wants to be noticed on the world's stage."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/38oLhYF5AHrptrd0Uo7dU2ex6qR.jpg ",
    rating: "4.8",
    title: "The Tale of the Princess Kaguya",
    year: "2013",
    tags: [
      {
        name: "Fantasy"
      },
      {
        name: "Animation"
      },
      {
        name: "Drama"
      }
    ],
    description:
      "Found inside a shining stalk of bamboo by an old bamboo cutter and his wife, a tiny girl grows rapidly into an exquisite young lady. The mysterious young princess enthralls all who encounter her - but ultimately\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/wPeorCnD9MRR2S9Dzh4OpIgNLiv.jpg ",
    rating: "4.8",
    title: "Batman: The Dark Knight Returns, Part 2",
    year: "2013",
    tags: [
      {
        name: "Animation"
      },
      {
        name: "Action"
      }
    ],
    description:
      "Batman has stopped the reign of terror that The Mutants had cast upon his city. Now an old foe wants a reunion and the government wants The Man of Steel to put a stop to Batman."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/Ai1lpWFaBHH3szTSBz7eZT3iobi.jpg ",
    rating: "4.8",
    title: "The Searchers",
    year: "1956",
    tags: [
      {
        name: "Western"
      }
    ],
    description:
      "As a Civil War veteran spends years searching for a young niece captured by Indians, his motivation becomes increasingly questionable."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/xeN0ZLHOIKuAiffuCgvERft3PkV.jpg ",
    rating: "4.8",
    title: "Yojimbo",
    year: "1961",
    tags: [
      {
        name: "Action"
      },
      {
        name: "Drama"
      },
      {
        name: "Thriller"
      }
    ],
    description:
      "The incomparable Toshiro Mifune stars in Akira Kurosawa\u00e2\u0080\u0099s visually stunning and darkly comic Yojimbo. To rid a terror-stricken village of corruption, wily masterless samurai Sanjuro turns a range war between two\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/aoxYci1HnJdb4bno2jYSnzSGDkL.jpg ",
    rating: "4.8",
    title: "Dallas Buyers Club",
    year: "2013",
    tags: [
      {
        name: "Drama"
      },
      {
        name: "History"
      }
    ],
    description:
      "Loosely based on the true-life tale of Ron Woodroof, a drug-taking, women-loving, homophobic man who in 1986 was diagnosed with HIV/AIDS and given thirty days to live."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/iunmxWkOi7Vk17Ob3G2HwwjgHsr.jpg ",
    rating: "4.8",
    title: "The Pianist",
    year: "2002",
    tags: [
      {
        name: "Drama"
      },
      {
        name: "War"
      }
    ],
    description:
      "The Pianist is a film adapted from the biography of Wladyslaw Szpilman. A Jewish-Polish pianist who during the second world war lived and hid miraculously in Warsaw after having gone through a terrible tragedy.\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/6lMXjI1O1N7XyZEjqIo5wkbrgxg.jpg ",
    rating: "4.8",
    title: "Paths of Glory",
    year: "1957",
    tags: [
      {
        name: "War"
      },
      {
        name: "Drama"
      }
    ],
    description:
      "During World War I, commanding officer General Broulard (Adolphe Menjou) orders his subordinate, General Mireau (George Macready), to attack a German trench position, offering a promotion as an incentive. Though\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/wYkiNNMM1O5c2yEcj8Lf9UbaB1a.jpg ",
    rating: "4.8",
    title: "Short Term 12",
    year: "2013",
    tags: [
      {
        name: "Drama"
      }
    ],
    description:
      "A 20-something supervising staff member of a residential treatment facility navigates the troubled waters of that world alongside her co-worker and longtime boyfriend."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/yAhqW57pwMAsCgmZpM5zSIVQVTh.jpg ",
    rating: "4.8",
    title: "Prisoners",
    year: "2013",
    tags: [
      {
        name: "Drama"
      },
      {
        name: "Thriller"
      },
      {
        name: "Crime"
      }
    ],
    description:
      "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts. But just how far will this desperate father go to protect\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/71dIayQVmWw2QEs4AJFpqdv2n0S.jpg ",
    rating: "4.8",
    title: "Bajrangi Bhaijaan",
    year: "2015",
    tags: [
      {
        name: "Drama"
      },
      {
        name: "Comedy"
      }
    ],
    description:
      "A young mute girl from Pakistan loses herself in India with no way to head back. A devoted man with a magnanimous spirit undertakes the task to get her back to her motherland and unite her with her family."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/cjEepHZOZAwmK6nAj5jis6HV75E.jpg ",
    rating: "4.8",
    title: "Rush",
    year: "2013",
    tags: [
      {
        name: "Drama"
      },
      {
        name: "Action"
      }
    ],
    description:
      "A biographical drama centered on the rivalry between Formula 1 drivers James Hunt and Niki Lauda during the 1976 Formula One motor-racing season."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/emuYkqLndEqeVNY5LpFvGXfAO3O.jpg ",
    rating: "4.8",
    title: "A Trip to the Moon",
    year: "1902",
    tags: [
      {
        name: "Science Fiction"
      },
      {
        name: "Adventure"
      },
      {
        name: "Fantasy"
      }
    ],
    description:
      "A Trip to The Moon is a science fiction film from the French film pioneer Georges M\u00c3\u00a9li\u00c3\u00a8s from the year 1902 about a trip to the moon. The film was the first film with a self-contained plot and was the beginning\u2026"
  },
  {
    img: "https://image.tmdb.org/t/p/w185/lDXJUmLQsViSKLbil2luD91l2kE.jpg ",
    rating: "4.8",
    title: "The Elephant Man",
    year: "1980",
    tags: [
      {
        name: "Drama"
      },
      {
        name: "History"
      }
    ],
    description:
      'A Victorian surgeon rescues a heavily disfigured man being mistreated by his "owner" as a side-show freak. Behind his monstrous facade, there is revealed a person of great intelligence and sensitivity. Based on\u2026'
  },
  {
    img: "https://image.tmdb.org/t/p/w185/eVo6ewq4akfyJYy3GXkMsLNzEJc.jpg ",
    rating: "4.8",
    title: "The City of Lost Children",
    year: "1995",
    tags: [
      {
        name: "Fantasy"
      },
      {
        name: "Science Fiction"
      },
      {
        name: "Adventure"
      }
    ],
    description:
      "A scientist in a surrealist society kidnaps children to steal their dreams, hoping that they slow his aging process."
  },
  {
    img: "https://image.tmdb.org/t/p/w185/zgB9CCTDlXRv50Z70ZI4elJtNEk.jpg ",
    rating: "4.8",
    title: "Se7en",
    year: "1995",
    tags: [
      {
        name: "Crime"
      },
      {
        name: "Mystery"
      },
      {
        name: "Thriller"
      }
    ],
    description:
      'Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the "seven deadly sins" in this dark and haunting film that takes viewers from the tortured remains of one victim to\u2026'
  },
  {
    img: "https://image.tmdb.org/t/p/w185/50LoR9gJhbWZ5PpoHgi8MNTYgzd.jpg ",
    rating: "4.8",
    title: "The Lord of the Rings: The Return of the King",
    year: "2003",
    tags: [
      {
        name: "Adventure"
      },
      {
        name: "Fantasy"
      },
      {
        name: "Action"
      }
    ],
    description:
      "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam bring the ring closer to\u2026"
  }
];
