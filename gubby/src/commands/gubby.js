const command = {
  name: 'gubby',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Olá, No Bugger!')
  }
}

module.exports = command
