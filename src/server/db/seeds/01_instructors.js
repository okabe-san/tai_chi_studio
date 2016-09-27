exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('instructors').insert({
      id: 1,
      names: 'Alias Montoya',
      biography: 'A martial artist since childhood, Alias has spent time training in Kung Fu, Hapkido, and Ju-Jitsu before coming across Tai Chi around 22 years of age. He has since spent over a year training with his instructor. Alias\'s instructor has deemed his skills considerable enough to represent his particular form of the Chen Man-Ching Yang Style, and as such Alias is pleased and excited for this opportunity to engage and inform other potential practitioners in this rather enjoyable and peaceful art.',
      photo_url: 'taichii03.jpg'
    }),
    knex('instructors').insert({
      id: 2,
      names: 'Gina DeBell',
      biography: 'Gina has studied Tai Chi since 1999 and Shaolin Kung Fu since 2009 and has developed a deep understanding of how these traditional Chinese exercises can improve health, happiness and longevity. And, she is a keen Yoga and Pilates practitioner for over ten years.',
      photo_url: 'taichii09.jpg'
    }),
    knex('instructors').insert({
      id: 3,
      names: 'Akiko Okabe',
      biography: 'Akiko began studying Tai Chi with Master Li in 2000 in my hometown of Tokyo, Japan. She fell in love with this style of Tai Chi/Qi Gong because it integrated movement and mindfulness into one practice. She started my Nam Hoa Tai Chi instructor training in January of 2007.',
      photo_url: 'taichii10.jpg'
    }),
    knex('instructors').insert({
      id: 4,
      names: 'Phil Benz',
      biography: 'BAMF',
      photo_url: 'test'
    })
  ]);
};
