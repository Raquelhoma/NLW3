const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async (db) => {
    //inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.2139088",
        lng:"-49.6655874",
        name:"Lar de amor",
        about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: "5585981546687",
        images: [
            "https://images.unsplash.com/photo-1600786288442-2adfe1847dfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
            "https://images.unsplash.com/photo-1605999182551-96ab0c8ad8f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
        ].toString(), 
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas das 8h às 18h",
        open_on_weekends: "1"     
    })
    
    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
    

    //consultar somente um orfanato pelo id
    /*const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    //deletar 1 dado da tabela
    console.log(await db.run("DELETE FROM orphanages WHERE id = '4'"))*/

})
