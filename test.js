'use strict'

const test = require('ava')
const Window = require('window')
const window = new Window()

test('my passing test', t => {
  t.pass()
})

function createTitle (text, win) {
  win = win || (typeof window === 'undefined' ? undefined : window)
  const title = win.document.createElement('h1')
  title.innerHTML = text
  return title
}

function createSvg (text, win) {
  win = win || (typeof window === 'undefined' ? undefined : window)
  const svgItem = win.document.createElement('svg')
  svgItem.innerHTML = text
  return svgItem
}

test('enhanced assertions', t => {
  const a = /foo/
  const b = 'bar'
  const c = 'baz'
  t.assert(a.test(b) || b !== c)
})

test('Window Test', t => {
  const someWindow = createTitle('Hello')
  t.assert(someWindow)
})

test('SVG Element', t => {
  const someSvgElement = createSvg('abc')
  t.assert(someSvgElement)
})

module.exports = createTitle
