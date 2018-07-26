const exec = require('child_process').exec;

function web(req, res) {
    let command = `pwd`;
    exec(command, (err, out) => {
        if (err) return res.status(500).json({error: err});
        return res.status(200).json({content: out});
    });
}

module.exports = {
    web
};