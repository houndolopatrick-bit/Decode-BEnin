//Application de gestion des étudiants

const express =  require('express');
const app = express();

const PORT = 3000;


// Middleware : Parse les données renvoyer par utilisateur en format JSON pour notre serveur

app.use(express.json());

// Liste des étudiants
let student = [];

// Logics

app.get("/", (req, res) => {
    console.log("Bienvenue dans votre système de gestion d'étudiants");
    return res.status(200).json({message : 'Merci pour la confiance'})
});


// Création d'un étudiant
app.post("/createStudent", (req, res) =>{
    const {nom, prenom, adresse_email, adresse_domicile} = req.body;

    if (!nom || !prenom || !adresse_email || !adresse_domicile) {

        return res.status(400).json({message : "Tous les champs sont obligatoires"});
        
    }; 
    
     const newStudent = {
        id : Date.now(),
        nom,
        prenom,
        adresse_email,
        adresse_domicile
    };
    
    student.push(newStudent);
    return res.status(201).json(newStudent);
});


// Get all students

app.get('/allStudent', (req, res) => {

    return res.status(200).json(student)

});


//Get a student by id 
app.get('/get-student/:id', (req, res)=> {
    try{
        const id = req.params.id; // Obliger de convertir ce string en number

        index = student.findIndex( t => t.id === parseInt(id))
        const student = student[index];
        res.status(200).json(student);
    
    } catch(err) {
        
        res.status(400).json({'message' : "Cet identifiant n'existe pas"})
    }
    
});


// Delete a student
// les : d'un param avant le param, une erreur dans l'endpoint et ton serveur crashe.
app.delete('/del-student/:id', (req, res) =>{ 
    const id = req.params.id;

    const index = student.findIndex(t => t.id === parseInt(id));

    if(index === -1){
        res.status(404).json({message : 'Student is not found'});
    } 
    
    else {
        student.splice(index, 1); // splice modifie le tableau originale
        res.status(202).json({message : 'Student delete successfully'});

    };

} );

// UPDATE student information
app.put('/up- student/:id', (req, res) => {
    const id = req.params.id

    const index = student.findIndex(t => t.index === parseInt(id));
    if (index === -1){
        res.status(404).json({message : 'Student is not found'});

    } 
    else {
        const {nom, prenom, adresse_email, adresse_domicile} = req.body;
        const id = student[index].id

        // Fallait utiliser les crochets et non student.index
        student[index] = { 
            id,
            nom,
            prenom,
            adresse_email,
            adresse_domicile
        };
        res.status(200).json({message : 'Student is deleted'});
    }


})

app.listen(PORT, () => {
    console.log(`Serveur is running on ${PORT}`);
})