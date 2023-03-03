const data = [
  {
    id: 'a',
    slug: 'vincent-van-zalinge-bird',
    alt: 'A tiny shrewd turquoise-and-amber bird',
    tags: [
      'bird',
      'blurred background',
      'wildlife',
      'animal in its natural habitat',
    ],
  },
  {
    id: 'b',
    slug: 'alexandru-rotariu-dog',
    alt: 'A serious-looking grey dog with cool glacier eyes',
    tags: ['dog', 'HD'],
  },
  {
    id: 'c',
    slug: 'scott-walsh-fox',
    alt: 'A happy-looking cute wild fox in nature, near some pink flowers',
    tags: ['fox', 'flowers'],
  },
  {
    id: 'd',
    slug: 'andy-holmes-giraffe',
    alt: 'A giraffe sticking its black tongue out',
    tags: ['giraffe', 'dramatic'],
  },
  {
    id: 'e',
    slug: 'karsten-winegeart-dog',
    alt: 'A small dog wearing a golden "Champions" hoodie',
    tags: ['dog', 'cute', 'animal wearing human clothes'],
  },
  {
    id: 'f',
    slug: 'marko-blazevic-cat',
    alt: 'A small kitten standing on its back legs, reaching up towards the camera',
    tags: ['kitten', 'cat', '#cute'],
  },
  {
    id: 'g',
    slug: 'mark-stoop-lizard',
    alt: 'A relaxed green lizard, sitting on a wooden beam',
    tags: ['lizard', 'world-famous insurance salesman from the commercials'],
  },
  {
    id: 'h',
    slug: 'geran-de-klerk-squirrel',
    alt: 'A fuzzy squirrel, highlighted in a dark backdrop',
    tags: ['squirrel', 'animal', 'fuzzy'],
  },
  {
    id: 'i',
    slug: 'wexor-tmg-turtle',
    alt: 'A large tropical turtle swimming in water',
    tags: ['turtle', 'ocean', 'flippers'],
  },
]

data.forEach((item) => {
  item.src = {
    jpg: [
      `/images/${item.slug}.jpg`,
      `/images/${item.slug}@2x.jpg`,
      `/images/${item.slug}@3x.jpg`,
    ],
    avif: [
      `/images/${item.slug}.avif`,
      `/images/${item.slug}@2x.avif`,
      `/images/${item.slug}@3x.avif`,
    ],
  }
})

export default data;
