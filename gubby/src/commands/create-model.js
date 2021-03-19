module.exports = {
    name: 'create:model',
    description: 'Create new model inside src/models.',
    run: async toolbox =>{

        const {
            parameters,
            template,
            print: { success, error }
        } = toolbox;

        const name = parameters.first;

        if(!name){
            error('Você precisa definir um nome para o modelo.');
            return;
        }

        await template.generate({
            template: 'model.js.ejs',
            target: `src/models/${name}.js`,
            
            props: { name },
        });

        success(`Model ${name} criado!`);
    },
}