export const liveCodeExample: string = `const test = 'test test'
function abc() {
  return 1;
}

const arrow = () => {
  return \`${1}, ${2}\`
}

function saySomethingUseful({ text, defaultParam = 1 }) {
  console.log(text)
}

saySomethingUseful({ text: 'swc is a very useful project' })
`