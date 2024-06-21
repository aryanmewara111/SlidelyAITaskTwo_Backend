import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

interface Submission {
    name: string;
    email: string;
    phone: string;
    github_link: string;
    stopwatch_time: string;
}

const app = express();
const PORT = 3000;
const dbFilePath = 'db.json';

app.use(bodyParser.json());

//ping endpoint
app.get('/ping',(req, res) => {
    res.send('true');
});

//submit endpoint
app.post('/submit',(req, res) => {
    const {name, email, phone, github_link, stopwatch_time} = req.body;

    const submissions = JSON.parse(fs.readFileSync(dbFilePath,'utf8'));

    submissions.push({name, email, phone, github_link, stopwatch_time});

    fs.writeFileSync(dbFilePath, JSON.stringify(submissions),'utf8');

    res.status(200).send('Submission Saved Successfully');

});

app.get('/read',(req, res) => {

    const submissions = JSON.parse(fs.readFileSync(dbFilePath,'utf8'));
    res.status(200).json(submissions);
});

app.delete('/delete/:email', (req, res) => {
    const emailToDelete = req.params.email;
    const submissions: Submission[] = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));
    
    const filteredSubmissions = submissions.filter(submission => submission.email !== emailToDelete);
    
    fs.writeFileSync(dbFilePath, JSON.stringify(filteredSubmissions), 'utf8');
    
    res.status(200).send('Submission Deleted Successfully');
});

app.put('/update/:email', (req, res) => {
    const emailToUpdate = req.params.email;
    const updatedData = req.body;
    let submissions: Submission[] = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));

    submissions = submissions.map(submission => {
        if (submission.email === emailToUpdate) {
            return { ...submission, ...updatedData };
        }
        return submission;
    });

    fs.writeFileSync(dbFilePath, JSON.stringify(submissions), 'utf8');

    res.status(200).send('Submission Updated Successfully');
});

app.get('/submission/:email', (req, res) => {
    const emailToFind = req.params.email;
    const submissions: Submission[] = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));
    
    const submission = submissions.find(submission => submission.email === emailToFind);
    
    if (submission) {
        res.status(200).json(submission);
    } else {
        res.status(404).send('Submission Not Found');
    }
});

app.listen(PORT,() =>{
    console.log(`Server running on port ${PORT}`);
});