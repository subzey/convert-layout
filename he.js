var convert = require('./convert');

var map = {
    'q':  '/',
    'w':  "'",
    'e':  'ק',
    'r':  'ר',
    't':  'א',
    'y':  'ט',
    'u':  'ו',
    'i':  'ן',
    'o':  'ם',
    'p':  'פ',
    '[':  ']',
    '{':  '}',
    ']':  '[',
    '}':  '{',
    '\\': '\\',
    '|':  '|',
    'a':  'ש',
    's':  'ד',
    'd':  'ג',
    'f':  'כ',
    'g':  'ע',
    'h':  'י',
    'j':  'ח',
    'k':  'ל',
    'l':  'ך',
    ';':  'ף',
    ':':  ':',
    "'":  ',',
    '"':  '"',
    'z':  'ז',
    'x':  'ס',
    'c':  'ב',
    'v':  'ה',
    'b':  'נ',
    'n':  'מ',
    'm':  'צ',
    ',':  'ת',
    '<':  '>',
    '.':  'ץ',
    '>':  '<',
    '/':  '.',
    '?':  '?'
};

module.exports = convert(map);
