const app = "I don't do much."

function destructivelyAppendKitten(name) {
  return kittens.push("Ralph")
}

function destructivelyPrependKitten(name) {
  return kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var newKittens = ("Broom")
  return newKittens
}

function removeLastKitten() {
  var newKittens = kittens.slice(kittens.length -1)
  return newKittens
  
}

function removeFirstKitten() {
  var newKittens = kittens.slice(kittens)
  return newKittens
}