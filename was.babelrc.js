'use strict'

module.exports = {
  presets: [
    'next/babel'
  ],
  plugins: [
    // ["transform-define", "./env-config.js"]
    ['transform-define', { 'process.env.NODE_ENV': process.env.NODE_ENV }]
  ]
}