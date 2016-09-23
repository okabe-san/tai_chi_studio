
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('classes').insert({
          id: 1,
          name: 'Yang style',
          description: 'Yang style tai chi is the most popular and widely practiced tai chi style worldwide. In England and America, at least 20 main variations of the Yang style exist and in China, there are even more. The various schools originated from the approach of a specific master or from a particular geographic region within China. Each variation has a distinct flavor, looks different from the others to a greater or lesser degree and may emphasize different technical points.',
          instructor_id: 1,
          day: 'Monday',
          start_time: '06:00 am',
          end_time: '07:00 am'
        }),
        knex('classes').insert({
          id: 2,
          name: 'Wu style',
          description: 'Wu style tai chi is the second most popular style. It has three main variations with strong stylistic differences that derived from the founder, Chuan You, his son, Wu Jien Chuan, and his grandchildren. The Wu style was created directly from the Yang and, as such, is the largest variant of the Yang style. However, unlike most traditions in the Yang style, most Wu schools emphasize small, compact movements over large and medium-sized ones. The Yang and Wu, with all their variations, encompass the vast majority (80 percent or more) of all tai chi practitioners.',
          instructor_id: 2,
          day: 'Monday',
          start_time: '01:00 pm',
          end_time: '2:00 pm'
        }),
        knex('classes').insert({
          id: 3,
          name: 'Chen style',
          description: 'Chen style tai chi movements of the Chen Style\'s first level of training are done in slow motion. The Chen style alternates slow-motion movements with short, fast, explosive ones. It demands more physical coordination and may strain the lower back and knees more than other styles; consequently, it is difficult for the elderly or injured to learn. The complexity of its movements, which include fast releases combined with jumping kicks and stamping actions, makes it more athletic and physically difficult than most other tai chi styles and, as such, is often more appealing to young people or martial artists.',
          instructor_id: 3,
          day: 'Monday',
          start_time: '05:00 pm',
          end_time: '06:00 pm'
        }),
        knex('classes').insert({
          id: 4,
          name: 'Hao style',
          description: 'Hao style tai chi is exceedingly rare in China and almost non-existent in the West. Its small-frame movements are extremely small. Its primary focus is on tai chi\'s more internal chi movements with physical motions being much less important. As such, it is considered an advanced style that is hard to appreciate for practitioners without significant background knowledge of tai chi.',
          instructor_id: 1,
          day: 'Tuesday',
          start_time: '09:00 am',
          end_time: '10:00 am'
        }),
        knex('classes').insert({
          id: 5,
          name: 'Yang style',
          description: 'Yang style tai chi is the most popular and widely practiced tai chi style worldwide. In England and America, at least 20 main variations of the Yang style exist and in China, there are even more. The various schools originated from the approach of a specific master or from a particular geographic region within China. Each variation has a distinct flavor, looks different from the others to a greater or lesser degree and may emphasize different technical points.',
          instructor_id: 2,
          day: 'Tuesday',
          start_time: '02:00 pm',
          end_time: '03:00 pm'
        }),
        knex('classes').insert({
          id: 6,
          name: 'Wu style',
          description: 'Wu style tai chi is the second most popular style. It has three main variations with strong stylistic differences that derived from the founder, Chuan You, his son, Wu Jien Chuan, and his grandchildren. The Wu style was created directly from the Yang and, as such, is the largest variant of the Yang style. However, unlike most traditions in the Yang style, most Wu schools emphasize small, compact movements over large and medium-sized ones. The Yang and Wu, with all their variations, encompass the vast majority (80 percent or more) of all tai chi practitioners.',
          instructor_id: 3,
          day: 'Tuesday',
          start_time: '06:00 pm',
          end_time: '7:00 pm'
        }),
        knex('classes').insert({
          id: 7,
          name: 'Chen style',
          description: 'Chen style tai chi movements of the Chen Style\'s first level of training are done in slow motion. The Chen style alternates slow-motion movements with short, fast, explosive ones. It demands more physical coordination and may strain the lower back and knees more than other styles; consequently, it is difficult for the elderly or injured to learn. The complexity of its movements, which include fast releases combined with jumping kicks and stamping actions, makes it more athletic and physically difficult than most other tai chi styles and, as such, is often more appealing to young people or martial artists.',
          instructor_id: 1,
          day: 'Wednesday',
          start_time: '06:00 am',
          end_time: '07:00 am'
        }),
        knex('classes').insert({
          id: 8,
          name: 'Hao style',
          description: 'Hao style tai chi is exceedingly rare in China and almost non-existent in the West. Its small-frame movements are extremely small. Its primary focus is on tai chi\'s more internal chi movements with physical motions being much less important. As such, it is considered an advanced style that is hard to appreciate for practitioners without significant background knowledge of tai chi.',
          instructor_id: 2,
          day: 'Wednesday',
          start_time: '01:00 pm',
          end_time: '02:00 pm'
        }),
        knex('classes').insert({
          id: 9,
          name: 'Yang style',
          description: 'Yang style tai chi is the most popular and widely practiced tai chi style worldwide. In England and America, at least 20 main variations of the Yang style exist and in China, there are even more. The various schools originated from the approach of a specific master or from a particular geographic region within China. Each variation has a distinct flavor, looks different from the others to a greater or lesser degree and may emphasize different technical points.',
          instructor_id: 3,
          day: 'Wednesday',
          start_time: '05:00 pm',
          end_time: '05:00 pm'
        }),
        knex('classes').insert({
          id: 10,
          name: 'Chen style',
          description: 'Chen style tai chi movements of the Chen Style\'s first level of training are done in slow motion. The Chen style alternates slow-motion movements with short, fast, explosive ones. It demands more physical coordination and may strain the lower back and knees more than other styles; consequently, it is difficult for the elderly or injured to learn. The complexity of its movements, which include fast releases combined with jumping kicks and stamping actions, makes it more athletic and physically difficult than most other tai chi styles and, as such, is often more appealing to young people or martial artists.',
          instructor_id: 1,
          day: 'Thursday',
          start_time: '09:00 am',
          end_time: '010:00 am'
        }),
      ]);
    });
};
