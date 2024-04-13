/** @type {import('next').NextConfig} */
const nextjsCors = require( 'nextjs-cors')

module.exports = {
  middleware: [nextjsCors]
};
