export const last = arr => arr[arr.length - 1]

export const sheetForTag = tag => {
  if (tag.sheet) {
    return tag.sheet
  }

  // this weirdness brought to you by firefox
  for (let i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i]
    }
  }
}

export const makeStyleTag = () => {
  let tag = document.createElement('style')
  tag.type = 'text/css'
  tag.setAttribute('data-glamor', '')
  tag.appendChild(document.createTextNode(''))
  ;(document.head || document.getElementsByTagName('head')[0]).appendChild(tag)
  return tag
}
