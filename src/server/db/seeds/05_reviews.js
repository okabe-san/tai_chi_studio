exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('review').insert({
      id: 1,
      review: 'Hands down, the best instructor! He is amazing. I wake up early on the weekdays for his class. His class will keep you engaged and motivated. Warning this class is highly addictive!',
      instructor_id: 1
    }),
    knex('review').insert({
      id: 2,
      review: 'I just finished my first class! What a powerful workout.  It was challenging and I was able to control my own effort. She made the class Super fun. I can\'t wait to come back!!',
      instructor_id: 2
    }),
    knex('review').insert({
      id: 3,
      review: 'I\'ve studied Tai Chi with her for at least 15 years. She is gentle yet thorough. Each movement of the form is broken down into easy pieces and she explains the allegorical journey. I learn something new in each class. Tai Chi has improved the way I hold my body and has also helped to relax and center me. I highly recommend taking a class with her.',
      instructor_id: 3
    }),
    knex('review').insert({
      id: 4,
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      instructor_id: 1
    }),
    knex('review').insert({
      id: 5,
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      instructor_id: 2
    }),
    knex('review').insert({
      id: 6,
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      instructor_id: 3
    }),
    knex('review').insert({
      id: 7,
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      instructor_id: 1
    }),
    knex('review').insert({
      id: 8,
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      instructor_id: 2
    }),
    knex('review').insert({
      id: 9,
      review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      instructor_id: 3
    })
  ]);
};