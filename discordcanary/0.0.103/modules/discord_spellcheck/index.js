// [adill] This is not context aware and, as such, won't load in newer Electron versions
// We can and should strip `discord_spellcheck` down to CLD only once all channels are on Electron 9
function getLegacySpellchecker() {
  return require('spellchecker').Spellchecker;
}

// [adill] This is not context aware and, as such, won't load in newer Electron versions
// We can and should strip `discord_spellcheck` down to CLD only once all channels are on Electron 9
function getKeyboardLayout() {
  return require('keyboard-layout');
}

module.exports = {
  cld: require('cld'),
  getLegacySpellchecker,
  getKeyboardLayout,
};
