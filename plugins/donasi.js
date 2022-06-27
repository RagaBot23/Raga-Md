let handler = async m => m.reply(`
╭─「 Donasi • Pulsa - Dana 」
│ •  [089696345686]
│ •  [089696345686]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
