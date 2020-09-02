const {v4 : uuid} = require ('uuid')

const bookmarks = [
    {id: uuid(),
        title: 'Thinkful',
        url: 'https://www.thinkful.com',
        description: 'Think outside the classroom',
        rating: 5
    },
    {
        id: uuid(),
        title: 'Google',
        url: 'https://www.google.com',
        description: 'Where we find everything else',
        rating: 4
    },
    {
        id: uuid(),
        title: 'ESPN',
        url: 'https://www.espn.com',
        description: 'The worldwide leader in sports',
        rating: 2
    }
]

module.exports = {bookmarks}