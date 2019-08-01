const express = require('express')
const faker = require('faker')
const Mock = require('mockjs')
const cors = require('cors')

const app = express()

const Random = Mock.Random

app.use(cors())

app.get('/events', (req, res) => {
  var data = []
  for (var i = 0; i < 15; i++) {
    data.push(
      Mock.mock({
        id: Random.id(),
        created_at: '',
        title: Random.ctitle,
        points: 22,
        comment_text: Random.cparagraph,
        author: {
          name: faker.name.firstName
        },
        tag: ['story', 'sports'],
        address: faker.address.county
      })
    )
  }
  res.json({
    data: {
      count: 10,
      data
      // data: null
    },
    error_code: 0,
    error_msg: ''
  })
})

app.get('/event', (req, res) => {
  res.json({
    // data: null,
    data: Mock.mock({
      id: Random.id(),
      created_at: '',
      title: Random.ctitle,
      points: 22,
      comment_text: Random.cparagraph,
      author: {
        name: faker.name.firstName
      },
      tag: ['story', 'sports'],
      address: faker.address.county
    }),
    error_code: 0,
    error_msg: ''
  })
})

app.listen(3000)
