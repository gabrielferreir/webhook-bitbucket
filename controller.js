const exec = require('child_process').exec;

function web(req, res) {
    let command = `cd ../${req.body.repository.name} && git pull`;
    exec(command, (err, out) => {
        if (err) console.error(err);
        return res.status(200).json({content: out})
    });
}

module.exports = {
    web
};