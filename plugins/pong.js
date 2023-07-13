import fs from 'fs'
function handler(m, { conn }) {
let text = `ping frocetto 🏓`.trim()   
conn.reply(m.chat, text, m, {
})
}
handler.customPrefix = /(pong)/i
handler.command = new RegExp
export default handler
