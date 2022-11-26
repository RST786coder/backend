function home(){
    return async (req, res) => {
        res.json({name: 'akshay'});
    }
}

module.exports = home();