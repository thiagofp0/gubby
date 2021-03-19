module.exports = {
    name: 'create:controller',
    description: 'Create new controller inside src/controllers.',
    run: async toolbox =>{

        const {
            parameters,
            template,
            print: { success, error }
        } = toolbox;

        const name = parameters.first;

        if(!name){
            error('Você precisa definir um nome para o controlador.');
            return;
        }

        await template.generate({
            template: 'model.js.ejs',
            target: `src/controllers/${name}Controller.js`,
            
            props: { name },
        });

        success(`Controller ${name} criado!`);
    },
}