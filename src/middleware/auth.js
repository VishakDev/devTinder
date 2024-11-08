const auth = (req, res, next) => {
    //try {
        console.log("Auth check middleware");
        const a = 'abc';
        if (a == 'abc') {
            console.log("Auth successful");
            next();
        }
        else {
            console.log("Auth failed");
            res.status(401).send("Auth failed")
        }
        // else {
        //     throw new Error("Auth failed");
        // }
    // } catch (err) {
    //     throw err;
    // }
}

module.exports = {
    auth
}